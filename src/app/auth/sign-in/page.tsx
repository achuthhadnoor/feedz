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
    const loginUser = async (e: any) => {
        e.preventDefault()
        await supabase.auth.signInWithPassword({
            email,
            password,
        })
        router.refresh()
    }
    return (
        <div>
            <h1 className='text-xl font-bold'>Sign in to you account</h1>
            <span className='text-xs'>or</span>  <Link href="/auth/sign-up" className='text-xs'>create an account</Link>
            <form onSubmit={loginUser} className='flex flex-col max-w-md gap-2 justify-center items-center'>
                <input type="email" className='p-2 dark:bg-neutral-800 bg-neutral-100 outline-none rounded w-full' required />
                <input type="password" className='p-2 dark:bg-neutral-800 bg-neutral-100 outline-none rounded w-full' required />
                <div>
                    <button className='px-4 py-2 bg-neutral-800 rounded'>
                        Sign in
                    </button>
                </div>
                <label>--- OR ---</label>
                <button>Sign in with google</button>
            </form>
        </div>
    )
}
