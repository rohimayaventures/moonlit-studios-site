# 🌙 AI Lab Rate Limiting & Demo Mode Implementation Guide

## Status: IN PROGRESS (Part 1 of 2 Complete)

---

## ✅ COMPLETED (Part 1)

### 1. Rate Limit Infrastructure (`src/lib/rateLimit.ts`)
- ✅ Added AI Lab specific rate limit configs
- ✅ Created `isAiLabDemoMode()` helper function
- ✅ Created `getAiLabConfig()` function for environment-based limits
- ✅ All configs default to safe values with env override support

### 2. Environment Variables (`.env.example`)
- ✅ Added AI_LAB_VISION_LIMIT=5
- ✅ Added AI_LAB_VOICE_LIMIT=5
- ✅ Added AI_LAB_SALES_LIMIT=10
- ✅ Added AI_LAB_RAG_LIMIT=15
- ✅ Added AI_LAB_TRIAGE_LIMIT=10
- ✅ Added AI_LAB_DEMO_MODE=false

### 3. API Route: `/api/vision` ✅
- ✅ Implemented AI Lab rate limiting with `ai-lab:vision:{ip}` key
- ✅ Added demo mode with realistic mock response
- ✅ Returns proper 429 with rate limit headers
- ✅ Error response includes `error: 'rate_limited'` and friendly message

---

## 🔄 TODO (Part 2 - NEXT SESSION)

### 4. Update Remaining API Routes

#### `/api/rag/route.ts`
```typescript
// Add imports at top:
import {
  rateLimit,
  getClientIdentifier,
  addRateLimitHeaders,
  isAiLabDemoMode,
  getAiLabConfig,
} from '@/lib/rateLimit';

// Replace rate limiting section (lines 63-76):
const identifier = getClientIdentifier(req);
const config = getAiLabConfig('rag');
const rateLimitResult = rateLimit(`ai-lab:rag:${identifier}`, config);

if (!rateLimitResult.success) {
  const headers = new Headers();
  addRateLimitHeaders(headers, rateLimitResult);
  return NextResponse.json(
    {
      error: 'rate_limited',
      message: 'This demo has reached its safe usage limit. Please try again in a few minutes.',
    },
    { status: 429, headers }
  );
}

// Add demo mode check BEFORE real Claude call (after line 76):
if (isAiLabDemoMode()) {
  const headers = new Headers();
  addRateLimitHeaders(headers, rateLimitResult);
  return NextResponse.json(
    {
      result: {
        answer: "Demo mode: Moonlit Studios offers five service suites: Creative Design & Development, Health x Tech Development, AI Innovation, Consulting, and Author & Ghostwriting Studio. Each combines The Nurse Who Codes' clinical expertise with cutting-edge tech.",
        sources: ['Demo Knowledge Base: Services Overview', 'Demo: About Moonlit Studios'],
        confidence: 92,
      },
      success: true,
    },
    { headers }
  );
}

// Add rate limit headers to success response (line 133):
const headers = new Headers();
addRateLimitHeaders(headers, rateLimitResult);
return NextResponse.json({ result: {...}, success: true }, { headers });
```

#### `/api/triage/route.ts`
```typescript
// Same pattern as above with:
const config = getAiLabConfig('triage');
const rateLimitResult = rateLimit(`ai-lab:triage:${identifier}`, config);

// Demo mode mock:
{
  triage: {
    level: 'routine',
    recommendation: "Demo mode: Based on your description, this would typically be appropriate for a routine clinic visit within the next few days.",
    reasoning: "This demo illustrates how a clinical triage assistant analyzes symptoms while encouraging follow-up with a real healthcare provider. Always consult a licensed professional for medical advice.",
  },
  success: true,
}
```

#### `/api/sales/route.ts`
```typescript
// Same pattern with:
const config = getAiLabConfig('sales');
const rateLimitResult = rateLimit(`ai-lab:sales:${identifier}`, config);

// Demo mode mock:
{
  reply: "Demo mode: I'm Echo, your AI sales assistant. In a live session, I'd walk you through which service package fits your needs—whether that's a small business launchpad, healthcare platform, or AI copilot. What brings you to Moonlit Studios today?",
  audioUrl: null,
}
```

#### `/api/voice/transcribe/route.ts`
```typescript
// Same pattern with:
const config = getAiLabConfig('voice');
const rateLimitResult = rateLimit(`ai-lab:voice:${identifier}`, config);

// Demo mode mock:
{
  text: "Demo transcription: Hi, I'd love to learn more about your AI Lab demos and how you built them.",
}
```

---

### 5. Update AI Lab Page (`src/app/ai-lab/page.tsx`)

Each demo component needs graceful error handling for 429 responses:

####ComputerVisionDemo (analyzeImage function):
```typescript
const response = await fetch('/api/vision', { ... });

if (!response.ok) {
  const data = await response.json().catch(() => null);

  if (response.status === 429) {
    setAnalysis({
      description: data?.message ?? "This demo has temporarily reached its safe usage limit. Please try again in a few minutes.",
      objects: [],
      scene: '',
      colors: [],
    });
  } else {
    setAnalysis({
      description: "Something went wrong analyzing this image. Please try again or contact me if this keeps happening.",
      objects: [],
      scene: '',
      colors: [],
    });
  }
  setIsAnalyzing(false);
  return;
}
```

#### RAGDemo (handleSearch function):
```typescript
if (!response.ok) {
  const data = await response.json().catch(() => null);

  if (response.status === 429) {
    setResult({
      answer: data?.message ?? "This demo has temporarily reached its safe usage limit. Please try again in a few minutes.",
      sources: [],
      confidence: 0,
    });
  } else {
    setResult({
      answer: "Something went wrong while searching. Please try again.",
      sources: [],
      confidence: 0,
    });
  }
  setIsSearching(false);
  return;
}
```

#### HealthcareTriageDemo (handleTriage function):
```typescript
if (!response.ok) {
  const data = await response.json().catch(() => null);

  if (response.status === 429) {
    setTriage({
      level: 'routine',
      recommendation: data?.message ?? "This demo has temporarily reached its safe usage limit.",
      reasoning: "Please try again in a few minutes, or contact our team for a real consultation.",
    });
  } else {
    setTriage({
      level: 'routine',
      recommendation: "Unable to analyze symptoms. Please consult a healthcare professional.",
      reasoning: "",
    });
  }
  setIsAnalyzing(false);
  return;
}
```

#### VoiceSalesDemo (handleSend function):
```typescript
if (!response.ok) {
  const data = await response.json().catch(() => null);
  const errorMsg = response.status === 429
    ? (data?.message ?? "Echo needs a breather! Please try again in a few minutes.")
    : "I apologize, I'm having trouble connecting. Please try again.";

  const errorMessage: ChatMessage = { role: 'assistant', content: errorMsg };
  setMessages(prev => [...prev, errorMessage]);
  setIsTyping(false);
  return;
}
```

#### VoiceSalesDemo (toggleVoiceInput → onStop transcription):
```typescript
const response = await fetch('/api/voice/transcribe', { ... });

if (!response.ok) {
  const data = await response.json().catch(() => null);
  if (response.status === 429) {
    alert(data?.message ?? 'Voice transcription limit reached. Please type your message instead.');
  } else {
    alert('Failed to transcribe audio. Please try typing instead.');
  }
  return;
}
```

---

### 6. Update Portfolio Page (`src/app/portfolio/page.tsx`)

**Location:** Inside the `sections` array, find the **AI Innovation** section.

**Action:** PREPEND (add as FIRST item) in that section's projects array:

```typescript
{
  tag: "LIVE AI DEMOS",
  title: "AI Lab — SAO-Themed AI Demo Arena",
  points: [
    "Four interactive AI consoles: computer vision, RAG Q&A, healthcare triage, and voice assistant",
    "Built using modern LLMs and clinical UX patterns",
    "Protected by smart rate limits + demo mode for safe real-world demonstration"
  ],
  tech: "Next.js · TypeScript · Tailwind · OpenAI · Whisper · Claude",
  status: "Journey Ongoing"
}
```

**Visual Requirements:**
- Must maintain LOTR-style theming
- Card should be clickable (link to `/ai-lab`)
- Keep all existing animations, hover states, and styling
- Ensure spacing/borders match other project cards

---

## 🧪 Testing Checklist

### Rate Limiting Tests
- [ ] Hit vision endpoint 6 times rapidly → should see 429 on 6th
- [ ] Hit RAG endpoint 16 times rapidly → should see 429 on 16th
- [ ] Hit triage endpoint 11 times rapidly → should see 429 on 11th
- [ ] Check that different demos have independent rate limits (separate keys)
- [ ] Verify rate limit headers are present in responses
- [ ] Wait 10 minutes and confirm limits reset

### Demo Mode Tests
- [ ] Set `AI_LAB_DEMO_MODE=true` in `.env.local`
- [ ] Restart dev server
- [ ] Test each demo returns mocked data
- [ ] Verify no actual AI API calls are made (check logs)
- [ ] Confirm UI still works perfectly with mock responses
- [ ] Set back to `false` and verify real AI calls resume

### Error Handling Tests
- [ ] Trigger 429 on each demo
- [ ] Verify friendly error messages appear in UI
- [ ] Confirm UI doesn't crash or show ugly errors
- [ ] Test with network errors (disconnect internet mid-request)

### Build Tests
- [ ] `npm run build` succeeds with no TypeScript errors
- [ ] All 64 routes compile successfully
- [ ] No console warnings about env vars

---

## 📦 Files Modified Summary

### Core Infrastructure
1. `src/lib/rateLimit.ts` - AI Lab rate limit configs + helpers
2. `.env.example` - AI Lab environment variables

### API Routes (5 total)
3. ✅ `src/app/api/vision/route.ts` - DONE
4. `src/app/api/rag/route.ts` - TODO
5. `src/app/api/triage/route.ts` - TODO
6. `src/app/api/sales/route.ts` - TODO
7. `src/app/api/voice/transcribe/route.ts` - TODO

### Frontend
8. `src/app/ai-lab/page.tsx` - Error handling for all 4 demos
9. `src/app/portfolio/page.tsx` - Add AI Lab project card

---

## 🎯 Implementation Priority

**Session 1 (Completed):**
- ✅ Rate limit infrastructure
- ✅ Env vars
- ✅ Vision API

**Session 2 (This continuation):**
1. Update `/api/rag`, `/api/triage`, `/api/sales`, `/api/voice/transcribe`
2. Update AI Lab page error handling
3. Update portfolio page
4. Test build
5. Create final summary doc

---

## 💡 Key Design Decisions

1. **Rate Limit Strategy:** Per-IP, per-endpoint isolation (e.g., `ai-lab:vision:192.168.1.1`)
2. **Demo Mode:** Single env var controls all endpoints
3. **Error Messages:** Friendly, brand-consistent, never technical
4. **Mock Responses:** Realistic data matching exact frontend expectations
5. **Headers:** Always include rate limit metadata for debugging
6. **Separation:** AI Lab demos use separate limits from Kai chatbot

---

## 🔐 Security Notes

- Rate limits stored in-memory (resets on server restart)
- IP-based (works with Vercel's x-forwarded-for header)
- For multi-server production, upgrade to Upstash Redis
- Demo mode prevents all external AI calls when enabled
- No API keys exposed in client code

---

## 📝 Next Steps

When you return to continue:

1. Copy the code snippets from TODO section above
2. Apply to each remaining API route
3. Update AI Lab page error handling
4. Add AI Lab to portfolio
5. Run `npm run build` to verify
6. Create final summary document
7. Commit with message: `feat(ai-lab): Add rate limiting and demo mode to all AI Lab demos`

---

*Generated by Claude Code for Moonlit Studios*
*The Nurse Who Codes - Where Dreams Surface and Ideas Flow 🌙*
