// 🌙 MOONLIT STUDIOS - PORTAL STORAGE LAYER
// File-based JSON storage for client portal (matches analytics architecture)

import { writeFile, readFile, mkdir, readdir, unlink } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import crypto from 'crypto';
import type {
  Client,
  Project,
  Message,
  AuthToken,
  PortalSession,
  ProjectFile,
} from './types';

// Base directory for all portal data
const PORTAL_DATA_DIR = path.join(process.cwd(), 'portal-data');

// Subdirectories
const CLIENTS_DIR = path.join(PORTAL_DATA_DIR, 'clients');
const PROJECTS_DIR = path.join(PORTAL_DATA_DIR, 'projects');
const MESSAGES_DIR = path.join(PORTAL_DATA_DIR, 'messages');
const FILES_DIR = path.join(PORTAL_DATA_DIR, 'files');
const AUTH_DIR = path.join(PORTAL_DATA_DIR, 'auth');
const SESSIONS_DIR = path.join(PORTAL_DATA_DIR, 'sessions');

// Initialize directories
export async function initPortalStorage() {
  const dirs = [CLIENTS_DIR, PROJECTS_DIR, MESSAGES_DIR, FILES_DIR, AUTH_DIR, SESSIONS_DIR];
  for (const dir of dirs) {
    if (!existsSync(dir)) {
      await mkdir(dir, { recursive: true });
    }
  }
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

function hashEmail(email: string): string {
  return crypto.createHash('sha256').update(email.toLowerCase()).digest('hex').substring(0, 16);
}

function generateId(): string {
  return crypto.randomBytes(16).toString('hex');
}

async function readJSON<T>(filePath: string): Promise<T | null> {
  try {
    if (!existsSync(filePath)) return null;
    const content = await readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return null;
  }
}

async function writeJSON<T>(filePath: string, data: T): Promise<boolean> {
  try {
    await writeFile(filePath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error(`Error writing ${filePath}:`, error);
    return false;
  }
}

// ========================================
// CLIENT OPERATIONS
// ========================================

export async function getClient(email: string): Promise<Client | null> {
  const clientId = hashEmail(email);
  const filePath = path.join(CLIENTS_DIR, `${clientId}.json`);
  return readJSON<Client>(filePath);
}

export async function createClient(data: Omit<Client, 'id' | 'createdAt'>): Promise<Client | null> {
  await initPortalStorage();

  const clientId = hashEmail(data.email);
  const client: Client = {
    ...data,
    id: clientId,
    createdAt: new Date().toISOString(),
  };

  const filePath = path.join(CLIENTS_DIR, `${clientId}.json`);
  const success = await writeJSON(filePath, client);
  return success ? client : null;
}

export async function updateClient(email: string, updates: Partial<Client>): Promise<Client | null> {
  const client = await getClient(email);
  if (!client) return null;

  const updated = { ...client, ...updates, id: client.id, createdAt: client.createdAt };
  const clientId = hashEmail(email);
  const filePath = path.join(CLIENTS_DIR, `${clientId}.json`);
  const success = await writeJSON(filePath, updated);
  return success ? updated : null;
}

export async function getAllClients(): Promise<Client[]> {
  await initPortalStorage();
  const files = existsSync(CLIENTS_DIR) ? await readdir(CLIENTS_DIR) : [];
  const clients: Client[] = [];

  for (const file of files) {
    if (file.endsWith('.json')) {
      const client = await readJSON<Client>(path.join(CLIENTS_DIR, file));
      if (client) clients.push(client);
    }
  }

  return clients.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

// ========================================
// PROJECT OPERATIONS
// ========================================

export async function getProject(projectId: string): Promise<Project | null> {
  const filePath = path.join(PROJECTS_DIR, `${projectId}.json`);
  return readJSON<Project>(filePath);
}

export async function createProject(data: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Promise<Project | null> {
  await initPortalStorage();

  const projectId = generateId();
  const project: Project = {
    ...data,
    id: projectId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    milestones: data.milestones || [],
    files: data.files || [],
  };

  const filePath = path.join(PROJECTS_DIR, `${projectId}.json`);
  const success = await writeJSON(filePath, project);
  return success ? project : null;
}

export async function updateProject(projectId: string, updates: Partial<Project>): Promise<Project | null> {
  const project = await getProject(projectId);
  if (!project) return null;

  const updated: Project = {
    ...project,
    ...updates,
    id: project.id,
    createdAt: project.createdAt,
    updatedAt: new Date().toISOString(),
  };

  const filePath = path.join(PROJECTS_DIR, `${projectId}.json`);
  const success = await writeJSON(filePath, updated);
  return success ? updated : null;
}

export async function getClientProjects(clientId: string): Promise<Project[]> {
  await initPortalStorage();
  const files = existsSync(PROJECTS_DIR) ? await readdir(PROJECTS_DIR) : [];
  const projects: Project[] = [];

  for (const file of files) {
    if (file.endsWith('.json')) {
      const project = await readJSON<Project>(path.join(PROJECTS_DIR, file));
      if (project && project.clientId === clientId) {
        projects.push(project);
      }
    }
  }

  return projects.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
}

export async function getAllProjects(): Promise<Project[]> {
  await initPortalStorage();
  const files = existsSync(PROJECTS_DIR) ? await readdir(PROJECTS_DIR) : [];
  const projects: Project[] = [];

  for (const file of files) {
    if (file.endsWith('.json')) {
      const project = await readJSON<Project>(path.join(PROJECTS_DIR, file));
      if (project) projects.push(project);
    }
  }

  return projects.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
}

export async function deleteProject(projectId: string): Promise<boolean> {
  try {
    const filePath = path.join(PROJECTS_DIR, `${projectId}.json`);
    if (existsSync(filePath)) {
      await unlink(filePath);
    }

    // Also delete associated messages
    const messagesPath = path.join(MESSAGES_DIR, `${projectId}.json`);
    if (existsSync(messagesPath)) {
      await unlink(messagesPath);
    }

    return true;
  } catch (error) {
    console.error('Error deleting project:', error);
    return false;
  }
}

// ========================================
// MESSAGE OPERATIONS
// ========================================

export async function getProjectMessages(projectId: string): Promise<Message[]> {
  const filePath = path.join(MESSAGES_DIR, `${projectId}.json`);
  const messages = await readJSON<Message[]>(filePath);
  return messages || [];
}

export async function addMessage(projectId: string, message: Omit<Message, 'id' | 'timestamp'>): Promise<Message | null> {
  await initPortalStorage();

  const messages = await getProjectMessages(projectId);
  const newMessage: Message = {
    ...message,
    id: generateId(),
    timestamp: new Date().toISOString(),
  };

  messages.push(newMessage);

  const filePath = path.join(MESSAGES_DIR, `${projectId}.json`);
  const success = await writeJSON(filePath, messages);
  return success ? newMessage : null;
}

export async function markMessageAsRead(projectId: string, messageId: string): Promise<boolean> {
  const messages = await getProjectMessages(projectId);
  const message = messages.find(m => m.id === messageId);
  if (!message) return false;

  message.read = true;
  const filePath = path.join(MESSAGES_DIR, `${projectId}.json`);
  return writeJSON(filePath, messages);
}

// ========================================
// AUTH TOKEN OPERATIONS
// ========================================

export async function createAuthToken(email: string): Promise<AuthToken | null> {
  await initPortalStorage();

  const client = await getClient(email);
  if (!client) return null;

  const token = crypto.randomBytes(32).toString('hex');
  const authToken: AuthToken = {
    token,
    clientId: client.id,
    email: client.email,
    expiresAt: new Date(Date.now() + 15 * 60 * 1000).toISOString(), // 15 minutes
    used: false,
    createdAt: new Date().toISOString(),
  };

  const filePath = path.join(AUTH_DIR, `${token}.json`);
  const success = await writeJSON(filePath, authToken);
  return success ? authToken : null;
}

export async function validateAuthToken(token: string): Promise<AuthToken | null> {
  const filePath = path.join(AUTH_DIR, `${token}.json`);
  const authToken = await readJSON<AuthToken>(filePath);

  if (!authToken) return null;
  if (authToken.used) return null;
  if (new Date(authToken.expiresAt) < new Date()) return null;

  return authToken;
}

export async function markTokenAsUsed(token: string): Promise<boolean> {
  const filePath = path.join(AUTH_DIR, `${token}.json`);
  const authToken = await readJSON<AuthToken>(filePath);
  if (!authToken) return false;

  authToken.used = true;
  return writeJSON(filePath, authToken);
}

// ========================================
// SESSION OPERATIONS
// ========================================

export async function createSession(clientId: string, email: string): Promise<PortalSession | null> {
  await initPortalStorage();

  const sessionId = crypto.randomBytes(32).toString('hex');
  const session: PortalSession = {
    sessionId,
    clientId,
    email,
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days
    lastActivity: new Date().toISOString(),
  };

  const filePath = path.join(SESSIONS_DIR, `${sessionId}.json`);
  const success = await writeJSON(filePath, session);
  return success ? session : null;
}

export async function validateSession(sessionId: string): Promise<PortalSession | null> {
  const filePath = path.join(SESSIONS_DIR, `${sessionId}.json`);
  const session = await readJSON<PortalSession>(filePath);

  if (!session) return null;
  if (new Date(session.expiresAt) < new Date()) return null;

  // Update last activity
  session.lastActivity = new Date().toISOString();
  await writeJSON(filePath, session);

  return session;
}

export async function deleteSession(sessionId: string): Promise<boolean> {
  try {
    const filePath = path.join(SESSIONS_DIR, `${sessionId}.json`);
    if (existsSync(filePath)) {
      await unlink(filePath);
    }
    return true;
  } catch (error) {
    console.error('Error deleting session:', error);
    return false;
  }
}

// ========================================
// FILE OPERATIONS
// ========================================

export async function getProjectFilesDir(projectId: string): Promise<string> {
  const dir = path.join(FILES_DIR, projectId);
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
  return dir;
}

export async function addProjectFile(projectId: string, file: Omit<ProjectFile, 'id' | 'uploadedAt'>): Promise<ProjectFile | null> {
  const project = await getProject(projectId);
  if (!project) return null;

  const projectFile: ProjectFile = {
    ...file,
    id: generateId(),
    uploadedAt: new Date().toISOString(),
  };

  project.files.push(projectFile);
  await updateProject(projectId, { files: project.files });

  return projectFile;
}

export async function deleteProjectFile(projectId: string, fileId: string): Promise<boolean> {
  const project = await getProject(projectId);
  if (!project) return false;

  const fileIndex = project.files.findIndex(f => f.id === fileId);
  if (fileIndex === -1) return false;

  const file = project.files[fileIndex];

  // Delete physical file
  try {
    const filePath = path.join(FILES_DIR, file.filePath);
    if (existsSync(filePath)) {
      await unlink(filePath);
    }
  } catch (error) {
    console.error('Error deleting file:', error);
  }

  // Remove from project
  project.files.splice(fileIndex, 1);
  await updateProject(projectId, { files: project.files });

  return true;
}
