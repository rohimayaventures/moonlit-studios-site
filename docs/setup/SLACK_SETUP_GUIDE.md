# 🔔 Slack Notification Setup Guide

## Current Status: Webhook Configured ✅

You already have `SLACK_WEBHOOK_URL` in your `.env.local` - that's all you need!

---

## How Slack Webhooks Work

**Incoming Webhooks = Simple, One-Way Notifications**
- You send JSON to the webhook URL
- Slack posts a message to your channel
- **No API token needed** - the webhook URL is the auth
- **No OAuth needed** - it's pre-authorized

**What You Have:**
```
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR_WORKSPACE_ID/YOUR_CHANNEL_ID/YOUR_SECRET_TOKEN
```

This is **sufficient** for receiving Kai notifications!

---

## Why Your Notifications Might Not Be Working

### 1. **Webhook Might Be Expired/Deleted**
Slack webhooks can be:
- Deleted if the Slack app was removed
- Regenerated if someone clicked "Regenerate"
- Disabled if the channel was deleted

**How to Check:**
1. Go to https://api.slack.com/apps
2. Find your Moonlit Studios app (or create one if missing)
3. Go to **Incoming Webhooks** in the sidebar
4. Check if your webhook is listed and **Active**

---

### 2. **Webhook Channel Was Deleted**
If the channel the webhook posts to was deleted, notifications will fail silently.

**How to Fix:**
1. Check which channel your webhook posts to
2. Make sure that channel still exists
3. If channel was deleted, create a new webhook for a different channel

---

### 3. **Slack App Permissions Issue**
Sometimes Slack apps lose permissions.

**How to Fix:**
1. Go to https://api.slack.com/apps
2. Select your app
3. Go to **OAuth & Permissions**
4. Scroll to **Scopes** → **Bot Token Scopes**
5. Ensure `incoming-webhook` is listed
6. If not, add it and reinstall the app to your workspace

---

### 4. **Payload Format Issue**
If the JSON we're sending doesn't match Slack's format, it will reject it.

**Current Payload We're Sending:**
```json
{
  "text": "🔥 HOT Lead (Score: 85/100) - Moonlit Studios",
  "blocks": [
    {
      "type": "header",
      "text": {
        "type": "plain_text",
        "text": "🔥 HOT Lead (Score: 85/100)"
      }
    },
    {
      "type": "section",
      "fields": [
        {
          "type": "mrkdwn",
          "text": "*Lead Score:*\n85/100 (🔥 HOT)"
        },
        {
          "type": "mrkdwn",
          "text": "*Priority:*\nURGENT 🚨"
        }
      ]
    },
    // ... more blocks
  ]
}
```

This format is **correct** for Slack Block Kit.

---

## 🧪 How to Test Your Slack Webhook Manually

### Option 1: Test with curl (Quick)
```bash
curl -X POST YOUR_SLACK_WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -d '{"text":"Test from Moonlit Studios - Webhook is working! 🌙"}'
```

**If this works:** Your webhook is valid, issue is in our code
**If this fails:** Your webhook needs to be regenerated

---

### Option 2: Test with Kai (Real Scenario)
1. Open your site: http://localhost:3000
2. Open Kai widget (moon icon)
3. Send this message:
   ```
   I need a website for my cafe, budget $3000, can we schedule a call?
   ```
4. Check your terminal for logs:
   - Look for: `📤 Sending notification to...`
   - Look for: `✅ Notification API call successful`
   - Look for: `✅ Slack notification sent successfully`

**If you see errors instead**, copy the error message and I'll help debug!

---

## 🔧 How to Regenerate Your Slack Webhook

If your webhook is expired/broken, here's how to create a new one:

### Step 1: Go to Your Slack Apps
https://api.slack.com/apps

### Step 2: Create or Select App
- If you have a "Moonlit Studios" app → Click it
- If not → Click **Create New App** → **From scratch**
  - Name: "Moonlit Studios Notifications"
  - Workspace: Your workspace

### Step 3: Enable Incoming Webhooks
1. In the sidebar, click **Incoming Webhooks**
2. Toggle **Activate Incoming Webhooks** to **ON**
3. Scroll down, click **Add New Webhook to Workspace**
4. Select the channel where you want notifications (e.g., `#kai-leads`)
5. Click **Allow**

### Step 4: Copy the New Webhook URL
You'll see a webhook URL that looks like a long URL starting with `hooks.slack.com/services/...`

### Step 5: Update Your .env.local
Replace the old webhook URL with the new one:
```
SLACK_WEBHOOK_URL=YOUR_FULL_WEBHOOK_URL_HERE
```

### Step 6: Restart Your Dev Server
```bash
# Stop the current server (Ctrl+C)
npm run dev
```

---

## 🚨 Common Errors & Solutions

### Error: "invalid_token"
**Cause:** Webhook URL is wrong or expired
**Fix:** Regenerate webhook (see above)

### Error: "channel_not_found"
**Cause:** The channel the webhook posts to was deleted
**Fix:** Create new webhook for a different channel

### Error: "invalid_payload"
**Cause:** JSON format is wrong
**Fix:** This shouldn't happen with our code, but if it does, let me know the full error

### Error: "no_service"
**Cause:** Webhook URL is incomplete or malformed
**Fix:** Double-check your `.env.local` has the full URL

### No Error, But No Slack Message
**Possible Causes:**
1. Webhook is sending to a channel you're not in
   - **Fix:** Join the channel or check all your channels
2. Notifications are muted/filtered
   - **Fix:** Check Slack notification settings
3. Message is being sent but you're looking in wrong workspace
   - **Fix:** Verify webhook workspace matches where you're checking

---

## 📊 What Should Happen When It Works

### In Your Terminal:
```
📤 Sending notification to: http://localhost:3000/api/kai/notify
✅ Notification API call successful
✅ Email notification sent successfully
✅ Slack notification sent successfully
🔥 Lead scored: 65/100 (WARM) - Type: business_inquiry - Message: "I need a website for my cafe, budget $3000..."
```

### In Your Slack Channel:
```
🔥 HOT Lead (Score: 85/100)

Lead Score: 85/100 (🔥 HOT)
Priority: URGENT 🚨

Buying Signals:
• Budget Mentioned
• Business Type Identified
• Urgent Timeline

Visitor Message:
"I need a website for my cafe, budget $3000, can we schedule a call?"

Kai's Response:
"Perfect timing! Small Business Launchpads ($1,500-$6k) are ideal..."
```

### In Your Email:
A beautiful HTML email with the same info + lead score visualization.

---

## 🎯 Next Steps

1. **Test your webhook with curl** (Option 1 above)
2. **Check the terminal logs** when you test with Kai
3. **Copy any error messages** you see
4. **Let me know what happens!**

If the curl test works but Kai test doesn't, the issue is in our code.
If the curl test fails, you need to regenerate your webhook.

---

## 💡 Pro Tip: Dedicated Slack Channel

Create a dedicated channel like `#kai-leads` for these notifications:
1. Keeps them organized
2. Easy to mute when you don't want interruptions
3. Can invite team members later
4. Won't clutter your main channels

---

## ❓ Still Not Working?

Share with me:
1. ✅ Did the curl test work?
2. 📋 What do the terminal logs show?
3. ❌ Any error messages?
4. 🔍 Which channel is your webhook posting to?

I'll help you debug it!

---

Built with 🌙 by Moonlit Studios
"Where healthcare expertise meets cutting-edge development"
