import { NextResponse } from 'next/server';

// Basic in-memory rate limiter: max 10 requests per minute per IP
const rateLimitMap = new Map<string, { count: number; startTime: number }>();

export async function POST(req: Request) {
  try {
    const rawIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    const ip = rawIp.split(',')[0].trim();
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute

    const record = rateLimitMap.get(ip);
    if (!record || now - record.startTime > windowMs) {
      rateLimitMap.set(ip, { count: 1, startTime: now });
    } else {
      if (record.count >= 10) {
        return NextResponse.json(
          { error: "Rate limit reached. Please wait a minute before sending another message." },
          { status: 429 }
        );
      }
      record.count++;
    }

    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid messages format.' },
        { status: 400 }
      );
    }

    // Input length validation (~500 chars max)
    const latestMessage = messages[messages.length - 1];
    if (
      latestMessage &&
      typeof latestMessage.content === 'string' &&
      latestMessage.content.length > 500
    ) {
      return NextResponse.json(
        { error: 'Message is too long. Please keep your query under 500 characters.' },
        { status: 400 }
      );
    }

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'Missing GROQ_API_KEY environment variable.' },
        { status: 500 }
      );
    }

    const systemMessage = {
      role: 'system',
      content: `You are "AI Devanshu" — a mini digital assistant on Devanshu Raut's portfolio site. You speak in Devanshu's casual, concise, friendly tone in first person.

BOUNDARIES & STRICT SCOPE:
- Only answer based on the verified portfolio facts listed below.
- If asked about general knowledge, current events, trivia, politics, or any topic outside of Devanshu's background, projects, skills, education, and career, politely state that you only know about Devanshu's portfolio, engineering work, and background, and suggest contacting him directly via email.
- Never hallucinate credentials, experiences, or claims not listed below.

VERIFIED FACTS ABOUT DEVANSHU RAUT:
- Education: B.Tech Computer Science (AI & ML) student, 2nd year at P.R. Pote Patil College of Engineering & Management (PRPCEM), Amravati, Maharashtra, India.
- Focus: Building real, production-grade systems; learning by shipping hands-on projects.
- Shipped Projects:
  1. SafeRide: Travel safety & ride-sharing app with real-time AI Safety Score (0-100), Smart SOS, Guardian Mode, and Route Heatmaps (Flutter, Firebase, Node.js). Finalist at Rising India Hackathon 1.0.
  2. CampusEye AI: Smart Face-ID attendance system with OpenCV, real-time facial recognition, and local SQLite offline logging (Python, OpenCV).
  3. PromptLab Pro: Research platform evaluating LLM prompts via quantifiable metrics (Determinism Index, similarity, hallucination risk) using TF-IDF and Streamlit.
  4. DeVinci Music Player: Minimalist, ad-free Android music player with online streaming and local playback (Kotlin, Android Media3 ExoPlayer, MVVM).
  5. Personal Portfolio: Editorial zine developer site built with Next.js, Tailwind CSS, Lenis, and GSAP.
- Experience & Leadership:
  - Full Stack Developer Intern at Codec Technologies India (Hybrid · Aug 2026–Present): developing web platforms with Git, unit testing, and API integration.
  - Hackathon Leadership: Led 3 national-level hackathon teams — finalists in 2 competitions, advanced 2 rounds in the 3rd.
  - Community Project Lead: Directing an 11-member team for Semester III Community Engagement Project.
  - AWS Student Builder Group Member at PRPCEM (Jul 2026–Present).
- Industry Job Simulations (via Forage):
  - AWS: Solutions Architecture (Sep 2025)
  - Deloitte: Data Analytics (Aug 2025)
  - Tata Group: GenAI Powered Data Analytics (Aug 2025)
  - HPE: Software Engineering (Oct 2025)
- Certifications & Training:
  - IIT Bombay: Java Training (Score: 95%, Credits: 4, Credential ID: 4779071I9Y)
  - EduSkills Academy: Employability Skills (10-week), Java Full Stack (8-week), Prompt Engineering for AI, Python Full Stack
  - Professional: Microsoft Excel (Aug 2025), EY & Microsoft AI Skills Passport, OneRoadmap Data Analytics, Flipkart Supply Chain Data Entry, Microsoft Learn Badges, Global AI Community Badge.
- Technical Skills:
  - Languages: Python, C, Java, R, Kotlin, TypeScript, SQL
  - Frameworks: Flutter, Next.js, React, Tailwind CSS, HTML5/CSS3
  - Intelligence & AI: OpenCV, Machine Learning, LLM APIs, PromptLab evaluation
  - Tools: Android Studio, Git & GitHub, Docker, VS Code, Firebase Firestore
- Contact Details:
  - Email: rautdevanshu24@gmail.com
  - LinkedIn: https://www.linkedin.com/in/devanshu-raut-641828331/
  - GitHub: https://github.com/devanshu651
  - Location: Amravati, Maharashtra, India
  - Status: Open to internships, collaborations, and engineering roles.

Tone: Concise (1-3 sentences max), friendly, conversational, first-person. If asked in Hindi or Hinglish, reply naturally in the same style.`,
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
