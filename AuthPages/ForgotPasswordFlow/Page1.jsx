import {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { InputField } from '../../ContactPage/LetsTalk';
// import { Logo } from '../HomePage/Header';


export const Logo2 = '/smaller-logo.png';

const Correct = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.95801 0C13.9055 0 17.9168 4.01061 17.917 8.95801C17.917 13.9056 13.9056 17.917 8.95801 17.917C4.01061 17.9168 0 13.9055 0 8.95801C0.000175748 4.01071 4.01071 0.000175744 8.95801 0ZM12.8545 5.84375C12.5152 5.53305 11.9886 5.55637 11.6777 5.89551L7.68262 10.2539L6.21387 8.78613C5.88843 8.4607 5.36157 8.4607 5.03613 8.78613C4.7107 9.11157 4.7107 9.63843 5.03613 9.96387L7.11914 12.0479C7.27985 12.2085 7.4994 12.296 7.72656 12.291C7.95366 12.286 8.16872 12.1889 8.32227 12.0215L12.9062 7.02148C13.2171 6.68221 13.1937 6.15471 12.8545 5.84375Z" fill="#29A645"/>
        </svg>
    );
};


export default function ForgotPasswordOne() {
    const [email, setEmail] = useState('');
    const [hasTyped, setHasTyped] = useState(false);
    const [verify, setVerify] = useState(false)

    const navigate = useNavigate();
    
    useEffect(() => {
    // 1. Save your unique background class name
    const uniqueBgClass = 'bg-[#0D0B1D]';
    
    // 2. Add the class to the HTML body when the component mounts
    document.body.classList.add(uniqueBgClass);

    // 3. Clean up function: removes the class when the user navigates away
    return () => {
      document.body.classList.remove(uniqueBgClass);
    };
  }, []);

  const handleVerify = () => {
  setVerify(true);

  setTimeout(() => {
    setVerify(false);
    navigate("/generate-OTP")
  }, 3000);
};

    return (
        <>
        <section id='ForgotPassword(Page1)' className="relative flex flex-col items-center justify-center translate-y-24">
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
                            <p className='text-white opacity-50 lg:opacity-50 text-[14px] w-full'>Enter your registered email to get a 6-digit verification code.</p>
                        </div>
                        
                        
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col gap-4 lg:flex lg:gap-4 lg:max-w-full'>
                                    <InputField 
                                        text='Email Address'
                                        placeholder='Enter your email address'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>  
                            </div>
                                        {/* Button & Privacy Policy */}
                            <div className='flex flex-col gap-4 items-center'>
                                        <button className={`w-full text-center text-white text-[14px] rounded-[12px] px-4 py-[10px] transition duration-200
                                              ${email.trim() ? 'bg-[#3B3C9A]' : 'bg-[#7C7CBB]'}`
                                        }
                                        onClick={handleVerify}
                                        type='button'
                                        >
                                            Send reset code
                                        </button>
                                    

                                    <Link className='text-[#3B3C9A] text-sm hover:underline' to='/login'>Back to login</Link>
                            </div>
                        
                    </div>  
                </div>
        </section>
    </>
    );
};