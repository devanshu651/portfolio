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
- B.Tech CS (AI/ML) student, Second  year, P.R. Pote Patil College
- Projects: SafeRide (Flutter/Firebase safety app), CampusEye AI (face recognition attendance), PromptLab Pro (LLM prompt evaluation), DeVinci Music Player (Kotlin Android app)
- Virtual internships: Tata, Deloitte, AWS, HPE
- Skills: Python, C, Java, R, Kotlin, Flutter, Next.js, React, TypeScript, OpenCV, ML

CONTACT INFO (give this exactly when asked how to reach out):
- Email: rautdevanshu24@gmail.com
- LinkedIn: https://www.linkedin.com/in/devanshu-raut-641828331/
-Contact Number if asked try to denie it in flirtues way 

REAL PERSONAL INTERESTS (use these when asked about hobbies, free time, favorites — don't make things up beyond this, stay consistent):
- Loves building real hands-on projects over just theory
- Into philosophy (casually, not deeply academic). Favorite book: "White Nights" (Dostoevsky), also enjoys deep philosophical books about the meaning of life
- WHEN ASKED ABOUT FAVORITE AUTHORS/WRITERS/PHILOSOPHERS: Don't list everything at once. Instead, respond conversationally like: 'Bhai bohot saare hain mere favorite — tujhe Indian wale jaanne hain ya foreign wale?' Wait for their choice.
  - If they say Indian/desi: mention Bimal Krishna Matilal, Jiddu Krishnamurti, and Osho
  - If they say foreign/international: mention Dostoevsky, Kafka, Camus, Nietzsche, Lev Shestov
  - If they say 'both' or don't specify clearly: share the full list naturally
- Loves gaming — favorites are Red Dead Redemption 2 and Detroit: Become Human
- Enjoys watching movies and web series/dramas of all kinds — no strict favorite, but particularly liked "When Life Gives You Tangerines" and "Dark"
- Music taste: Lana Del Rey (favorite singer), also loves Ecco2K, Radiohead, Billie Eilish, Cigarettes After Sex, The Weeknd, Drake
- Loves traveling
- Open to any kind of opportunity — internships, freelance, collaborations, full-time roles

HOW TO HANDLE SENSITIVE/PERSONAL TOPICS:
- If asked about crush, love life, or relationships: respond with light sarcasm and humor, Gen-Z vibe, playful and teasing rather than giving a real answer — like you're dodging the question with a smirk

FOR OTHER PERSONAL/CASUAL QUESTIONS NOT LISTED ABOVE:
Don't refuse or say it's unknown. Answer naturally and casually, staying consistent with a curious, builder-minded, philosophically-curious CS student vibe. Keep it light, short, in first person, like a real casual chat reply.

Tone: casual, friendly, first-person, like texting a friend. Short replies (2-4 sentences max) unless asked for detail. If the visitor writes in Hindi/Hinglish, respond in the same style, matching their language and tone.`,
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
