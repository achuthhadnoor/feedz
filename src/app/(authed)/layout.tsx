import { supabaseServer } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface ILayoutProps {
    children: React.ReactNode;
}

export default async function AuthLayout({ children }: ILayoutProps) {
    const cookieStore = cookies()
    const supabase = supabaseServer(cookieStore)

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/auth/sign-up')
    }
    return (
        <>{children}</>
    );
}
