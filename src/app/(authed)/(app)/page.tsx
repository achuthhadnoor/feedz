// import { createClient } from "@/utils/supabase/server";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

export default async function Home() {
  // const cookieStore = cookies()
  // const supabase = createClient(cookieStore)

  // const { data, error } = await supabase.auth.getUser()
  // if (error || !data?.user) {
  //   redirect('/')
  // }
  return (
    <main className="">
      Feedz
    </main>
  );
}
