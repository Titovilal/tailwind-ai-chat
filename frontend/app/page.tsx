import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <h1 className="text-center text-primary text-3xl font-bold tracking-tighter md:text-6xl leading-[1.1]">
        Tailwind AI Chat
      </h1>
      <span className="flex items-center gap-4 text-center text-lg text-muted-foreground">
        <p className="font-mono">
          {" "}
          Improve your productivity with Tailwind AI Chat!{" "}
        </p>
        <Rocket className="h-5 w-5" />
      </span>
      <span className="space-x-4">
        <Button variant="outline">Get Started</Button>
       <Link href="/login"> <Button>Login</Button></Link>
      </span>
    </main>
  );
}
