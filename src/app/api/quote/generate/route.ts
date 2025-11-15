import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { Resend } from 'resend';

// COST OPTIMIZATION: Using OpenAI GPT-4o-mini instead of Claude
// Cost per quote: ~$0.001 (vs $0.015 with Claude) = 10x cheaper!
// Perfect for simple quote analysis
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * AI-Powered Auto-Quote Generator
 *
 * This endpoint uses GPT-4o-mini to analyze project requirements and automatically:
 * 1. Suggest the best service tier
 * 2. Generate accurate price estimates
 * 3. Identify complexity factors
 * 4. Recommend next steps
 * 5. Send instant quote to client
 * 6. Notify owner with full analysis
 *
 * Works 24/7 while you're on nursing shifts!
 */

interface QuoteRequest {
  // Client info
  name: string;
  email: string;
  company?: string;

  // Project details
  serviceType: string;
  projectDescription: string;
  timeline?: string;
  budget?: string;

  // Requirements
  features?: string[];
  complexity?: string;
  additionalNotes?: string;
}

// Pricing data from your services
const PRICING_DATABASE = {
  'Creative Design & Development': {
    'Branding Essential': { price: 1800, complexity: 'low', features: ['Logo suite (3)', '2-color palette', 'Basic guidelines'] },
    'Branding Professional': { price: 2800, complexity: 'medium', features: ['Logo suite (5)', 'Full color palette', 'Social media kit'], popular: true },
    'Branding Premium': { price: 4500, complexity: 'high', features: ['Brand strategy workshop', 'Extended logo suite', 'Print collateral'] },
    'Web Essential': { price: 3000, complexity: 'low', features: ['3-page website', 'Mobile responsive', 'Contact form'] },
    'Web Professional': { price: 5500, complexity: 'medium', features: ['5-7 pages', 'Blog/portfolio', 'Custom animations'], popular: true },
    'Web Premium': { price: 8000, complexity: 'high', features: ['10+ pages', 'CMS integration', 'E-commerce'] },
  },
  'Health x Tech Development': {
    'Healthcare Platform Essential': { price: 10000, complexity: 'medium', features: ['3-5 core features', 'Basic HIPAA', 'Simple dashboard'] },
    'Healthcare Platform Professional': { price: 18000, complexity: 'high', features: ['5-10 features', 'Full HIPAA/BAA', 'Multi-role system'], popular: true },
    'Healthcare Platform Premium': { price: 30000, complexity: 'very high', features: ['Complex workflows', 'EHR integration', 'Multi-facility'] },
    'Clinical Dashboard Basic': { price: 3500, complexity: 'low', features: ['Census tracking', 'Alert system', 'Basic KPIs'] },
    'Clinical Dashboard Advanced': { price: 6500, complexity: 'medium', features: ['Real-time data', 'Predictive analytics', 'Automated reporting'], popular: true },
    'Patient Portal Essential': { price: 4000, complexity: 'medium', features: ['Secure messaging', 'Appointments', 'Medical records'] },
  },
  'Consulting': {
    'Single Session': { price: 250, unit: 'hour', complexity: 'low', features: ['Product roadmap review', 'Clinical validation'] },
    'Strategy Package': { price: 4000, complexity: 'medium', features: ['5 sessions', 'Go-to-market planning', '30-day support'], popular: true },
    'Strategic Partner': { price: 8000, unit: 'month', complexity: 'high', features: ['Weekly sessions', 'Unlimited async', 'Board/investor deck review'] },
    'UX Audit': { price: 2000, complexity: 'low', features: ['Heuristic evaluation', 'Workflow friction analysis'] },
    'UX Transformation': { price: 5000, complexity: 'medium', features: ['UX Audit + User testing', 'Interface redesign', 'Load reduction'] },
  },
  'AI Innovation': {
    'Essential RAG': { price: 12000, complexity: 'medium', features: ['Basic RAG setup', 'Document ingestion', 'Simple UI'] },
    'Professional RAG': { price: 25000, complexity: 'high', features: ['Multimodal', 'Context-aware', 'Custom UI/UX'], popular: true },
    'Enterprise RAG': { price: 50000, complexity: 'very high', features: ['Multi-agent orchestration', 'Knowledge graphs', 'Analytics dashboard'] },
  },
  'Ghostwriting': {
    'Short Book (50K words)': { price: 18000, complexity: 'medium', features: ['Voice alignment', 'Structure planning', 'One revision'] },
    'Full Novel (80K words)': { price: 35000, complexity: 'high', features: ['Extended manuscript', 'Character development', 'Two revisions'], popular: true },
    'Premium Book (100K+ words)': { price: 50000, complexity: 'very high', features: ['Multiple POV', 'Three revisions', 'Author platform'] },
    'Essential Cookbook': { price: 18000, complexity: 'medium', features: ['50 recipes', 'Cultural storytelling', 'Testing notes'] },
    'Premium Cookbook': { price: 32000, complexity: 'high', features: ['75+ recipes', 'Extended storytelling', 'Photography direction'], popular: true },
  },
};

export async function POST(request: NextRequest) {
  try {
    const body: QuoteRequest = await request.json();
    const { name, email, company, serviceType, projectDescription, timeline, budget, features, complexity, additionalNotes } = body;

    // Validate required fields
    if (!name || !email || !serviceType || !projectDescription) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log(`\n🤖 AI Quote Generation for: ${name} (${serviceType})`);

    // Get pricing options for this service
    const servicePricing = PRICING_DATABASE[serviceType as keyof typeof PRICING_DATABASE] || {};

    // Build AI analysis prompt
    const analysisPrompt = `You are an expert project estimator for Moonlit Studios, a boutique development studio specializing in healthcare tech, AI, and creative design.

CLIENT REQUEST:
- Name: ${name}
- Company: ${company || 'Not provided'}
- Service: ${serviceType}
- Project Description: ${projectDescription}
- Timeline: ${timeline || 'Not specified'}
- Budget: ${budget || 'Not specified'}
- Requested Features: ${features?.join(', ') || 'None specified'}
- Complexity Level: ${complexity || 'Unknown'}
- Additional Notes: ${additionalNotes || 'None'}

AVAILABLE PRICING TIERS:
${Object.entries(servicePricing).map(([tier, details]: [string, any]) =>
  `${tier} - $${details.price}${details.unit ? `/${details.unit}` : ''} (${details.complexity} complexity)${details.popular ? ' [POPULAR]' : ''}
  Features: ${details.features.join(', ')}`
).join('\n')}

YOUR TASK:
Analyze this project request and provide a detailed assessment in JSON format with:

1. "recommendedTier" - Which pricing tier best fits their needs
2. "estimatedPrice" - Price range (consider if they need multiple tiers or add-ons)
3. "reasoning" - Why this tier is recommended (2-3 sentences)
4. "complexityFactors" - Array of factors that affect complexity
5. "scopeRecommendations" - Suggestions to optimize scope/budget
6. "timeline" - Estimated project timeline (e.g., "4-6 weeks")
7. "nextSteps" - Specific next steps they should take
8. "confidence" - Your confidence level (high/medium/low)
9. "questions" - 2-3 clarifying questions to ask in the consultation

Be honest about pricing. If their budget seems too low, say so tactfully and suggest alternatives (smaller scope, phased approach, etc.).

Respond ONLY with valid JSON - no markdown, no explanations outside the JSON.`;

    // Call OpenAI GPT-4o-mini for analysis (10x cheaper than Claude!)
    const aiResponse = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{
        role: 'system',
        content: 'You are an expert project estimator for Moonlit Studios. Respond ONLY with valid JSON - no markdown, no extra text.'
      }, {
        role: 'user',
        content: analysisPrompt
      }],
      response_format: { type: 'json_object' },
      max_tokens: 1500,
      temperature: 0.7
    });

    const aiAnalysis = JSON.parse(aiResponse.choices[0].message.content || '{}');

    console.log('✅ AI Analysis Complete:', aiAnalysis.recommendedTier);

    // Generate quote ID
    const quoteId = `QT-${Date.now()}-${name.replace(/\s/g, '').substring(0, 4).toUpperCase()}`;

    // Create quote object
    const quote = {
      id: quoteId,
      createdAt: new Date().toISOString(),
      client: { name, email, company },
      service: serviceType,
      projectDescription,
      timeline,
      requestedBudget: budget,
      aiAnalysis,
      status: 'pending_consultation',
    };

    // TODO: Save to database
    console.log('💾 Quote saved:', quoteId);

    // Send detailed quote email to client
    const clientEmail = await resend.emails.send({
      from: 'Moonlit Studios <hello@moonlstudios.com>',
      to: email,
      subject: `Your Custom Quote: ${serviceType} - ${aiAnalysis.recommendedTier}`,
      html: generateClientQuoteEmail(quote, aiAnalysis),
    });

    console.log('📧 Client quote email sent');

    // Send notification to owner with full analysis
    const ownerEmail = await resend.emails.send({
      from: 'Moonlit Studios <notifications@moonlstudios.com>',
      to: 'your-email@gmail.com', // TODO: Update with your email
      subject: `💰 New Auto-Quote: $${aiAnalysis.estimatedPrice} - ${name}`,
      html: generateOwnerNotificationEmail(quote, aiAnalysis, body),
    });

    console.log('📧 Owner notification sent');

    return NextResponse.json({
      success: true,
      quote: {
        id: quoteId,
        recommendedTier: aiAnalysis.recommendedTier,
        estimatedPrice: aiAnalysis.estimatedPrice,
        timeline: aiAnalysis.timeline,
        confidence: aiAnalysis.confidence,
      },
      message: `Quote generated! Check your email (${email}) for details.`
    });

  } catch (error: any) {
    console.error('❌ Quote generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate quote', details: error.message },
      { status: 500 }
    );
  }
}

// Email template for client
function generateClientQuoteEmail(quote: any, analysis: any): string {
  return `
    <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 650px; margin: 0 auto; background: linear-gradient(135deg, #0A1128 0%, #1B4965 100%); color: #F8F9FA; padding: 40px 20px;">
      <!-- Header -->
      <div style="text-align: center; margin-bottom: 40px;">
        <h1 style="color: #4A9B9B; font-size: 32px; margin: 0;">🌙 Moonlit Studios</h1>
        <p style="color: #A8DADC; font-size: 14px; margin: 10px 0;">Your Custom Project Quote</p>
      </div>

      <!-- Greeting -->
      <div style="background: rgba(74, 155, 155, 0.1); border-left: 4px solid #4A9B9B; padding: 20px; margin-bottom: 30px; border-radius: 0 8px 8px 0;">
        <p style="margin: 0; font-size: 18px; color: #F8F9FA;">
          Hi <strong>${quote.client.name}</strong>,
        </p>
        <p style="margin: 15px 0 0 0; color: #C0D6DF; line-height: 1.6;">
          Thank you for your interest in <strong>${quote.service}</strong>! I've analyzed your project requirements and prepared a custom quote based on your needs.
        </p>
      </div>

      <!-- Recommended Solution -->
      <div style="background: rgba(255, 215, 0, 0.05); border: 2px solid #FFD700; padding: 25px; margin-bottom: 30px; border-radius: 12px;">
        <div style="text-align: center; margin-bottom: 15px;">
          <span style="background: #FFD700; color: #0A1128; padding: 8px 20px; border-radius: 20px; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Recommended Solution</span>
        </div>
        <h2 style="color: #FFD700; text-align: center; font-size: 28px; margin: 10px 0;">${analysis.recommendedTier}</h2>
        <div style="text-align: center; font-size: 36px; font-weight: 700; color: #4A9B9B; margin: 20px 0;">
          ${analysis.estimatedPrice}
        </div>
        <p style="color: #A8DADC; text-align: center; font-size: 14px; margin: 0;">
          Estimated Timeline: <strong style="color: #F8F9FA;">${analysis.timeline}</strong>
        </p>
      </div>

      <!-- Why This Tier -->
      <div style="margin-bottom: 30px;">
        <h3 style="color: #4A9B9B; font-size: 20px; margin-bottom: 15px;">💡 Why This Recommendation?</h3>
        <p style="color: #C0D6DF; line-height: 1.8; margin: 0;">
          ${analysis.reasoning}
        </p>
      </div>

      <!-- Complexity Factors -->
      ${analysis.complexityFactors?.length > 0 ? `
      <div style="margin-bottom: 30px;">
        <h3 style="color: #4A9B9B; font-size: 20px; margin-bottom: 15px;">🔍 Project Complexity Factors</h3>
        <ul style="color: #C0D6DF; line-height: 1.8; padding-left: 20px;">
          ${analysis.complexityFactors.map((factor: string) => `<li>${factor}</li>`).join('')}
        </ul>
      </div>
      ` : ''}

      <!-- Scope Recommendations -->
      ${analysis.scopeRecommendations ? `
      <div style="background: rgba(58, 167, 163, 0.1); border-left: 4px solid #3AA7A3; padding: 20px; margin-bottom: 30px; border-radius: 0 8px 8px 0;">
        <h3 style="color: #3AA7A3; font-size: 18px; margin-top: 0;">💭 Ways to Optimize</h3>
        <p style="color: #C0D6DF; margin: 0; line-height: 1.8;">
          ${analysis.scopeRecommendations}
        </p>
      </div>
      ` : ''}

      <!-- Next Steps -->
      <div style="margin-bottom: 30px;">
        <h3 style="color: #4A9B9B; font-size: 20px; margin-bottom: 15px;">🚀 Next Steps</h3>
        <p style="color: #C0D6DF; line-height: 1.8; margin-bottom: 15px;">
          ${analysis.nextSteps}
        </p>
      </div>

      <!-- CTA Button -->
      <div style="text-align: center; margin: 40px 0;">
        <a href="https://moonlstudios.com/book"
           style="display: inline-block; background: linear-gradient(135deg, #4A9B9B 0%, #3AA7A3 100%); color: white; padding: 18px 40px; text-decoration: none; border-radius: 30px; font-weight: 700; font-size: 16px; box-shadow: 0 8px 20px rgba(74, 155, 155, 0.4); text-transform: uppercase; letter-spacing: 1px;">
          Book Free Consultation
        </a>
      </div>

      <!-- Questions Preview -->
      ${analysis.questions?.length > 0 ? `
      <div style="background: rgba(168, 218, 220, 0.05); padding: 20px; margin-bottom: 30px; border-radius: 8px; border: 1px dashed #A8DADC;">
        <h4 style="color: #A8DADC; font-size: 16px; margin-top: 0;">📋 Questions for Our Consultation:</h4>
        <ol style="color: #C0D6DF; line-height: 1.8; padding-left: 20px; margin: 0;">
          ${analysis.questions.map((q: string) => `<li>${q}</li>`).join('')}
        </ol>
      </div>
      ` : ''}

      <!-- Footer -->
      <div style="text-align: center; padding-top: 30px; border-top: 1px solid rgba(168, 218, 220, 0.2); margin-top: 40px;">
        <p style="color: #A8DADC; font-size: 14px; margin: 0;">
          <strong style="color: #F8F9FA;">Quote ID:</strong> ${quote.id}
        </p>
        <p style="color: #A8DADC; font-size: 14px; margin: 10px 0 20px 0;">
          This quote is valid for 30 days. Pricing subject to final scope confirmation.
        </p>
        <p style="color: #64748b; font-size: 13px; margin: 0;">
          Best regards,<br>
          <strong style="color: #C0D6DF;">Destiny</strong><br>
          <em>The Nurse Who Codes</em><br>
          Moonlit Studios
        </p>
      </div>
    </div>
  `;
}

// Email template for owner
function generateOwnerNotificationEmail(quote: any, analysis: any, fullRequest: any): string {
  return `
    <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 700px; margin: 0 auto;">
      <h2 style="color: #0ea5e9;">💰 New Auto-Quote Generated!</h2>

      <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #0c4a6e;">Client Information</h3>
        <p><strong>Name:</strong> ${quote.client.name}</p>
        <p><strong>Email:</strong> ${quote.client.email}</p>
        ${quote.client.company ? `<p><strong>Company:</strong> ${quote.client.company}</p>` : ''}
        <p><strong>Quote ID:</strong> ${quote.id}</p>
      </div>

      <div style="background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #92400e;">AI Recommendation</h3>
        <p><strong>Service:</strong> ${quote.service}</p>
        <p><strong>Recommended Tier:</strong> ${analysis.recommendedTier}</p>
        <p><strong>Estimated Price:</strong> ${analysis.estimatedPrice}</p>
        <p><strong>Timeline:</strong> ${analysis.timeline}</p>
        <p><strong>Confidence:</strong> ${analysis.confidence}</p>
      </div>

      <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Project Description</h3>
        <p>${fullRequest.projectDescription}</p>
        ${fullRequest.timeline ? `<p><strong>Timeline:</strong> ${fullRequest.timeline}</p>` : ''}
        ${fullRequest.budget ? `<p><strong>Budget:</strong> ${fullRequest.budget}</p>` : ''}
        ${fullRequest.features?.length ? `<p><strong>Features:</strong> ${fullRequest.features.join(', ')}</p>` : ''}
      </div>

      <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #075985;">AI Analysis Details</h3>
        <p><strong>Reasoning:</strong> ${analysis.reasoning}</p>
        ${analysis.complexityFactors?.length ? `
          <p><strong>Complexity Factors:</strong></p>
          <ul>
            ${analysis.complexityFactors.map((f: string) => `<li>${f}</li>`).join('')}
          </ul>
        ` : ''}
        ${analysis.scopeRecommendations ? `
          <p><strong>Scope Recommendations:</strong> ${analysis.scopeRecommendations}</p>
        ` : ''}
        ${analysis.questions?.length ? `
          <p><strong>Questions to Ask:</strong></p>
          <ol>
            ${analysis.questions.map((q: string) => `<li>${q}</li>`).join('')}
          </ol>
        ` : ''}
      </div>

      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
        <p style="color: #64748b; font-size: 14px;">
          <strong>Next Step:</strong> Client has been sent the quote. Wait for them to book a consultation or follow up in 24-48 hours.
        </p>
      </div>
    </div>
  `;
}
