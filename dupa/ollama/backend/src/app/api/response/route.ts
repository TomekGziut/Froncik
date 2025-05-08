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

  const response = await fetch('http://localhost:5173/generate-response', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value: assistantMessage }),
  });

  if (response.ok) {
    const responseBody = await response.json();
    console.log('Response from localhost:5173/generate-response:', responseBody);

    return NextResponse.json({
      message: `Received response: ${assistantMessage}, server response: ${responseBody.message}`,
    });
  } else {
    console.error('Error calling API:', response.statusText);
    return NextResponse.json({ message: 'Error while calling API.' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Use POST to send data.' });
}