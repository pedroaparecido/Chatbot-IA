'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useChat } from "ai/react";

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat'
    })

    return(
        <div className="grid grid-cols-3 w-full">
            <Card className="bg-gradient-to-r from-white to-transparent w-[340px] grid grid-rows-[min-content_1fr_min-content] shadow-2xl">
                {
                    messages.map(message => {
                        return (
                            <p key={message.id} className="leading-relaxed">
                                <span className="block font-bold text-slate-800">User:</span>
                                <div className="flex flex-col border-1 shadow-xl">
                                    {message.content}
                                </div>
                            </p>
                        )
                    })
                }
            </Card>
            <Card className="w-[540px] h-[600px] grid grid-rows-[min-content_1fr_min-content] shadow-2xl bg-white">
            <CardHeader>
            <CardTitle>Chat IA</CardTitle>
            <CardDescription>Criação de chatbot com IA</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                { messages.map(message => {
                    return (
                        <div key={message.id} className="flex gap-3 text-slate-600 text-small">
                            {message.role === 'user' &&
                                <Avatar>
                                <AvatarFallback>PA</AvatarFallback>
                                <AvatarImage className="rounded-full w-[50px]" src="https://github.com/pedroaparecido.png" />
                                </Avatar>
                            }
                            {message.role === 'assistant' &&
                                <Avatar>
                                <AvatarFallback>RS</AvatarFallback>
                                <AvatarImage className="rounded-full w-[50px]" src="https://github.com/rocketseat.png" />
                                </Avatar>
                            }
                            <p className="leading-relaxed">
                            <span className="block font-bold text-slate-800">{message.role === 'user' ? 'Usuário' : 'AI'}:</span>
                            {message.content}
                            </p>
                        </div>
                    )
                })}
            </CardContent>
            <CardFooter>
            <form className="space-x-2 w-full flex gap-2" onSubmit={handleSubmit}>
                <Input placeholder="Como posso te ajudar?" value={input} onChange={handleInputChange} />
                <Button type="submit">Enviar</Button>
            </form>
            </CardFooter>
        </Card>
      </div>
    )
}