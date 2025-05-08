import { NextRequest, NextResponse } from 'next/server';
import { generateResponse } from '@/services/ollama'; // Importujemy funkcję generateResponse

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log('Dane odebrane:', body);

  const { message, history } = body;

  // Wywołanie funkcji generateResponse, która zwraca odpowiedź od modelu
  const generatedValue = await generateResponse(message, history);
  console.log('Wygenerowana odpowiedź:', generatedValue);

  // Wyciągamy content z odpowiedzi modelu
  let assistantMessage = generatedValue?.messages?.[0]?.content || 'Brak odpowiedzi.';

  // Usuwamy tagi <think>...</think> i białe znaki
  assistantMessage = assistantMessage.replace(/<think>\s*<\/think>\s*/gi, '').trim();

  // Przesyłamy oczyszczoną odpowiedź dalej do lokalnego API
  const response = await fetch('http://localhost:5173//generate-response', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value: assistantMessage }),
  });

  // Obsługa odpowiedzi z serwera
  if (response.ok) {
    const responseBody = await response.json();
    console.log('Odpowiedź z localhost:5000/generate-response:', responseBody);

    return NextResponse.json({
      message: `Otrzymano odpowiedź: ${assistantMessage}, odpowiedź z serwera: ${responseBody.message}`,
    });
  } else {
    console.error('Błąd w wywołaniu API:', response.statusText);
    return NextResponse.json({ message: 'Błąd podczas wywoływania API.' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Użyj POST, aby wysłać dane.' });
}
