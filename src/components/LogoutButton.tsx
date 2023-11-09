"use client";

import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded h-fit"
      onClick={async () => signOut()}
    >
      Sign out
    </button>
  );
};
