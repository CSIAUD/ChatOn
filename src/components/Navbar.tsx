"use server";

import { getServerSession } from "next-auth";
import { FC } from "react";
import { LogInButton } from "./LogInButton";
import { authConfig } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import { LogoutButton } from "./LogoutButton";

export const Navbar: FC = async () => {
  const session = await getServerSession(authConfig);

  if (!session) {
    return (
      <nav className="justify-end p-4 flex gap-4 items-center">
        <LogInButton />
      </nav>
    );
  }

  return (
    <nav className="justify-end p-4 flex gap-4 items-center">
      <LogoutButton />
      <div className="flex gap-4 items-center">
        <div>
          <p className="text-right font-bold">{session.user.name}</p>
          <p className="text-xs">{session.user.email}</p>
        </div>
        <img
          className="rounded-full"
          src={session.user.image ?? ""}
          alt="user profile picture"
          width="48"
        />
      </div>
    </nav>
  );
};
