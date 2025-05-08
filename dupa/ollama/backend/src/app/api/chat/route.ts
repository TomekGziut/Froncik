import { NextRequest, NextResponse } from 'next/server';
import { generateResponse } from '@/services/ollama';

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log('Received data:', body);

  const { message, history } = body;

  const generatedValue = await generateResponse(message, history);
  console.log('Generated response:', generatedValue);

  let assistantMessage = generatedValue?.messages?.[0]?.content || 'No response.';

  assistantMessage = assistantMessage.replace(/<think>\s*<\/think>\s*/gi, '').trim();

  return NextResponse.json({
    message: assistantMessage,
  });
}

export async function GET() {
  return NextResponse.json({ message: 'Use POST to send data.' });
}