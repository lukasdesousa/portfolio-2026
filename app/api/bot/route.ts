import { NextResponse } from 'next/server';
import { SYSTEM_PROMPT } from '../../prompt/prompt';
import { LOVEVERSE_PROMPT, PORTFOLIO_PROMPT, MUNDOCRIPTO_PROMPT, PRODFIND_PROMPT } from '../../prompt/project/projectPrompts';

type OpenRouterMessage = {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export async function POST(req: Request) {
  let prompt;

  try {

    const { history = [], projectTitle } = await req.json()

    switch (projectTitle) {
      case 'loveverse':
        prompt = LOVEVERSE_PROMPT;
        break;
      case 'portfolio':
        prompt = PORTFOLIO_PROMPT;
        break;
      case 'mundocripto':
        prompt = MUNDOCRIPTO_PROMPT;
        break;
      case 'prodfind':
        prompt = PRODFIND_PROMPT;
        break;
      default:
        prompt = SYSTEM_PROMPT;
        break;
    }

    const limitedHistory = history.slice(-12)

    const messages: OpenRouterMessage[] = [
      {
        role: 'system',
        content: prompt || SYSTEM_PROMPT
      },

      ...limitedHistory
    ]

    const response = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',

        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',

          'HTTP-Referer': 'http://localhost:3000',
          'X-Title': 'Portfolio Lukas'
        },

        body: JSON.stringify({

          model: 'inclusionai/ring-2.6-1t:free',

          messages,

          temperature: 0.7,

          max_tokens: 1000,

          top_p: 0.9
        })
      }
    )

    if (!response.ok) {

      const error = await response.text()

      return NextResponse.json(
        {
          error
        },
        {
          status: response.status
        }
      )
    }

    const data = await response.json()

    return NextResponse.json({
      response:
        data?.choices?.[0]?.message?.content ||
        'Sem resposta da IA.'
    })

  } catch (error) {

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Erro desconhecido'
      },
      {
        status: 500
      }
    )
  }
}