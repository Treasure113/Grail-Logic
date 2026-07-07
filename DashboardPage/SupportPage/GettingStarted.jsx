import { useState } from "react";
import {
    Plus, 
    Minus
} from 'lucide-react';

export function SupportCards({text, dropDownText}) {
    const [dropDown, setDropDown] = useState(false);
    return (
        <>
        <div className='relative flex flex-col gap-1 py-2 px-6 bg-gradient-to-r from-[#100E24] to-[#161233] border border-[#1D1B3D] rounded-[8px]'>
            <button className={`flex justify-between items-center`}
                onClick={() => setDropDown(!dropDown)}
            >
                    <h1 className={`!text-white text-[16px]`}>
                        {text}
                    </h1>

                    {dropDown ? (
                            <Minus size={20} className="text-white"/>
                        ) : (
                            <Plus size={20} className="text-white"/>
                    )}
            </button>
                
            <div className=''></div>
             <div
                    className={`
                        overflow-hidden
                        transition-all
                        duration-300
                        ease-in-out
                        ${
                            dropDown
                            ? "max-h-40 opacity-100 mt-4"
                            : "max-h-0 opacity-0 mt-0"
                        }
                    `}
                    >
                    <p className={`text-[#E5E5E5] text-sm`}>
                        {dropDownText}
                    </p>
                </div>
        </div>
        </>
    )
}

export default function GettingStarted() {
    return (
        <div className="flex flex-col gap-6 mt-12 max-w-[770px]">
                        <SupportCards 
                          text='How do I create an account on Grail Logic?'
                          dropDownText='Visit our website and click on “Get Started”. Fill in your details, agree to the terms, and verify your email to activate your account.'
                        />

                        <SupportCards 
                          text='What brokers are supported?'
                          dropDownText='We currently support major forex brokers that offer API access, including MetaTrader 4 (MT4) compatible platforms. A full list will be available during account connection.'
                        />

                        <SupportCards 
                          text='What is needed to connect my trading account?'
                          dropDownText='You’ll need your broker login username or API key (depending on the broker), and an active trading account with sufficient margin.'
                        />

                        <SupportCards 
                          text='Is my trading data safe?'
                          dropDownText='Yes. We use encrypted API connections, and your credentials are never stored in plain text. You maintain full control of your funds.'
                        />
                    </div>
    )
}