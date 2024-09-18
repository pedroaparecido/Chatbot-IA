import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-neutral-100 items-center justify-center">
      <Card className="w-[440px] h-[600px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat IA</CardTitle>
          <CardDescription>Criação de chatbot com IA</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 text-slate-600 text-small">
            <Avatar>
              <AvatarFallback>PA</AvatarFallback>
              <AvatarImage className="rounded-full w-[50px]" src="https://github.com/pedroaparecido.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-800">Humano:</span> Qual a sua opnião sobre javascript?
            </p>
          </div>
          <div className="flex gap-3 text-slate-600 text-small">
          <Avatar>
              <AvatarFallback>PA</AvatarFallback>
              <AvatarImage className="rounded-full w-[50px]" src="https://github.com/rocketseat.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-800">IA:</span> Qual a sua opnião sobre javascript?
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="Como posso te ajudar?" />
          <Button type="submit">Enviar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
