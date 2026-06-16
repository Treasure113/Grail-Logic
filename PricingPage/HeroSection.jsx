// import { HeroText } from "../HomePage/HeroSection";
import { Vector } from "../HomePage/HeroSection";
import { VectorDeskTop } from "../HomePage/HeroSection";
import { Card } from "../HomePage/FAQs-Section";


function Circle() {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="white" fill-opacity="0.12"/>
            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="url(#paint0_linear_160_9436)"/>
            <path d="M30.001 20C30.001 25.5228 25.5238 30 20.001 30C14.4781 30 10.001 25.5228 10.001 20C10.001 14.4772 14.4781 10 20.001 10C25.5238 10 30.001 14.4772 30.001 20ZM14.501 20C14.501 23.0376 16.9634 25.5 20.001 25.5C23.0385 25.5 25.501 23.0376 25.501 20C25.501 16.9624 23.0385 14.5 20.001 14.5C16.9634 14.5 14.501 16.9624 14.501 20Z" fill="white"/>
            <defs>
            <linearGradient id="paint0_linear_160_9436" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.16"/>
            <stop offset="1" stop-color="white" stop-opacity="0.02"/>
            </linearGradient>
            </defs>
        </svg>
    )
}

function List({text}) {
    return (
        <div className="flex gap-2 items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.7131 3.3007C15.3598 5.94737 15.3131 10.2673 12.5798 12.8607C10.0531 15.254 5.95315 15.254 3.41981 12.8607C0.679812 10.2673 0.633137 5.94737 3.28647 3.3007C5.88647 0.694036 10.1131 0.694036 12.7131 3.3007Z" stroke="white" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.1665 7.99995L7.05317 9.88661L10.8332 6.11328" stroke="white" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <p className="text-[#FFFFFFCC]">{text}</p>
        </div>
    )
}

function Circle2() {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="url(#paint0_linear_160_9467)"/>
            <path d="M30 20C30 25.5228 25.5228 30 20 30C14.4772 30 10 25.5228 10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20ZM14.5 20C14.5 23.0376 16.9624 25.5 20 25.5C23.0376 25.5 25.5 23.0376 25.5 20C25.5 16.9624 23.0376 14.5 20 14.5C16.9624 14.5 14.5 16.9624 14.5 20Z" fill="black"/>
            <defs>
            <linearGradient id="paint0_linear_160_9467" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5B5CC8"/>
            <stop offset="1" stop-color="#22237C"/>
            </linearGradient>
            </defs>
        </svg>
    );
};

function PricingCard({type, description, price, subcontentlabel, list}) {
    return (
        <div className="bg-gradient-to-b from-[#3B3C9A1A] via-[#3B3C9A05] to-[#3B3C9A0F] p-6 rounded-[32px] border border-[#5E5FBE80] flex flex-col gap-8 backdrop-blur-lg">
            <div className="flex flex-col gap-6">
                <Circle />
                <div className="flex flex-col gap-2">
                    <h1 className="text-[20px]">{type}</h1>
                    <p className="text-white text-sm">{description}</p>
                </div>
            </div>

            <div>
                <h1 className="text-[36px]">{price}</h1>
            </div>

            <button className="space-grotesk text-white bg-gradient-to-b from-[#FFFFFF14] to-[#FFFFFF00] px-6 py-3 rounded-[12px] border border-[#FFFFFF1A]" >
                Get Started
            </button>

                    {/* Line */} <div className="bg-[#1D1B3D3D] w-full"></div>
            <div className="flex flex-col gap-4">
               <h1>{subcontentlabel}</h1> 
               <div>
                    {list}
               </div>
            </div>
        </div>
    )
}

function PricingCard2() {
    return (
        <div className="bg-gradient-to-b from-[#2BFFFF1F] via-[#2BFFFF0A] to-[#2BFFFF12] p-6 rounded-[32px] border border-[#5E5FBE80] flex flex-col gap-8 backdrop-blur-lg">
            <div className="flex flex-col gap-6">
                <Circle2 />
                <div className="flex flex-col gap-2">
                    <h1 className="text-[20px]">Pro Trader</h1>
                    <p className="text-[#FFFFFFCC] text-sm">For consistent traders</p>
                </div>
            </div>

            <div>
                <h1 className="text-[36px]">$49 <span className="text-sm font-[Inter] font-normal text-[#FFFFFFCC]">/ per month</span></h1>
            </div>

            <button className="space-grotesk text-white bg-gradient-to-b from-[#5B5CC8] to-[#22237C] px-6 py-3 rounded-[12px]" >
                Get Started
            </button>

                    {/* Line */} <div className="bg-[#1D1B3D3D] w-full"></div>
            <div className="flex flex-col gap-4">
               <h1>Everything in Starter</h1> 
               <div className="flex flex-col gap-4">
                    <List 
                        text='Up to $5,000 Account Balance'
                    />
                    <List 
                        text='Monthly Performance Reports'
                    />
                    <List 
                        text='Profit Notification Alerts'
                    />
                    <List 
                        text='Email + Chat Support'
                    />
                    <List 
                        text='Access to Exclusive Trading Insights'
                    />
               </div>
            </div>
        </div>
    )
}







export default function HeroSection() {
    return (
        <section id='Hero Section' className=" mt-12 flex flex-col gap-16">

            <div className='flex flex-col mx-auto gap-12 items-center justify-center'>                   
                        <div className='flex flex-col items-center justify-center max-w-full text-center  gap-6'>
                            <div>
                                <h1 className='text-[28px] md:text-md lg:text-5xl font-[700] tracking-wide leading-tight w-[343px] lg:w-[800px] h-auto text-center'>
                                    Flexible pricing built to <span className="text-[#C3C3C3]">grow with you</span>
                                </h1>
                            </div>
                            <div className='w-3/4'>
                                <p className='text-white leading-[150%]'>
                                    Whether you're just getting started or scaling up, Grail Logic has a plan that fits your needs.
                                </p>
                            </div>
                        </div>

                        <Vector />
                        
                                        
                        <div className="relative lg:top-[8rem] z-0 flex items-center flex-col gap-12 -mt-13">
                            <VectorDeskTop 
                            className='absolute'
                        />
                            <div className="rounded-[12px] border w-[300px]  lg:max-w-[300px] border-[#1D1B3D] bg-[#0D0B1D] flex gap-4 p-1 items-center justify-between">
                                <div className="bg-[#0056D2] rounded-[8px] shadow-[inset_0_0px_2px_#FFFFFF]">
                                    <p className="text-white px-4 py-2 ">Monthly</p>
                                </div>

                                <div>
                                    <span className="text-[#C5C5C5]">Annually (Save 15%)</span>
                                </div>
                            </div>

                            {/* Price Cards */}
                            <div className="flex flex-col lg:flex-row gap-6">
                            <PricingCard 
                                type='Starter'
                                description='Perfect for beginners.'
                                price ='Free'
                                subcontentlabel='What you will get'
                                list = {
                                    <div className="flex flex-col gap-4">
                                    <List 
                                        text='Trade mirroring access'
                                    />
                                    <List 
                                        text='Up to $500 account balance'
                                    />
                                    <List 
                                        text='Basic Support'
                                    />
                                    <List 
                                        text='24-Hour Customer Service'
                                    />
                                    <List 
                                        text='Access to Monthly Newsletter'
                                    />
                            </div>
                                                }
                                            />

                            <PricingCard2 />

                            <PricingCard 
                                type='Elite'
                                description='High-volume traders'
                                price ={
                                    <div>
                                        <h1 className="text-[36px]">$99 <span className="text-sm font-[Inter] font-normal text-[#FFFFFFCC]">/ per month</span></h1>
                                    </div>
                                }
                                subcontentlabel='Everything in Pro Trader'
                                list={
                                   <div className="flex flex-col gap-4">
                                                <List 
                                                    text='Unlimited Trade Mirroring'
                                                />
                                                <List 
                                                    text='Dedicated Account Manager'
                                                />
                                                <List 
                                                    text='Weekly Performance Reports'
                                                />
                                                <List 
                                                    text='Early Access to New Features'
                                                />
                                                <List 
                                                    text='Private Discord Group for Top Traders'
                                                />
                                        </div>
                                }
                            />
                            </div>

                        </div>

                        
            </div>

            <Card 
              className='border lg:mt-36 border-white bg-white w-full lg:max-w-7xl mx-auto px-12 py-12'
            />
        </section>
    );
};