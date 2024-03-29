"use client";

import { signIn } from "next-auth/react";

export const LogInButton = () => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded h-fit"
      onClick={async () => {
        await signIn();
      }}
    >
      Sign in
    </button>
  );
};
