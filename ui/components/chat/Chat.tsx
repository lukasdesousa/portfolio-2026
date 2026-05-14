'use client'

import React, { useEffect, useRef, useState } from 'react'
import type { DrawerProps } from 'antd'
import { Button, Drawer, Input, Space, Tag } from 'antd'
import ChatBalloon from './balloon/ChatBalloon'
import { MessageOutlined } from '@ant-design/icons'

type Message = {
  id: number
  sender: 'user' | 'ai'
  text: string
}

const Chat = ({ projectMode, projectTitle, showChat, setShowChat }: { projectMode: boolean, projectTitle?: string, showChat?: boolean, setShowChat?: React.Dispatch<React.SetStateAction<boolean>> }) => {

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

  const onClose = (projectMode: boolean) => {
    setOpen(false)

    if (projectMode && setShowChat) {
      setShowChat(false)
    }
  }

  // ENVIA MENSAGEM
  const sendMessage = async () => {

    if (!message.trim() || loading) return

    const currentMessage = message

    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text: currentMessage
    }

    // histórico atualizado imediatamente
    const updatedMessages = [
      ...messages,
      userMessage
    ]

    setMessages(updatedMessages)

    setMessage('')

    setLoading(true)

    try {

      // transforma histórico pro formato OpenAI/OpenRouter
      const formattedHistory = updatedMessages.map((msg) => ({
        role: msg.sender === 'user'
          ? 'user'
          : 'assistant',

        content: msg.text
      }))

      const response = await fetch('/api/bot', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          history: formattedHistory,
          projectTitle: projectMode ? projectTitle : undefined
        })
      })

      const data = await response.json()

      const aiMessage: Message = {
        id: Date.now() + 1,
        sender: 'ai',
        text:
          data.response ||
          'Não consegui responder agora.'
      }

      setMessages((prev) => [
        ...prev,
        aiMessage
      ].slice(-20))

    } catch {

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
        {!projectMode && (
          <Space>
            <MessageOutlined className='text-4xl' onClick={showDrawer} />
          </Space>
        )}

        <Drawer
          title='Chat'
          placement={placement}
          closable={true}
          onClose={() => onClose(projectMode)}
          open={showChat || open}
          key={placement}
          styles={{
            body: {
              padding: 8,
            }
          }}
        >

          {messages.length === 0 && (

            <section className='absolute inset-0 flex flex-col items-center justify-center px-8 text-center pointer-events-none'>
              {projectMode && projectTitle ? (
                 <div>
                   <Tag
                                  color="pink"
                                  className="
                                                  w-fit rounded-full px-3 py-1 text-xs font-medium
                                                  border-0 bg-purple-100 text-purple-700
                                                  
                                              "
                              >
                                  MODO PROJETO
                              </Tag>
                                   <h1 className='text-3xl font-semibold text-zinc-800 tracking-tight capitalize my-3'>
                    {projectTitle === 'mundocripto' ? 'Mundo Cripto' : projectTitle}
                                   </h1>
                 </div>
              ) : (
                <h1 className='text-3xl font-semibold text-zinc-800 tracking-tight'>
                  Qual o papo de hoje?
                </h1>
              )}

              {projectMode ? (
                <p className='mt-3 max-w-md text-sm leading-6 text-zinc-500'>
                  A IA agora só responderá perguntas relacionadas a esse projeto. Pergunte sobre as tecnologias usadas, desafios enfrentados e diferenciais.
                </p>
              ) : (
                <p className='mt-3 max-w-md text-sm leading-6 text-zinc-500'>
                  Você pode perguntar sobre meus projetos,
                  experiências, tecnologias, objetivos de
                  carreira ou qualquer outra coisa.
                </p>
              )}

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