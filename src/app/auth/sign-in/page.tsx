'use client'
import Link from 'next/link'
import { RiGoogleFill } from "react-icons/ri";
import { Button } from '@/components/ui/button'
import { login } from './actions';

export default function Page() {
    return (
        <div>
            <h1 className='text-xl font-bold'>Sign in to you account</h1>
            <span className='text-xs'>or</span>  <Link href="/auth/sign-up" className='text-xs'>create an account</Link>
            <form className='flex flex-col max-w-md gap-2 justify-center items-center'>
                <input
                    type="email"
                    className='p-2 dark:bg-neutral-800 bg-neutral-100 outline-none rounded w-full'
                    placeholder='your email address'
                    required
                />
                <input
                    type="password"
                    className='p-2 dark:bg-neutral-800 bg-neutral-100 outline-none rounded w-full'
                    placeholder='enter password'
                    required
                />
                <Button variant={'outline'} className='' formAction={login}>
                    Sign in
                </Button>
                <label>--- OR ---</label>
                <Button variant={"outline"} className='gap-2 '>
                    <RiGoogleFill />
                    Sign in with google
                </Button>
            </form>
        </div>
    )
}
