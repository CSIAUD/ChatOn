import { signIn } from "next-auth/react";

export const LogInButton = () => {
  return <button onClick={() => signIn("github")}>Sign in</button>;
};
