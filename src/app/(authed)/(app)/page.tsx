import getUserId from "@/lib/auth";

export default async function Home() {
  const tenantId = getUserId();
  const events = await getEvents({
    tenantId,
    since: Date.now() - 1000 * 60 * 60 * 24 * 7,
  });

  return (
    <main className="">
      Feedz
    </main>
  );
}
