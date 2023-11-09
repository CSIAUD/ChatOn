import prisma from "@/lib/db";
import { LogInButton } from "@/src/components/LogInButton";
import { getServerSession } from "next-auth";
import { authConfig } from "./api/auth/[...nextauth]/route";

export default async function Page() {
  const groups = await prisma.group.findMany();
  const session = await getServerSession(authConfig)
  
  return (
    <>
      <h1 className="text-3xl">Test</h1>
      <p>{JSON.stringify(groups)}</p>
      <p>{JSON.stringify(session)}</p>
      <LogInButton />
    </>
  );
}
