import * as React from 'react';
import AuthImage from '../../assets/auth-image.svg';
import './AuthFrame.css'
import Logo from '../../assets/logo.svg';

export interface AuthFrameArg {
    child: JSX.Element
}

export default function AuthFrame({ child }: AuthFrameArg) {
    return (
        <div className='w-screen h-screen max-w-full max-h-full relative flex'>
            <div className='w-screen h-screen max-w-full max-h-full bg-primary-color justify-center items-center flex  absolute'>
                <div className='bg-white rounded-md w-5/6 h-5/6 absolute flex ' id='auth-background-white'>
                    <div className='flex flex-col w-2/5 px-16 py-1/12 items-center' >
                        <img src={Logo} alt="Logo" className='w-3/4' />
                        {child}
                    </div>
                </div>
            </div>
            <img src={AuthImage} alt="Background" className='w-3/5 absolute right-0 bottom-1/12' id='auth-image' />
        </div>
    )
}