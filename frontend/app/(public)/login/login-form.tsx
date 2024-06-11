import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const LoginForm = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default LoginForm;

{
  /* <Card className="w-full max-w-sm">
<CardHeader>
  <CardTitle className="text-2xl">Login</CardTitle>
  <CardDescription>
    Enter your email below to login to your account.
  </CardDescription>
</CardHeader>
<CardContent className="grid gap-4">
  <div className="grid gap-2">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="m@example.com" required />
  </div>
  <div className="grid gap-2">
    <Label htmlFor="password">Password</Label>
    <Input id="password" type="password" required />
  </div>
</CardContent>
<CardFooter>
 <Link href="/code" className="w-full"> <Button className="w-full">Log in</Button></Link>
</CardFooter>
</Card> */
}
