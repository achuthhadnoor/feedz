import { supabaseServer } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface ILayoutProps {
    children: React.ReactNode;
}

export default async function AuthLayout({ children }: ILayoutProps) {
    const cookieStore = cookies()
    const supabase = supabaseServer(cookieStore)

    const { data } = await supabase.auth.getUser()
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    if (data?.user) {
        redirect('/')
    }
    return (
        <>{children}</>
    );
}
