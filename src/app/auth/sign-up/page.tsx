import Link from 'next/link'
import { signup } from './actions'

export default function Page() {
    return (
        <div>
            <h1 className='text-xl font-bold'>Create an account</h1>
            <Link href="/auth/sign-in" className='text-xs'>or sign in to your account</Link>
            <form className='flex flex-col max-w-md gap-2 justify-center items-center text-sm'>
                <input type="email" className='p-2 dark:bg-neutral-800 bg-neutral-100 outline-none rounded w-full' required placeholder='your email address' />
                <input type="password" className='p-2 dark:bg-neutral-800 bg-neutral-100 outline-none rounded w-full' required placeholder='enter password' />
                <div>
                    <button className='px-4 py-2 bg-neutral-800 rounded' formAction={signup}>
                        Sign up
                    </button>
                </div>
                <label>--- OR ---</label>
                <button>Sign up with google</button>
            </form>
        </div>
    )
}
