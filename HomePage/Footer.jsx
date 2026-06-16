import { MoveRight } from 'lucide-react';

function FooterLinks({link1, link2, link3, link4, link5, text}) {
    return (
        <div className='flex flex-col gap-4 text-white text-sm font-light'>
            <p className='!text-[12px] opacity-50'>{text}</p>
            <a>{link1}</a>
            <a>{link2}</a>
            <a>{link3}</a>
            <a>{link4}</a>
            <a>{link5}</a>
        </div>
    );
};


export default function Footer() {
    return (
        <footer className="p-6 flex flex-col gap-20 max-w-none bg-[#0D0D0D]">
            <div className='flex flex-col gap-12 lg:w-3/4 mx-auto w-full md:justify-between md:flex-row md:gap-24 md:py-12'>
                {/* Newsletter Div */}
                <div className="p-6 bg-[#1C1C1C] flex-1 md:max-w-md flex-col flex gap-4 rounded-xl lg:text-[32px] leading-normal">
                    <h1>
                        Subscribe to our newsletter
                    </h1>

                    
                    <div className='relative w-full'>
                        <input 
                        className="border-b border-[#BEBEBE] text-white p-2 text-sm w-full font-light"
                        placeholder="email address"
                        type='text'
                        />

                        {/* Action Arrow Button */}
                        <button
                            type='submit'
                            className='absolute right-2 top-1/2 -translate-y-1/2 text-[#BEBEBE]'
                            aria-label='Submit email'
                        >   <MoveRight/>
                        </button>
                    </div>
                       
                       
                </div>



                {/* Footer Links */}
                <div className='flex flex-col gap-6 md:flex-row md:gap-24'>

                    <FooterLinks 
                        text='Platform'
                        link1='How it Works'
                        link2='Get Started'
                        link3='FAQs'
                    />

                    <FooterLinks 
                        text='Company'
                        link1='About Us'
                        link2='Terms & Conditions'
                        link3='Privacy Policy'
                        link4='Contact Us'
                        link5='FAQs'
                    />

                    <FooterLinks 
                        text='Connect'
                        link1='X(Formerly Twitter)'
                        link2='Discord'
                        link3='LinkedIn'
                        link4='Instagram'
                    />
                
                </div>
            </div>

            {/* Bottom */}
            <div className='text-center flex flex-col gap-5 lg:gap-24 max-w-full h-full'>
                <div className='whitespace-nowrap'>
                    <h1 className='text-2xl font-bold tracking-[4%] lg:text-[160.13px] underline decoration-1 !text-[#222222] md:text-[125px]'>GRAIL LOGIC</h1>
                </div>
                <p className='text-[#626262] text-sm opacity-40'>© 2025 Grail Logic. All rights reserved.</p>
            </div>
        </footer>
    )
};