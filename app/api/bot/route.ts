import { NextResponse } from 'next/server'
import { SYSTEM_PROMPT } from '../../extra/prompt'

export async function POST(req: Request) {

    console.log('Recebendo mensagem do frontend...')

    try {

        const { message } = await req.json()

        if (!message) {
            return NextResponse.json(
                {
                    error: 'Mensagem obrigatória'
                },
                {
                    status: 400
                }
            )
        }

        const response = await fetch(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                method: 'POST',

                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    'Content-Type': 'application/json',

                    // opcionais
                    'HTTP-Referer': 'http://localhost:3000',
                    'X-Title': 'Portfolio Lukas'
                },

                body: JSON.stringify({

                    // modelo gratuito
                    model: 'openrouter/auto',

                    messages: [
                        {
                            role: 'system',
                            content: SYSTEM_PROMPT
                        },

                        {
                            role: 'user',
                            content: message
                        }
                    ],

                    temperature: 0.7,
                    max_tokens: 300

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
                error: error instanceof Error ? error.message : 'Erro desconhecido',
            },
            {
                status: 500
            }
        )
    }
}