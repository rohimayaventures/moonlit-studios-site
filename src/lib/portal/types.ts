// 🌙 MOONLIT STUDIOS - CLIENT PORTAL TYPES
// File-based client portal system matching analytics architecture

export interface Client {
  id: string; // email hash
  email: string;
  name: string;
  company?: string;
  phone?: string;
  createdAt: string;
  stripeCustomerId?: string;
  notificationPreferences: {
    email: boolean;
    projectUpdates: boolean;
    fileUploads: boolean;
    messages: boolean;
  };
}

export interface Project {
  id: string; // unique project ID
  clientId: string; // references Client.id
  title: string;
  description: string;
  status: 'not_started' | 'in_progress' | 'review' | 'completed' | 'on_hold';
  createdAt: string;
  updatedAt: string;
  startDate?: string;
  completionDate?: string;
  estimatedCompletion?: string;

  // Package/Service info
  packageName?: string; // e.g., "Small Business Launchpad"
  packagePrice?: number;

  // Stripe integration
  stripePaymentId?: string;
  stripeSessionId?: string;
  paymentStatus?: 'pending' | 'paid' | 'partial' | 'refunded';

  // Milestones
  milestones: Milestone[];

  // Files
  files: ProjectFile[];

  // Team
  assignedTo?: string; // Your name/email
}

export interface Milestone {
  id: string;
  title: string;
  description?: string;
  status: 'pending' | 'in_progress' | 'completed';
  dueDate?: string;
  completedAt?: string;
  order: number;
}

export interface ProjectFile {
  id: string;
  projectId: string;
  fileName: string;
  originalName: string;
  fileSize: number;
  fileType: string;
  uploadedBy: 'client' | 'admin';
  uploadedAt: string;
  category?: 'deliverable' | 'asset' | 'feedback' | 'contract' | 'other';
  description?: string;
  filePath: string; // relative path in /portal-data/files/{projectId}/
}

export interface Message {
  id: string;
  projectId: string;
  from: 'client' | 'admin';
  fromName: string;
  fromEmail: string;
  content: string;
  timestamp: string;
  read: boolean;
  attachments?: string[]; // file IDs
}

export interface AuthToken {
  token: string;
  clientId: string;
  email: string;
  expiresAt: string;
  used: boolean;
  createdAt: string;
}

export interface PortalSession {
  sessionId: string;
  clientId: string;
  email: string;
  createdAt: string;
  expiresAt: string;
  lastActivity: string;
}

// API Response types
export interface PortalAuthResponse {
  success: boolean;
  message: string;
  token?: string;
  error?: string;
}

export interface ProjectResponse {
  success: boolean;
  project?: Project;
  projects?: Project[];
  error?: string;
}

export interface MessageResponse {
  success: boolean;
  message?: Message;
  messages?: Message[];
  error?: string;
}

export interface FileUploadResponse {
  success: boolean;
  file?: ProjectFile;
  error?: string;
}

// Dashboard stats
export interface DashboardStats {
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  pendingMessages: number;
  recentActivity: ActivityItem[];
}

export interface ActivityItem {
  type: 'project_created' | 'project_updated' | 'file_uploaded' | 'message_sent' | 'milestone_completed';
  title: string;
  description: string;
  timestamp: string;
  projectId?: string;
}
