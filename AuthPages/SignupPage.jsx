import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { Dot } from 'lucide-react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import { InputField } from '../ContactPage/LetsTalk';
// import { Logo } from '../HomePage/Header';

'use client';
import { CheckCheck, Eye, EyeOff, X } from 'lucide-react';
import React, { useMemo } from 'react';
const PASSWORD_REQUIREMENTS = [
  { regex: /.{8,}/, text: 'Minimum of 8 characters' },
  { regex: /[0-9]/, text: 'At least one uppercase letter' },
  { regex: /[a-z]/, text: 'At least 1 lowercase letter' },
  { regex: /[A-Z]/, text: 'At least one number' },
  { regex: /[!-/:-@[-`{-~]/, text: 'At least one special character (!”#$ )' },
];
const STRENGTH_CONFIG = {
  colors: {
    0: 'bg-border',
    1: 'bg-red-500',
    2: 'bg-orange-500',
    3: 'bg-amber-500',
    4: 'bg-amber-700',
    5: 'bg-emerald-500',
  },
  texts: {
    0: 'Enter a password',
    1: 'Weak password',
    2: 'Medium password!',
    3: 'Strong password!!',
    4: 'Very Strong password!!!',
  },
};

export const Logo2 = '/smaller-logo.png';

const Google = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7509 10.1941C18.7509 9.47471 18.6913 8.94971 18.5624 8.40527H10.1794V11.6525H15.1C15.0009 12.4594 14.4652 13.6747 13.2747 14.4913L13.258 14.6L15.9085 16.6123L16.0921 16.6303C17.7786 15.1039 18.7509 12.858 18.7509 10.1941" fill="#4285F4"/>
            <path d="M10.1788 18.75C12.5895 18.75 14.6133 17.9722 16.0915 16.6305L13.274 14.4916C12.5201 15.0068 11.5081 15.3666 10.1788 15.3666C7.81773 15.3666 5.81379 13.8402 5.09944 11.7305L4.99473 11.7392L2.23868 13.8295L2.20264 13.9277C3.67087 16.786 6.68674 18.75 10.1788 18.75Z" fill="#34A853"/>
            <path d="M5.10014 11.7302C4.91165 11.1858 4.80257 10.6024 4.80257 9.99967C4.80257 9.39686 4.91165 8.81355 5.09022 8.26911L5.08523 8.15316L2.29464 6.0293L2.20333 6.07186C1.5982 7.25798 1.25098 8.58995 1.25098 9.99967C1.25098 11.4094 1.5982 12.7413 2.20333 13.9274L5.10014 11.7302" fill="#FBBC05"/>
            <path d="M10.1789 4.63331C11.8554 4.63331 12.9864 5.34303 13.6312 5.93612L16.1511 3.525C14.6035 2.11528 12.5895 1.25 10.1789 1.25C6.68676 1.25 3.67088 3.21387 2.20264 6.07218L5.08953 8.26943C5.81381 6.15972 7.81776 4.63331 10.1789 4.63331" fill="#EB4335"/>
        </svg>
    );
};
const Incorrect = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99731 1.04199C14.9447 1.04199 18.9551 5.05267 18.9553 10C18.9553 14.9476 14.9449 18.959 9.99731 18.959C5.04976 18.959 1.03931 14.9476 1.03931 10C1.03957 5.05267 5.04993 1.04199 9.99731 1.04199ZM13.0862 6.91113C12.7608 6.58602 12.2338 6.58602 11.9084 6.91113L9.99731 8.82227L8.08618 6.91113C7.76085 6.58624 7.23378 6.58624 6.90845 6.91113C6.58302 7.23658 6.583 7.76442 6.90845 8.08984L8.8186 10L6.90845 11.9111C6.583 12.2366 6.58302 12.7644 6.90845 13.0898C7.23378 13.4147 7.76085 13.4147 8.08618 13.0898L9.99731 11.1787L11.9084 13.0898C12.2338 13.415 12.7608 13.415 13.0862 13.0898C13.4116 12.7644 13.4116 12.2366 13.0862 11.9111L11.176 10L13.0862 8.08984C13.4116 7.76442 13.4116 7.23658 13.0862 6.91113Z" fill="#E42B2B"/>
        </svg>
    );
};

export const PasswordInput = ({label, placeholder}) => {
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [showRequirements, setShowRequirements] = useState(false);


  const calculateStrength = useMemo(() => {
    const requirements = PASSWORD_REQUIREMENTS.map((req) => ({
      met: req.regex.test(password),
      text: req.text,
    }));
    return {
      score: requirements.filter((req) => req.met).length,
      requirements,
    };
  }, [password]);
  return (
    <div className="">
      <form className="space-y-2">
        
            <label htmlFor="password" className="flex gap-1 text-white block text-[12px] font-light">
            {label}<span className='text-red-500'>*</span>
            </label>
        <div className="relative ">
          <input
            id="password"
            type={isVisible ? 'text' : 'password'}
            value={password}
            onFocus={() => setShowRequirements(true)}
            onChange={(e) => { setPassword(e.target.value)
                if (e.target.value.length > 0) {
                    setShowRequirements(true)
                }
            }}
            onBlur={() => {
                if (password.length === 0) {
                    setShowRequirements(false);
                }
            }}
            placeholder={placeholder}
            aria-invalid={calculateStrength.score < 4}
            aria-describedby="password-strength"
            className="focus:blur-10 focus:shadow-[0_0_2px_#1B1EFF] focus:shadow-[#1B1EFF] focus:ring-2
                        focus:ring-[#3B3C9A]/30 w-full lg:w-full md:w-full lg: px-4 text-white h-[48px] text-sm p-2 border-1 border-[#303030] rounded-md shadow-md blur-10 bg-muted outline-hidden focus-within:border-[#3B3C9A] transition"
          />
          <button
            type="button"
            onClick={() => setIsVisible((prev) => !prev)}
            aria-label={isVisible ? 'Hide password' : 'Show password'}
            className="absolute text-[#ACB0B1] inset-y-0 right-2 outline-hidden flex items-center justify-center w-9 text-muted-foreground/80 hover:text-foreground  "
          >
            {isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </form>
      <div className="flex gap-2 w-full justify-between mt-2">
        <span
          className={`${calculateStrength.score >= 1 ? 'bg-green-200' : 'bg-muted'}  p-1 rounded-full w-full transition-all duration-300`}
        ></span>
        <span
          className={`${calculateStrength.score >= 2 ? 'bg-green-300' : 'bg-muted'}  p-1 rounded-full w-full transition-all duration-300`}
        ></span>
        <span
          className={`${calculateStrength.score >= 3 ? 'bg-green-400' : 'bg-muted'}  p-1 rounded-full w-full transition-all duration-300`}
        ></span>
        <span
          className={`${calculateStrength.score >= 4 ? 'bg-green-500' : 'bg-muted'}  p-1 rounded-full w-full transition-all duration-300`}
        ></span>
        <span
          className={`${calculateStrength.score >= 5 ? 'bg-green-600' : 'bg-muted'}  p-1 rounded-full w-full`}
        ></span>
      </div>

      <p
        id="password-strength"
        className="my-2 text-sm font-medium flex justify-between"
      >
        {/* <span>
          {STRENGTH_CONFIG.texts[Math.min(calculateStrength.score, 4)]}
        </span> */}
      </p>
            
      <div
        className={`
            overflow-hidden
            transition-all
            duration-300
            ${
            showRequirements
                ? 'max-h-60 opacity-100 mt-4'
                : 'max-h-0 opacity-0'
            }
        `}
      >
      <ul className="text-[#8C8C8C] space-y-1.5" aria-label="Password requirements">
        {calculateStrength.requirements.map((req, index) => (
          <li key={req.text} className="flex items-center space-x-2">
            {req.met ? (
              <CheckCheck size={16} className="text-emerald-500" />
            ) : (
              <Dot size={18} className="text-muted-foreground/80" />
            )}
            <span
              className={`text-xs ${req.met ? 'text-emerald-600' : 'text-muted-foreground'}`}
            >
              {req.text}
              <span className="sr-only">
                {req.met ? ' - Requirement met' : ' - Requirement not met'}
              </span>
            </span>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};




export default function Signup() {
    const [checked, setChecked] = useState('null')
     const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
  e.preventDefault();
        setError('')

  if (!email.trim()) {
    setError("Email is required");
    setTimeout(() => {
        setError('')
    }, 2000);

    return;
  }

  if (!password.trim()) {
    setError("Password is required");

    setTimeout(() => {
        setError('')
    }, 2000);

    return;
  }
    console.log('Login successful')
};

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
    return (
        <>
        <section id='signup' className="relative signup-page">
            {error && (
                <div className='absolute top-5 lg:left-[55rem] left-[6rem] bg-[#FBEBEC] border border-[#E42B2B] rounded-[6px] p-[12px] h-[44px] flex gap-2 items-center'>
                    <Incorrect />
                    <p className="text-[#131313] text-sm">
                    {error}
                    </p>
                </div>
            )}
            <div className='p-3 lg:w-[600px] mx-auto flex-1 lg:h-[784px]'>
                    <div className='flex lg:p-12 lg:px-8 rounded-[8px] mt-16 flex-col gap-6 bg-gradient-to-r from-[#100E24] to-[#100E24] border border-[#3B3C9A99] p-4'>
                        <img src={Logo2} className='w-[159.74px] h-[41px] object-cover'></img>

                        <div className='flex flex-col mt-5 lg:gap-2 text-[24px]'>
                            <h1 classname=''>Start Mirroring Trades Today </h1>
                            <p className='text-white opacity-80 lg:opacity-50 text-[14px] w-full'>Create your account and get started in minutes.</p>
                        </div>
                        
                        <form onSubmit={handleLogin}>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-4 lg:flex lg:gap-4 lg:max-w-full'>
                               <InputField 
                                text='Email Address'
                                placeholder='Enter your email address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />

                                
                            <PasswordInput 
                                password={password}
                                setPassword={setPassword}
                            />
                            
                            <div className='mb-12'>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                        checked={checked}
                                        onChange={(e) => setChecked(e.target.checked)}
                                        sx={{
                                            color: 'white', // unchecked color
                                            '&.Mui-checked': {
                                            color: '#3B3C9A', // checked color
                                            },

                                            '& .MuiSvgIcon-root': {
                                                borderRadius: '6px', // 👈 this is the key
                                            },
                                        }}
                                        />
                                    }
                                    className=''
                                    label={
                                        <p className='text-[12px] text-white tracking-wider translate-y-2 opacity-80'>By signing up, you accept our <Link className='text-[#5759D0] hover:underline underline-[#5759D0]' to='/terms-and-condition'>Terms,</Link> <Link className='text-[#5759D0] hover:underline underline:[#5759D0]' to='/privacy-policy'>Privacy Policy,</Link> and agree to receive updates.</p>
                                    }
                                />
                            </div>
                            
                            </div>  
                        </div>
                        

                                    {/* Button & Privacy Policy */}
                        <div className='flex flex-col gap-4'>
                            
                                <button className='w-full text-white rounded-[12px] bg-[#7C7CBB] px-4 py-[10px]'
                                    type='submit'
                                >
                                    Create account
                                </button>
                            
                            <div className='w-full text-center'>
                                <p className='text-white text-[12px] opacity-80'>Already have an account? <Link to='/login'>
                                        <span className='text-[#5759D0] hover:underline'>Log in</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                        </form>
                                {/* Google Login */}
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-2 items-center '>
                                <div className='w-1/2 h-0 border border-[#303030] p-0'></div> <p className='text-[#8C8C8C] text-sm'>Or</p> <div className='w-1/2 h-0 border border-[#303030] p-0'></div>
                            </div>

                            <button className='text-white flex items-center justify-center gap-2 text-sm border-white w-full h-[48px] border rounded-[4px]'>
                               <Google /> 
                               Continue with Google
                            </button>
                        </div>
                    </div>  
                </div>
        </section>
    </>
    );
};