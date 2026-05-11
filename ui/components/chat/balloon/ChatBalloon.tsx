'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

export default function ChatBalloon({ response, mode }: { response?: string, mode: string }) {

    const text = response || "Olá! É um prazer te ver aqui!"

    const [displayedText, setDisplayedText] = useState("")

    useEffect(() => {
        let index = 0

        setDisplayedText("")

        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, index + 1))
            index++

            if (index >= text.length) {
                clearInterval(interval)
            }
        }, 35) // velocidade da digitação

        return () => clearInterval(interval)
    }, [text])

    return (
        <section className="flex items-end gap-2 pr-10">
            {mode === 'ai' && (
                <Image
                    src="/images/profile.png"
                    alt="User"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
            )}

            <section
                className={`
                    p-4
                    shadow-lg
                    w-fit
                    max-w-sm
                    rounded-t-2xl

                    ${mode === 'ai'
                        ? 'bg-blue-500 text-white rounded-r-2xl rounded-bl-none'
                        : 'bg-gray-200 text-black rounded-l-2xl rounded-br-none'
                    }
                `}
            >
                <p>
                    {displayedText}
                    {displayedText.length < text.length && (
                        <span className="animate-pulse"> |</span>
                    )}
                </p>
            </section>
        </section>
    )
}