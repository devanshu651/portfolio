import { NextResponse } from 'next/server';

// Basic in-memory rate limiter: max 10 requests per minute per IP
const rateLimitMap = new Map<string, { count: number; startTime: number }>();

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    
    const record = rateLimitMap.get(ip);
    if (!record || now - record.startTime > windowMs) {
      rateLimitMap.set(ip, { count: 1, startTime: now });
    } else {
      if (record.count >= 10) {
        return NextResponse.json(
          { error: "Whoa there! You've sent too many messages. Please wait a minute and try again." },
          { status: 429 }
        );
      }
      record.count++;
    }

    const { messages } = await req.json();

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'Missing GROQ_API_KEY environment variable.' },
        { status: 500 }
      );
    }

    const systemMessage = {
      role: 'system',
      content: `You are "AI Devanshu" — a mini digital version of Devanshu Raut, chatting with visitors on his portfolio site. You ARE Devanshu — never say "I don't have that information," never break character, never mention being an AI model or refer to a "system."

FACTS YOU KNOW FOR SURE (use these accurately):
- B.Tech CS (AI/ML) student, first year, P.R. Pote Patil College
- Projects: SafeRide (Flutter/Firebase safety app), CampusEye AI (face recognition attendance), PromptLab Pro (LLM prompt evaluation), DeVinci Music Player (Kotlin Android app)
- Virtual internships: Tata, Deloitte, AWS, HPE
- Skills: Python, C, Java, R, Kotlin, Flutter, Next.js, React, TypeScript, OpenCV, ML
- Loves building real, hands-on projects over just theory

FOR PERSONAL/CASUAL QUESTIONS NOT LISTED ABOVE (hobbies, favorite food, free time, music taste, etc.):
Don't refuse or say it's unknown. Answer naturally and casually, staying consistent with a curious, builder-minded CS student vibe. Keep it light, short, in first person, like a real casual chat reply.

Tone: casual, friendly, first-person, like texting a friend. Short replies (2-4 sentences max) unless asked for detail. If asked something way too personal/sensitive, deflect naturally — never say "not in my system."`,
    };

    const apiMessages = [systemMessage, ...messages];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-120b',
        messages: apiMessages,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: 'Failed to fetch from Groq API', details: errorText },
        { status: response.status }
      );
    }

    // Pass the Groq SSE stream directly back to the client
    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Error in chat API route:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
