import getUserId from "@/lib/auth";

export default async function Home() {
  const tenantId = getUserId()
  return (
    <main className="">
      Feedz
    </main>
  );
}
