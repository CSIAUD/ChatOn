import { useSession } from "next-auth/react";

export const User = () => {
  const session = useSession();

  return <>{JSON.stringify(session)}</>;
};
