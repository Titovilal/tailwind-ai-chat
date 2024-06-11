import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";

const AuthButton = () => {
  const { data: session } = useSession();

add  if (session && session.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
        <div className="p-8"> {session.expires}</div>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
    </>
  );
};

export default AuthButton;
