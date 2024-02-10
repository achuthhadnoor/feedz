'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function Page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const supabase = createClientComponentClient();
    const router = useRouter()
    const signUpUser = async (e: any) => {
        e.preventDefault()
        await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`
            }
        })
        router.refresh()
    }
    return (
        <div>
            <h1 className='text-xl font-bold'>Create an account</h1>
            <Link href="/auth/sign-in" className='text-xs'>or sign in to your account</Link>
            <form onSubmit={signUpUser} className='flex flex-col max-w-md gap-2 justify-center items-center'>
                <input type="email" className='p-2 dark:bg-neutral-800 bg-neutral-100 outline-none rounded w-full' required />
                <input type="password" className='p-2 dark:bg-neutral-800 bg-neutral-100 outline-none rounded w-full' required />
                <div>
                    <button className='px-4 py-2 bg-neutral-800 rounded'>
                        Sign up
                    </button>
                </div>
                <label>--- OR ---</label>
                <button>Sign up with google</button>
            </form>
        </div>
    )
}
