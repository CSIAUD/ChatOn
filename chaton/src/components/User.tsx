import authConfig from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export const User = async () => {
  const session = await getServerSession(authConfig);

  console.log(session);

  return <>{JSON.stringify(session)}</>;
};
