# 🌙 Client Portal - Complete Guide

## Overview

The Moonlit Studios Client Portal is a **file-based, zero-cost** project management system that integrates seamlessly with your existing Stripe payments. Clients can track projects, download files, upload feedback, and message you directly.

---

## 🎯 Key Features

### **For Clients:**
- ✅ Magic link authentication (passwordless, secure)
- 📊 Real-time project status tracking
- 📁 File downloads (deliverables, assets, contracts)
- 📤 File uploads (feedback, requirements)
- 💬 Direct messaging with you
- 📅 Milestone tracking
- 💳 Payment history from Stripe
- 📧 Email notifications

### **For You (Admin):**
- 👥 Client management
- 📝 Project creation and updates
- 📤 File sharing
- 💬 Messaging
- 🔄 Status updates
- 📊 Dashboard overview
- 🤖 Auto-creation from Stripe payments

---

## 🚀 How It Works

### **1. Client Gets Portal Access**

**Automatic (via Stripe):**
1. Customer makes a payment via Stripe
2. Portal automatically creates:
   - Client account (using their email)
   - Project with 5 default milestones
   - Payment info attached
3. Client receives email confirmation with portal link

**Manual (for existing clients):**
1. You create client account at `/admin/portal/clients/new`
2. Create project at `/admin/portal/projects/new`
3. Client logs in at `/portal/login` using their email

### **2. Client Logs In**

1. Client visits `www.moonlitstudios.com/portal/login`
2. Enters their email
3. Receives magic link via email (valid 15 minutes)
4. Clicks link → logged in for 7 days

### **3. Client Uses Portal**

**Dashboard** (`/portal/dashboard`):
- See all their projects
- View stats (total, active, messages)
- Quick actions (start new project, contact support)

**Project Detail** (`/portal/projects/[id]`):
- Project status and milestones
- Download files you upload
- Upload files for feedback
- Message you directly
- View timeline

---

## 📂 Data Storage Structure

All portal data is stored in `/portal-data/` (gitignored):

```
portal-data/
├── clients/
│   ├── {email-hash}.json      # Client account info
│   └── {email-hash}.json
├── projects/
│   ├── {project-id}.json      # Project details
│   └── {project-id}.json
├── messages/
│   ├── {project-id}.json      # Messages array
│   └── {project-id}.json
├── files/
│   ├── {project-id}/
│   │   ├── {file-hash}.pdf
│   │   └── {file-hash}.png
│   └── {project-id}/
├── auth/
│   └── {token}.json           # Magic link tokens
└── sessions/
    └── {session-id}.json      # Active sessions
```

---

## 🔐 Security

### **Authentication:**
- Magic links (email-based, passwordless)
- 15-minute token expiry
- One-time use tokens
- 7-day sessions with auto-renewal
- HTTP-only cookies

### **Authorization:**
- Clients can only see their own projects
- File downloads verified by project ownership
- Session validation on every request

### **Data Protection:**
- All portal data gitignored
- Email hashing for client IDs
- Secure file storage with random names
- No passwords to leak

---

## 🛠️ Admin Tasks

### **Create Client Account**

**URL:** `/admin/portal/clients/new`

**When to use:**
- Manual onboarding (no Stripe payment)
- Existing client needs portal access

**Data needed:**
- Name
- Email (required for login)
- Company (optional)
- Phone (optional)

### **Create Project**

**URL:** `/admin/portal/projects/new`

**When to use:**
- Client paid outside Stripe
- Adding new project for existing client

**Data needed:**
- Client (select from dropdown)
- Project title
- Description
- Package name (optional)
- Status (not_started, in_progress, review, completed, on_hold)
- Milestones
- Estimated completion date

### **Upload Files for Client**

**URL:** `/admin/portal/projects/{id}`

1. Navigate to project
2. Click "Upload File"
3. Select file (max 50MB)
4. Choose category:
   - 📦 Deliverable (final assets)
   - 🎨 Asset (design files, resources)
   - 📄 Contract (agreements, invoices)
   - 📁 Other
5. Add description (optional)
6. Upload

Client gets notified via email.

### **Send Message to Client**

**URL:** `/admin/portal/projects/{id}`

1. Navigate to project
2. Go to Messages tab
3. Type message
4. Send

Client gets notified via email.

### **Update Project Status**

**URL:** `/admin/portal/projects/{id}`

1. Navigate to project
2. Click status badge
3. Select new status:
   - ⏳ Not Started
   - 🔄 In Progress
   - 👀 Review (waiting for client feedback)
   - ✅ Completed
   - ⏸️ On Hold

Client sees updated status in real-time.

### **Update Milestones**

**URL:** `/admin/portal/projects/{id}`

1. Navigate to project
2. Click milestone
3. Update:
   - Title
   - Description
   - Status (pending, in_progress, completed)
   - Due date
4. Save

Client sees progress bar update.

---

## 🔗 Stripe Integration

### **Automatic Client & Project Creation**

When Stripe webhook receives `checkout.session.completed`:

1. **Client Creation:**
   - Email: `session.customer_email`
   - Name: `session.customer_details.name`
   - Stripe Customer ID: `session.customer`

2. **Project Creation:**
   - Title: `{packageName} - {clientName}`
   - Package: `metadata.packageName` (set in checkout)
   - Price: `session.amount_total`
   - Payment ID: `session.payment_intent`
   - Session ID: `session.id`
   - Status: `not_started`
   - 5 default milestones

3. **Client Notification:**
   - Payment confirmation email
   - Portal login instructions
   - Magic link to access portal

### **Setting Package Name in Checkout**

In `/api/payments/create-checkout-session/route.ts`:

```typescript
const session = await stripe.checkout.sessions.create({
  // ... other params
  metadata: {
    packageName: 'Small Business Launchpad',
    description: 'Complete website with CMS',
  },
});
```

The portal will use this metadata for the project.

---

## 📧 Email Notifications

### **Automatic Emails Sent:**

1. **Magic Link** (login)
   - Trigger: Client requests portal access
   - Contains: Secure 15-min link
   - From: `hello@moonlitstudios.com`

2. **Payment Confirmation**
   - Trigger: Stripe payment success
   - Contains: Receipt, portal access instructions
   - From: `hello@moonlitstudios.com`

3. **New Message** (to you)
   - Trigger: Client sends message
   - Contains: Message content, link to admin portal
   - To: `BUSINESS_EMAIL`

4. **File Uploaded** (future enhancement)
   - Trigger: Client uploads file
   - Contains: File info, project link
   - To: `BUSINESS_EMAIL`

5. **Project Update** (future enhancement)
   - Trigger: You update project status
   - Contains: New status, milestones
   - To: Client email

---

## 🚀 Going Live Checklist

### **Before Launch:**

- [ ] Test portal locally
  - [ ] Create test client
  - [ ] Create test project
  - [ ] Upload test file
  - [ ] Send test message
  - [ ] Test login flow

- [ ] Test Stripe integration
  - [ ] Make test payment
  - [ ] Verify client auto-created
  - [ ] Verify project auto-created
  - [ ] Check payment data attached

- [ ] Update environment variables
  - [ ] `NEXT_PUBLIC_SITE_URL=https://www.moonlitstudios.com/`
  - [ ] `BUSINESS_EMAIL=hello@moonlitstudios.com`
  - [ ] `RESEND_API_KEY=` (for emails)

- [ ] Deploy to Vercel
  - [ ] Push to GitHub
  - [ ] Vercel auto-deploys
  - [ ] Check build success

- [ ] Test on production
  - [ ] Portal login works
  - [ ] Magic links arrive
  - [ ] File uploads work
  - [ ] Messaging works
  - [ ] Mobile responsive

### **After Launch:**

- [ ] Monitor portal-data directory size
- [ ] Set up backups (copy portal-data weekly)
- [ ] Add client feedback mechanism
- [ ] Consider migration to database if >50 clients

---

## 📱 Mobile Responsiveness

All portal pages are fully responsive:
- Dashboard: Card grid → single column on mobile
- Project detail: Two-column → stacked on mobile
- Messages: Full-width on mobile
- Files: Touch-friendly upload button
- Login: Mobile-optimized form

Tested on:
- iOS Safari
- Android Chrome
- Desktop browsers (Chrome, Firefox, Safari, Edge)

---

## 🔧 Troubleshooting

### **Client can't log in:**

1. Check email is in portal:
   ```
   Look in /portal-data/clients/ for {email-hash}.json
   ```

2. Check magic link validity:
   - Expires after 15 minutes
   - One-time use only
   - Check /portal-data/auth/ for token

3. Resend magic link:
   - Client re-enters email at login page
   - New link sent

### **File upload fails:**

1. Check file size (max 50MB)
2. Check portal-data/files/{project-id}/ exists
3. Check disk space
4. Check file permissions

### **Messages not sending:**

1. Check RESEND_API_KEY in .env.local
2. Check BUSINESS_EMAIL configured
3. Check terminal for email API errors
4. Verify sender domain (hello@moonlitstudios.com)

### **Stripe integration not working:**

1. Check STRIPE_WEBHOOK_SECRET in .env.local
2. Verify webhook endpoint in Stripe Dashboard
3. Check webhook events in Stripe logs
4. Look for "Portal integration error" in terminal

---

## 🎨 Customization

### **Change Default Milestones:**

Edit `/src/app/api/stripe/webhook/route.ts`, line 183:

```typescript
milestones: [
  { id: crypto.randomUUID(), title: 'Your First Step', ... },
  { id: crypto.randomUUID(), title: 'Your Second Step', ... },
  // Add your custom milestones
],
```

### **Change Session Duration:**

Edit `/src/lib/portal/storage.ts`, line 215:

```typescript
expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days
```

Change `7` to your preferred days.

### **Change Magic Link Duration:**

Edit `/src/lib/portal/storage.ts`, line 183:

```typescript
expiresAt: new Date(Date.now() + 15 * 60 * 1000).toISOString(), // 15 minutes
```

Change `15` to your preferred minutes.

---

## 📊 Future Enhancements (Optional)

### **Phase 2:**
- Invoice generation
- Project templates
- Bulk file upload
- Advanced search/filtering
- Client analytics

### **Phase 3:**
- Team member invitations
- Multi-user permissions
- Real-time messaging (WebSockets)
- File versioning
- Activity timeline

### **Phase 4:**
- Mobile app
- Database migration (if >100 clients)
- Advanced reporting
- Integration API
- White-label portal

---

## 💡 Tips & Best Practices

1. **Onboarding:**
   - Send welcome email with portal instructions
   - Create first project immediately
   - Upload initial contract/assets
   - Send first message to greet client

2. **Communication:**
   - Respond to portal messages within 24 hours
   - Update project status weekly
   - Mark milestones complete as you finish them
   - Use descriptive file names

3. **Organization:**
   - Use consistent package names
   - Add detailed project descriptions
   - Categorize files properly
   - Archive completed projects

4. **Security:**
   - Never share portal-data folder
   - Backup portal-data weekly
   - Rotate magic links quickly (15 min default)
   - Monitor session activity

5. **Maintenance:**
   - Check portal-data size monthly
   - Clean up old auth tokens (auto-expire)
   - Review completed projects quarterly
   - Update milestones as needed

---

## 🆘 Support

**Need help?**
- Check troubleshooting section above
- Review code comments in `/src/lib/portal/`
- Check terminal logs for errors
- Test in local environment first

**Contact:**
- Email: hello@moonlitstudios.com
- Documentation: `/docs/portal/`

---

Built with 🌙 by Moonlit Studios
**"Where healthcare expertise meets cutting-edge development"**
