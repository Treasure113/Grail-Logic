import {useState} from 'react';

import { Minus } from 'lucide-react';
import { Plus } from 'lucide-react';
import { Button } from './Header'


const abstractBackground = '/Frame 971.png'

function FAQCards({text, dropDownText}) {
    const [dropDown, setDropDown] = useState(false);
    return (
        <>
        <div className='relative flex flex-col gap-2'>
            <button className="flex justify-between items-center"
                onClick={() => setDropDown(!dropDown)}
            >
                    <h1 className="!text-black text-sm">
                        {text}
                    </h1>

                    {dropDown ? (
                            <Minus size={20} />
                        ) : (
                            <Plus size={20} />
                    )}
            </button>
                {/* Demarcation */}
            <div className='border-b border-[#E8EBED]'></div>

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
                    <p className="text-[#5A5A5A] text-sm">
                    {dropDownText}
                    </p>
                </div>
        </div>
        </>
    )
}

export function Card({className}) {
     const [position, setPosition] = useState({ x: 0, y: 0 });
     const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        setPosition ({
            x: x * 0.3,
            y: y * 0.3
        });
     };

     const handleMouseLeave = () => {
        setPosition({x: 0, y: 0})
     }
    return (
        <div className={`flex items-center justify-center ${className}`}>
            {/* Main Div */}
            <div className='relative bg-black w-full min-h-[380px] md:max-w-[1091px] rounded-md overflow-hidden md:rounded-2xl'>

            {/* Image Overlay */}
            <div className='absolute'>
                <img src={abstractBackground} className=' md:w-[1091px] md:h-[1184px] object-cover'/>
            </div>

            <div className='absolute p-8 top-[3rem] inset-x-0 mx-auto flex justify-center md:top-24 md:inset-x-auto md:mx-0 md:left-1/2 md:-translate-x-1/2 w-full'>
                    <div className='flex flex-col text-center items-center gap-4 w-full max-w-xl'>
                        <h1 className='text-[20px] text-white md:text-[30px] leading-normal font-semibold'>
                            Ready to Let Your Account Trade Smarter?
                        </h1>
                        <p className='!text-white text-sm opacity-80'>
                            Connect your broker and let our proven strategy work for you automatically.
                        </p>
                    </div>
                </div>

            {/* Button Overlay*/}
            <div className='absolute bottom-12 left-1/2 -translate-x-1/2 md:bottom-12 flex'
                style={{
                        transform: `translate(${position.x}px, ${position.y}px)`,
                    }}
                    onMouseMove = {handleMouseMove}
                    onMouseLeave = {handleMouseLeave}
            >
                <Button 
                    label = 'Get started now'
                    className='pt-4 pr-8 pb-4 pl-8 w-fit'
                     
                />
            </div>
            </div>
        </div>
    );
}

export default function FAQs({showCard = true}) {
    return (
        <section className='flex flex-col gap-8 p-6 md:py-24'>
            <div className="w-full flex flex-col items-center">
                <div className="text-center flex flex-col gap-4 md:gap-8">
                    <h1 className="!text-black text-[24px] tracking-tight md:text-[44px]">Frequently Asked Questions</h1>
                    <p className="text-sm opacity-50 w-3/4 translate-x-[3.5em] lg:-translate-x-[rem] leading-relaxed md:w-full">Everything you need to know before getting started with Grail Logic.</p>
                </div>
            </div>

            <div className='flex flex-col gap-12 md:p-12 lg:w-1/2 lg:mx-auto'>
               <FAQCards 
                text='Do I need trading experience to use Grail Logic?'
                dropDownText='No, you don’t. Once you connect your broker account, our system handles the trading for you. There’s no need to monitor charts or manage trades manually.'
               />

               <FAQCards 
                text='Is my money safe with Grail Logic?'
                dropDownText='Yes. Your funds stay in your own trading account. We don’t have access to your money. We only mirror trades from our strategy account through a secure connection.'
               /> 

               <FAQCards 
                text='What brokers do you support?'
                dropDownText='Grail Logic currently supports popular MT4 and MT5 brokers. We recommend using a trusted and regulated broker for the best experience.'
               />

               <FAQCards 
                text='Can I disconnect my account at any time?'
                dropDownText='Absolutely. You have full control and can pause or disconnect your account from the mirroring system whenever you choose.'
               />

               <FAQCards 
                text='How often does the system trade?'
                dropDownText='The bot trades based on market conditions and strategy triggers. You’ll typically see multiple trades per week, depending on volatility and setup accuracy.'
               />

               <FAQCards 
                text='How much can I expect to earn?'
                dropDownText='Returns vary based on market conditions, but our master strategy has maintained a historical 65% win rate. While past performance isn’t a guarantee, it provides strong potential for steady growth.'
               />
            </div>
                    {/* Card */}
            
            {showCard && (
            <Card />
            )}
        </section>
    )
};