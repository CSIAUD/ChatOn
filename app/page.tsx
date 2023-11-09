import prisma from "@/lib/db";

export default async function Page() {
  const groups = await prisma.group.findMany();

  return (
    <>
      <h1 className="text-3xl">Test</h1>
      {JSON.stringify(groups)}
    </>
  );
}
