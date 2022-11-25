import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {

    const [isSubmittedEmail, setIsSubmittedEmail] = useState(false);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        setIsSubmittedEmail(true)

        setTimeout(() => {
            setIsSubmittedEmail(false)
        }, 5000)
    }

    return (
        <form className='flex flex-col w-full justify-evenly h-full items-center' onSubmit={handleSubmit}>
            <h1 className='text-5xl text-primary-color font-medium text-center'>FORGOT PASSWORD</h1>
            <p className="text-xl text-center w-2/3">{isSubmittedEmail ? `Please check your email` : `Please enter yout email to request a password reset.`} </p>
            <input className='rounded-md w-full p-4 ring-1 ring-slate-500 text-xl' placeholder='Email' type="email" />
            <button className='rounded-md w-full  bg-primary-color disabled:bg-disabled-color px-4 py-4 ' type="submit" disabled={isSubmittedEmail}>
                <p className='text-[#ffffff] font-semibold text-2xl'>RESET PASSWORD</p>
            </button>
            <p>Back to <Link to="/auth"><span className='text-primary-color font-semibold'>Login</span></Link></p>
        </form>
    );
}