import { Link } from "react-router-dom";

export default function AuthForm() {
    return (
        <form className='flex flex-col w-full justify-evenly h-full items-center' method='post'>
            <h1 className='text-5xl text-primary-color font-medium'>LOGIN</h1>
            <input className='rounded-md w-full p-4 ring-1 ring-slate-500 text-xl' placeholder='Email' type="email">
            </input>
            <input className='rounded-md w-full p-4 ring-1 ring-slate-500 text-xl' type="password" placeholder='Password'></input>
            <button className='rounded-md w-full bg-primary-color px-4 py-4' disabled>
                <p className='text-[#ffffff] font-semibold text-2xl'>LOG IN</p>
            </button>
            <p>Forgot password? <Link to="/forgot-password"><b className='text-primary-color font-bold'>Click here</b></Link></p>
        </form>
    );
}