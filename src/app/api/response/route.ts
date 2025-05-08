import { NextRequest, NextResponse } from 'next/server';
import { generateResponse } from '@/services/ollama';  // Importujemy funkcję generateResponse

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log('Dane odebrane:', body);

  // Zakładając, że body zawiera `message` i `history`
  const { message, history } = body;

  // Wywołanie funkcji generateResponse, która zwraca wygenerowaną odpowiedź
  const generatedValue = await generateResponse(message, history);
  console.log('Wygenerowana odpowiedź:', generatedValue);

  // Przygotowanie danych do wysłania na localhost:5000/generate-response
  const response = await fetch('http://localhost:5000/generate-response', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value: generatedValue }),  // Przesyłamy wygenerowaną wartość jako 'value'
  });

  // Sprawdzamy, czy odpowiedź z zewnętrznego serwera jest pozytywna
  if (response.ok) {
    const responseBody = await response.json();
    console.log('Odpowiedź z localhost:5000/generate-response:', responseBody);

    return NextResponse.json({
      message: `Otrzymano wygenerowaną wartość: ${generatedValue}, odpowiedź z serwera: ${responseBody.message}`,
    });
  } else {
    console.error('Błąd w wywołaniu API:', response.statusText);
    return NextResponse.json({ message: 'Błąd podczas wywoływania API.' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Użyj POST, aby wysłać dane.' });
}
