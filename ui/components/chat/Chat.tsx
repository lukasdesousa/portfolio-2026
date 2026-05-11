'use client'

import React, { useEffect, useRef, useState } from 'react'
import type { DrawerProps } from 'antd'
import { Button, Drawer, Input, Space } from 'antd'
import ChatBalloon from './balloon/ChatBalloon'
import { MessageOutlined } from '@ant-design/icons'

type Message = {
  id: number
  sender: 'user' | 'ai'
  text: string
}

const Chat = () => {

  const [open, setOpen] = useState(false)

  const [placement] =
    useState<DrawerProps['placement']>('left')

  const [messages, setMessages] =
    useState<Message[]>([])

  const [message, setMessage] =
    useState('')

  const [loading, setLoading] =
    useState(false)

  const messagesEndRef =
    useRef<HTMLDivElement | null>(null)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  // ENVIA MENSAGEM
  const sendMessage = async () => {

    if (!message.trim() || loading) return

    const currentMessage = message

    // mensagem usuário
    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text: currentMessage
    }

    // adiciona mensagem
    setMessages((prev) => [
      ...prev,
      userMessage
    ])

    // limpa input
    setMessage('')

    // loading
    setLoading(true)

    try {

      // chamada API
      const response = await fetch('/api/bot', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          message: currentMessage
        })
      })

      const data = await response.json()

      // mensagem IA
      const aiMessage: Message = {
        id: Date.now() + 1,
        sender: 'ai',
        text:
          data.response ||
          'Não consegui responder agora.'
      }

      // adiciona resposta
      setMessages((prev) => [
        ...prev,
        aiMessage
      ].slice(-10))

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {

      const errorMessage: Message = {
        id: Date.now() + 1,
        sender: 'ai',
        text: 'Erro interno ao conectar com a IA.'
      }

      setMessages((prev) => [
        ...prev,
        errorMessage
      ])

    } finally {

      setLoading(false)

    }
  }

  // auto scroll
  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    })

  }, [messages, loading])

  return (
    <>
      <section className='fixed right-0 bottom-0 m-10 z-50'>

        <Space>
          <MessageOutlined className='text-4xl' onClick={showDrawer} />
        </Space>

        <Drawer
          title='Chat'
          placement={placement}
          closable={true}
          onClose={onClose}
          open={open}
          key={placement}
          styles={{
            body: {
              padding: 8,
            }
          }}
        >

          {messages.length === 0 && (

            <section className='absolute inset-0 flex flex-col items-center justify-center px-8 text-center pointer-events-none'>

              <h1 className='text-3xl font-semibold text-zinc-800 tracking-tight'>
                Qual o papo de hoje?
              </h1>

              <p className='mt-3 max-w-md text-sm leading-6 text-zinc-500'>
                Você pode perguntar sobre meus projetos,
                experiências, tecnologias, objetivos de
                carreira ou qualquer outra coisa.
              </p>

            </section>

          )}

          <section className='flex flex-col h-full'>

            {/* mensagens */}
            <section className='flex-1 no-scrollbar overflow-y-auto mt-6 pr-2'>

              <section className='flex flex-col gap-5'>

                {messages.map((message) => (

                  <section
                    key={message.id}
                    className={`flex ${message.sender === 'user'
                      ? 'justify-end'
                      : 'justify-start'
                      }`}
                  >

                    <ChatBalloon
                      mode={message.sender}
                      response={message.text}
                    />

                  </section>

                ))}

                {/* loading IA */}
                {loading && (

                  <section className='flex justify-start'>

                    <section className='bg-blue-500 px-4 py-3 rounded-t-2xl rounded-r-2xl rounded-bl-none shadow-lg'>

                      <section className='flex items-center gap-1'>

                        <span className='w-2 h-2 rounded-full bg-white animate-bounce' />

                        <span
                          className='w-2 h-2 rounded-full bg-white animate-bounce'
                          style={{
                            animationDelay: '0.15s'
                          }}
                        />

                        <span
                          className='w-2 h-2 rounded-full bg-white animate-bounce'
                          style={{
                            animationDelay: '0.30s'
                          }}
                        />

                      </section>

                    </section>

                  </section>

                )}

                <div ref={messagesEndRef} />

              </section>

            </section>

            {/* input */}
            <section className='flex gap-2 mt-4 p-2'>

              <Input.TextArea
                value={message}
                disabled={loading}
                size='large'
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                onPressEnter={(e) => {

                  // ENTER envia
                  if (!e.shiftKey) {
                    e.preventDefault()
                    sendMessage()
                  }

                }}
                maxLength={300}
                placeholder='Digite sua mensagem...'
                autoSize={{
                  minRows: 1,
                  maxRows: 6
                }}
                className='resize-none'
              />

              <Button
                type='default'
                size='large'
                disabled={loading}
                onClick={sendMessage}
              >
                Enviar
              </Button>

            </section>

            <p className='text-center mt-3 max-w-md text-sm leading-6 text-zinc-500'>Essa IA pode cometer erros, ignore-os.</p>

          </section>

        </Drawer>

      </section>
    </>
  )
}

export default Chat