import {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { InputField } from '../../ContactPage/LetsTalk';
import OtpInput from 'react-otp-input';
import { ChevronLeft } from 'lucide-react';
import { PasswordInput } from '../SignupPage';



export const Logo2 = '/smaller-logo.png';

const LeftArrow = () => {
    return (
      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
            <path d="M5.625 10.625L0.625 5.625L5.625 0.625" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    );
};

export default function ForgotPasswordThree({}) {
    const [email, setEmail] = useState('');
    const [hasTyped, setHasTyped] = useState(false);
    const [verify, setVerify] = useState(false)
    const [token, setTokens] = useState('')
    const [otp, setOtp] = useState('');

    const navigate = useNavigate();
    
    useEffect(() => {
    // 1. Save your unique background class name
     const prevClass = document.body.className;

    document.body.className = "bg-[#0D0B1D]";

    return () => {
    document.body.className = prevClass;
  };
}, []);

    return (
        <>
        

        <section id='ForgotPassword(Page3)' className="relative flex flex-col items-center justify-center translate-y-24 pointers-event-none">
            <Link className='text-white flex gap-2 items-center absolute w-[100px] h-12 z-0 inset-0 top-0 left-15'
                onClick={() => navigate(-1)}
            >
                <LeftArrow />
                <p className='text-white text-sm opacity-80'>Back</p>
        </Link>
            


            {/* OTP Verification */}
            {verify && (
                <div className={`flex gap-2 bg-[#EAFFEF] mb-12 text-[12px] items-center p-[12px] h-[44px] border border-[#29A645] rounded-[6px]
                    transition-opacity duration-500
                `}>
                    <Correct />
                    <p className='text-black text-sm'>A verification code has been sent to your email!</p>
                </div>
            )}


            <div className='p-3 lg:w-[600px] mx-auto flex-1 lg:h-[784px]'>
                    <div className='flex lg:p-12 lg:px-8 rounded-[8px] mt-[8rem] flex-col gap-6 bg-gradient-to-r from-[#100E24] to-[#100E24] border border-[#3B3C9A99] p-4'>
                        <img src={Logo2} className='w-[159.74px] h-[41px] object-cover'></img>

                        <div className='flex flex-col gap-2 lg:mt-5 text-[24px]'>
                            <h1 classname=''>Reset your password </h1>
                            <p className='text-white opacity-50 lg:opacity-50 text-[14px] w-full'>Please enter your new password.</p>
                        </div>
                        
                        
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col gap-4 w-full text-white lg:flex lg:gap-4 lg:max-w-full'>
                                    <PasswordInput 
                                        label='Password'
                                        placeholder='Enter password'
                                    />

                                    <PasswordInput 
                                        label='Confirm Password'
                                        placeholder='Re-enter password'
                                    />
                                </div>  
                            </div>
                                        {/* Button & Privacy Policy */}
                            <div className='flex flex-col gap-4 items-center'>
                                        <Link 
                                        className={`w-full bg-[#3B3C9A] text-center text-white text-[14px] rounded-[12px] px-4 py-[10px] transition duration-200
                                        ` 
                                        }
                                        type='button'
                                        to='/reset-password'
                                        >
                                            Reset Password
                                        </Link>
                                    

                                    {/* <Link className='text-[#3B3C9A] text-sm hover:underline' to='/login'>Back to login</Link> */}
                            </div>
                        
                    </div>  
                </div>
        </section>
    </>
    );
};