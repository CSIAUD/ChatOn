import prisma from "@/lib/db";

export default async function Page() {
  const groups = await prisma.group.findMany();

  return (
    <>
      <h1>Test</h1>
      {JSON.stringify(groups)}
    </>
  );
}
