import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { User, ArrowRight } from 'lucide-react';
import { Lock } from 'lucide-react';
import Link from "next/link";


export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">Login</CardTitle>
          <CardDescription>
            Preencha os campos abaixo para acessar o sistema.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
              </div>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[hsl(var(--primary))]" />
                    <Label htmlFor="email">Usuário</Label>
                  </div>  
                  <Input
                    id="username"
                    type="username"
                    placeholder="Digite seu nome de usuário"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-[hsl(var(--primary))]"/>
                      <Label htmlFor="password">Senha</Label>
                    </div>  
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      {/*Esqueceu a senha?*/}
                    </a>
                  </div>
                  <Input id="password" type="password" placeholder="Digite sua senha" required />
                </div>
                <div className="group flex items-center">
                  <Button type="submit" className="w-full">
                    Login
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              <div className="text-center text-sm">
                Não tem uma conta?{" "}
                <a href="/cadastro" className="underline underline-offset-4">
                  Cadastre-se
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
