import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { FlaskConical } from "lucide-react";

export default function TestPage() {
  return (
    <main className="flex gap-4 p-8 h-screen w-full relative">
      <Button variant="default">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="destructive">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="ghost">Button</Button>
    </main>
  );
}
