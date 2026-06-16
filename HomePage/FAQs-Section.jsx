import { Plus } from 'lucide-react';
import { Button } from './Header'


const abstractBackground = '/Frame 971.png'

function FAQCards({text}) {
    return (
        <>
        <div className='flex flex-col gap-2'>
            <div className="flex justify-between items-center">
                    <h1 className="!text-black text-sm">
                        {text}
                    </h1>

                    <p className='text-[#222222]'><Plus /></p>
            </div>
                {/* Demarcation */}
            <div className='border-b border-[#E8EBED]'></div>
        </div>
        </>
    )
}

export function Card({className}) {
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
            <div className='absolute bottom-12 left-1/2 -translate-x-1/2 md:bottom-12 flex'>
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
               />

               <FAQCards 
                text='Is my money safe with Grail Logic?'
               /> 

               <FAQCards 
                text='What brokers do you support?'
               />

               <FAQCards 
                text='Can I disconnect my account at any time?'
               />

               <FAQCards 
                text='How often does the system trade?'
               />

               <FAQCards 
                text='How much can I expect to earn?'
               />
            </div>
                    {/* Card */}
            
            {showCard && (
            <Card />
            )}
        </section>
    )
};