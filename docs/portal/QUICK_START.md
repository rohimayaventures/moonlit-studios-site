# 🚀 Client Portal - Quick Start

## For You (Admin)

### View Portal Dashboard
```
https://www.moonlitstudios.com/admin/portal
```

### Create New Client
```
https://www.moonlitstudios.com/admin/portal/clients/new
```

### Create New Project
```
https://www.moonlitstudios.com/admin/portal/projects/new
```

---

## For Your Clients

### Portal Login
```
https://www.moonlitstudios.com/portal/login
```

**They need:**
1. Their email address (the one used for payment or that you set up)
2. Access to their email inbox (to receive magic link)

**Login flow:**
1. Enter email
2. Click "Send Access Link"
3. Check email
4. Click link in email
5. Logged in for 7 days!

---

## Common Tasks

### Give Client Portal Access

**Option 1: They Paid via Stripe** ✅ AUTO
- Nothing to do! Portal account created automatically
- They receive email with login instructions

**Option 2: Manual Onboarding**
1. Go to `/admin/portal/clients/new`
2. Enter their name and email
3. Click "Create Client"
4. Tell them to login at `/portal/login`

### Share Files with Client

1. Go to `/admin/portal/projects/{id}`
2. Scroll to "Files" section
3. Click "Upload File"
4. Select file (max 50MB)
5. Choose category (Deliverable, Asset, Contract, Other)
6. Add description
7. Click "Upload"
8. Client gets notified via email!

### Message a Client

1. Go to `/admin/portal/projects/{id}`
2. Scroll to "Messages" section
3. Type your message
4. Click "Send"
5. Client gets notified via email!

### Update Project Status

1. Go to `/admin/portal/projects/{id}`
2. Click the status badge (top right)
3. Select new status:
   - Not Started (⏳)
   - In Progress (🔄)
   - Review (👀) - waiting for client
   - Completed (✅)
   - On Hold (⏸️)
4. Status updates instantly for client!

### Mark Milestone Complete

1. Go to `/admin/portal/projects/{id}`
2. Find the milestone
3. Click "Mark Complete"
4. Progress bar updates for client!

---

## Client View

### What Clients See

**Dashboard:**
- All their projects in one place
- Stats (total projects, active, messages)
- Quick links (start new project, contact support)

**Project Page:**
- Real-time status
- Progress bar with milestones
- Download your files
- Upload feedback files
- Send messages directly to you
- View timeline

---

## File Categories

When uploading files, choose the right category:

- **📦 Deliverable:** Final assets (website files, logos, etc.)
- **🎨 Asset:** Design files, resources, templates
- **📄 Contract:** Agreements, invoices, receipts
- **💬 Feedback:** Files from client (requirements, revisions)
- **📁 Other:** Anything else

---

## Email Notifications

### Clients receive emails for:
- ✅ Magic link login (every login)
- ✅ Payment confirmation (Stripe)
- ✅ New message from you

### You receive emails for:
- ✅ New message from client
- ✅ Client uploads file (future)
- ✅ New client signs up (future)

---

## Testing Locally

### Create Test Client & Project

```bash
# 1. Start dev server
npm run dev

# 2. Visit admin portal
http://localhost:3000/admin/portal

# 3. Create test client
http://localhost:3000/admin/portal/clients/new
Name: Test Client
Email: your-email+test@gmail.com  # Use +test trick!

# 4. Create test project
http://localhost:3000/admin/portal/projects/new
Title: Test Website Project
Client: Test Client
Status: In Progress

# 5. Test client login
http://localhost:3000/portal/login
Email: your-email+test@gmail.com
```

Check your email for the magic link!

---

## Stripe Auto-Creation

When client pays via Stripe, portal automatically creates:

### Client Account
- Email: From Stripe checkout
- Name: From Stripe customer
- Stripe ID: Linked for future payments

### Project
- Title: `{Package} - {Client Name}`
- Package: From Stripe metadata
- Price: Payment amount
- Payment ID: Stripe payment intent
- Status: Not Started
- 5 default milestones:
  1. Project Kickoff
  2. Design Phase
  3. Development
  4. Testing & QA
  5. Launch

### Email Sent
- Payment confirmation
- Portal login instructions
- Next steps

**All automatic! No work required!**

---

## URLs Quick Reference

### Admin
- `/admin/portal` - Dashboard
- `/admin/portal/clients` - All clients
- `/admin/portal/clients/new` - Add client
- `/admin/portal/projects` - All projects
- `/admin/portal/projects/new` - Add project
- `/admin/portal/projects/{id}` - Project detail

### Client
- `/portal/login` - Login page
- `/portal/dashboard` - Client dashboard
- `/portal/projects/{id}` - Project detail

### API
- `POST /api/portal/auth/request-access` - Request magic link
- `GET /api/portal/auth/verify?token=X` - Verify token
- `POST /api/portal/auth/logout` - Logout
- `GET /api/portal/auth/session` - Check session
- `POST /api/portal/projects/{id}/messages` - Send message
- `POST /api/portal/projects/{id}/files` - Upload file
- `GET /api/portal/projects/{id}/files/{fileId}` - Download file

---

## Data Location

All portal data stored in:
```
/portal-data/  (gitignored - never pushed to GitHub)
  ├── clients/
  ├── projects/
  ├── messages/
  ├── files/
  ├── auth/
  └── sessions/
```

**Backup weekly:** Just copy the `portal-data/` folder!

---

## Security Notes

✅ **Secure by default:**
- Passwordless (no passwords to leak!)
- Magic links expire in 15 minutes
- One-time use tokens
- Sessions last 7 days
- HTTP-only cookies
- Project ownership verified on every request

✅ **Safe for production:**
- No sensitive data in GitHub
- All portal data gitignored
- Email hashing for client IDs
- Secure file storage

---

## Next Steps

1. ✅ Test portal locally (see above)
2. ✅ Test Stripe auto-creation with test payment
3. ✅ Push to GitHub
4. ✅ Vercel auto-deploys
5. ✅ Test on production
6. ✅ Update USER_TASKS.md with Vercel env vars
7. ✅ Tell clients about the portal!

---

## Need Help?

📖 **Full documentation:** `/docs/portal/CLIENT_PORTAL_GUIDE.md`
💬 **Questions?** Check the troubleshooting section in the full guide

---

Built with 🌙 by Moonlit Studios
