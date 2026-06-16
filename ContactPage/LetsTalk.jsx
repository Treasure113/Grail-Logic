import StillNeedHelp from '../FAQsPage/StillNeedHelp';
import FAQs from '../HomePage/FAQs-Section'


import {useState} from 'react';
import { MuiTelInput } from "mui-tel-input";
import { ChevronDown } from "lucide-react";
import {OverlayedDivAndAnalysis} from '../HomePage/Why-Grail-Logic'
// import PhoneInput from "react-phone-input-2/dist/lib/index.js";


function InputField({text, placeholder, className, isTextarea = false}) {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex gap-1'>
                <label>
                    <p className='text-white text-[12px]'>{text}</p>
                </label>
                <div className='text-red-500 text-[12px]'>
                    <p>*</p>
                </div>
            </div>
            {/* <input type='text' placeholder={placeholder} className={`border border-[#303030] !text-white text-sm rounded-[4px] h-[48px] pr-4 pl-4 w-[311px] ${className}`}/> */}

            {isTextarea ? (
                <textarea
                    placeholder={placeholder}
                    className={`border w-full border-[#303030] text-white text-sm rounded-[4px] p-4 w-[300px] resize-none ${className}`}
                />
            ) : (
                <input
                    type="text"
                    placeholder={placeholder}
                    className={`border border-[#303030] w-full text-white text-sm rounded-[4px] h-[48px] px-4 w-[300px] lg:max-w-full ${className}`}
                />
            )}
        </div>
    );
}


export default function LetsTalk() {
    const [phone, setPhone] = useState('');
    return (
        <section id='contact-us' className='py-12 h-auto'>
            <div className='flex flex-col lg:gap-12 lg:mt-[12rem]'>
                <div className="text-center flex flex-col gap-4 lg:gap-12 md:gap-8 items-center">
                    <h1 className="text-[24px] tracking-tight md:text-[44px] lg:text-[64px]">Let’s Talk</h1>
                    <p className="text-white lg:text-[18px] w-[343px] text-sm opacity-50 lg:opacity-100 leading-relaxed md:w-full">Have a question, feedback, or need assistance? We’re here to help.</p>
                </div>

                <div className='p-3 lg:w-[600px] mx-auto'>
                    <div className='flex lg:px-6 rounded-[8px] flex-col gap-6 bg-gradient-to-r from-[#100E24] to-[#100E24] border border-[#3B3C9A99] p-4'>
                        <div>
                            <h1 classname='lg:!text-[24px]'>Contact Support </h1>
                        </div>
                        
                        <div className='flex flex-col gap-4'>
                            <div className='lg:flex lg:gap-4 lg:max-w-full'>
                                <InputField 
                                    text='First Name'
                                    placeholder='Enter your first name'
                                />

                                <InputField 
                                    text='Last Name'
                                    placeholder='Enter your Last name'
                                />
                            </div>

                            <InputField 
                                text='Email Address'
                                placeholder='Enter your email address'
                            />
                            
                            <div className='flex flex-col gap-2 relative'>
                            <label className='text-white text-[12px]'>Phone number <span className='text-red-500'>*</span></label>
                            <MuiTelInput
                                value={phone}
                                onChange={setPhone}
                                defaultCountry="NG"

                                sx={{
                                width: "100%",

                                "& .MuiOutlinedInput-root": {
                                height: "48px",
                                backgroundColor: "transparent",
                                color: "#fff",
                                borderRadius: "4px",

                                "& fieldset": {
                                    borderColor: "#303030",
                                },

                                "&:hover fieldset": {
                                    borderColor: "#FFD700",
                                },

                                "&.Mui-focused fieldset": {
                                    borderColor: "#FFD700",
                                },
                                },

                                "& .MuiInputBase-input": {
                                color: "#fff",
                                padding: '15px'
                                },

                                "& .MuiButtonBase-root img": {
                                borderRadius: "50%",
                                width: "22px",
                                height: "20px"
                                },
                                }}
                            />

                             <ChevronDown
                                size={16}
                                className="absolute left-[3rem]  top-[3.5rem] -translate-y-1/2 text-[#89888B] pointer-events-none"
                            />
                            </div>

                            
                            <InputField 
                                text='Message'
                                placeholder='Let us know how we can help...'
                                isTextarea
                                className ='h-[223px] '
                            />
                        </div>
                                    {/* Button & Privacy Policy */}
                        <div className='flex flex-col gap-4'>
                            
                                <button className='w-full text-white rounded-[16px] bg-[#3B3C9A] px-4 py-[10px]'>
                                    Send Message
                                </button>
                            

                            <div className='w-full text-center'>
                                <p className='text-white text-[12px]'>Your message and contact info are secure with us. Read our <span className='text-[#5759D0]'>Privacy Policy</span></p>
                            </div>
                        </div>
                    </div>  
                </div>
                
                <div>
                    <div>
                        <StillNeedHelp 
                            isTestimonial={false}
                            className2='bg-[#0D0D0D] py-12'
                            className='p-2'
                        />
                    </div>

                    <div className='bg-white'>
                        <div className='py-6'>
                            <OverlayedDivAndAnalysis />
                        </div>
                    </div>

                    <div className='bg-white -mb-12'>
                        <FAQs 
                            showCard={false}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}