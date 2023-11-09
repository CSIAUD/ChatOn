"use client"

import { signIn } from "next-auth/react";

export const LogInButton = () => {
  return <>
  <button onClick={async () => {
    await signIn()
  }}>Sign in</button>;
  </>
};
