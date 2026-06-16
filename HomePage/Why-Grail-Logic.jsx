const abstractBackground1 = '/Frame 969.png'
const abstractBackground2 = '/Frame 970.png'
const image = '/brokerage-specialist.jpg'
const overlayImage = '/overlay-image.png'
const image2 = '/ceo-grail-logic.png'


    
export function Data({data, text, className}) {

    return (
        <div className={`flex flex-col w-full gap-8 bg-[#FFFFFF] p-8 lg:px-25 lg:text-center lg:items-center ${className}`}>
            <h1 className="!text-black text-[44px]">{data}</h1>
            <p className="opacity-50">{text}</p>
        </div>
    )

};

export function GridArrangement({icon, label, description}) {
    return (
        
            <div className='relative h-[165x] bg-white border border-neutral-100 rounded-[16px]  flex flex-col gap-6 pt-[40px] pr-[30px] pb-[30px] pl-[30px]'>     
                <div className="absolute -top-6 left-5 bg-white px-3 py-2 ">      
                    {icon}
                </div> 

                <div className="top-10 flex flex-col gap-2 px-1">
                    <h2 className="font-bold !text-black !text-[16px] !md:text-md !lg:text-lg">{label}</h2>
                    <p className="opacity-50">{description}</p>
                </div>
            </div>
        

    )
}

export function WhyTrustGrailLogic({text1, text2}) {
    return (
        <div>
                <div>
                     <img src={abstractBackground1} className="w-full h-[173.82px] absolute z-10 "></img>
                    
                    <img src={abstractBackground2} className="w-full h-[173.82px] absolute"></img>
                </div>
                <div className="relative text-center flex flex-col gap-4 lg:gap-6 py-16 items-center ">
                    <h1 className="!text-black text-[24px] md:text-md lg:text-[44px] font-[700]">
                        {text1}
                    </h1>
                    <p className="opacity-50 w-[270.04px] text-sm md:text-md lg:text-lg lg:w-[500px]">
                        {text2}
                    </p>
                </div>
        </div>
    )
}

export function OverlayedDivAndAnalysis({className, className2}) {
    return (
    <div className={`relative w-full aspect-[4/3] md:aspect-[16/9] bg-white flex flex-col ${className}`}>
                    <div className={`${className2}`}>
                        <div className="absolute inset-0 z-10 w-full h-[800px] lg:h-[1000px] p-6 lg:p-24 ">
                            <img src={overlayImage} className="w-full h-full object-cover object-right lg:object-top rounded-2xl bg-gradient-to-r from-[#3E3E3EB2] to-[#3E3E3E66] opacity-[50%]" />
                        </div>

                        <div className='w-full h-[800px] lg:h-[1000px] p-6 lg:p-24'>
                            <img src={image} className="w-full h-full object-cover object-[15%_center] lg:object-top md:max-w-full lg:max-w-full rounded-2xl opacity-80" />
                        </div>
                    </div>

            {/* Text */}

                <div className="absolute z-20 bottom-[38rem] left-[3rem] lg:bottom-[18rem] lg:left-[8rem] flex flex-col gap-6">
                    <h1 className="text-[24px] w-3/4 lg:w-1/2 md:w-1/2">Our AI engine adapts to market conditions and <span className='hover:text-gray-400'>
                        executes data-driven trades with consistency.</span> 
                    </h1>

                    <div className="rounded-full pt-2 pr-4 pb-2 pl-4 bg-white w-fit flex gap-2 items-center">
                        <img src={image2} alt="CEO, Grail Logic" className="w-12 h-12 rounded-full object-cover" />
                        <div>
                            <h1 className="font-bold text-lg !text-black relative z-20">Get started with us</h1>
                            <p className="text-sm text-gray-400">CEO, Grail Logic</p>
                        </div>
                    </div>
                </div>


                {/* Analysis */}
                <div className="flex flex-col gap-6 lg:flex-row lg:gap-x-2 bg-[#FAFAF9] py-6 lg:py-3">
                    <Data 
                        data = '1.8x'
                        text = 'Monthly returns on investments'
                    />

                    <Data 
                        data = '92%'
                        text = 'Users retention'
                    />

                    <Data 
                        data = '65%'
                        text = 'Average win rate'
                    />

                </div>
         </div>
    );
};

export default function WhyGrailLogic() {
    return (
        <>
            <section className="py-4 relative w-full lg:max-w-full flex flex-col">
                
                <WhyTrustGrailLogic 
                    text1='Why Traders Trust Grail Logic'
                    text2 = 'From strategy to execution we handle the hard part so you can grow your account with ease.'
                
                />

            {/* Grid Arrangement */}

                <div className="w-full flex flex-col gap-x-8 gap-y-5 lg:grid lg:grid-cols-3 lg:p-24">
                    <GridArrangement 
                    icon={
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 5C13.6266 5 11.3066 5.70379 9.33316 7.02236C7.35977 8.34094 5.8217 10.2151 4.91345 12.4078C4.0052 14.6005 3.76756 17.0133 4.23058 19.3411C4.6936 21.6689 5.83649 23.8071 7.51472 25.4853C9.19295 27.1635 11.3312 28.3064 13.6589 28.7694C15.9867 29.2324 18.3995 28.9948 20.5922 28.0866C22.7849 27.1783 24.6591 25.6402 25.9776 23.6668C27.2962 21.6935 28 19.3734 28 17C27.9964 13.8185 26.7309 10.7684 24.4813 8.51874C22.2316 6.26909 19.1815 5.00364 16 5ZM21.7075 12.7075L16.7075 17.7075C16.6146 17.8004 16.5043 17.8741 16.3829 17.9244C16.2615 17.9747 16.1314 18.0006 16 18.0006C15.8686 18.0006 15.7385 17.9747 15.6171 17.9244C15.4957 17.8741 15.3854 17.8004 15.2925 17.7075C15.1996 17.6146 15.1259 17.5043 15.0756 17.3829C15.0253 17.2615 14.9994 17.1314 14.9994 17C14.9994 16.8686 15.0253 16.7385 15.0756 16.6171C15.1259 16.4957 15.1996 16.3854 15.2925 16.2925L20.2925 11.2925C20.3854 11.1996 20.4957 11.1259 20.6171 11.0756C20.7385 11.0253 20.8686 10.9994 21 10.9994C21.1314 10.9994 21.2615 11.0253 21.3829 11.0756C21.5043 11.1259 21.6146 11.1996 21.7075 11.2925C21.8004 11.3854 21.8741 11.4957 21.9244 11.6171C21.9747 11.7385 22.0006 11.8686 22.0006 12C22.0006 12.1314 21.9747 12.2615 21.9244 12.3829C21.8741 12.5043 21.8004 12.6146 21.7075 12.7075ZM12 2C12 1.73478 12.1054 1.48043 12.2929 1.29289C12.4804 1.10536 12.7348 1 13 1H19C19.2652 1 19.5196 1.10536 19.7071 1.29289C19.8946 1.48043 20 1.73478 20 2C20 2.26522 19.8946 2.51957 19.7071 2.70711C19.5196 2.89464 19.2652 3 19 3H13C12.7348 3 12.4804 2.89464 12.2929 2.70711C12.1054 2.51957 12 2.26522 12 2Z" fill="url(#paint0_linear_135_3954)"/>
                        <defs>
                        <linearGradient id="paint0_linear_135_3954" x1="16" y1="1" x2="16" y2="29" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#36378C"/>
                        <stop offset="0.557692" stop-color="#3B3C9A"/>
                        <stop offset="1" stop-color="#4F51B8"/>
                        </linearGradient>
                        </defs>
                        </svg>
                    }
                    
                    label = 'Real-Time Trade Mirroring'

                    description= 'Your account mirrors every trade we make from our master account instantly and automatically.'
                    />

                    <GridArrangement 
                    icon = {
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 13C11.8022 13 11.6089 12.9414 11.4444 12.8315C11.28 12.7216 11.1518 12.5654 11.0761 12.3827C11.0004 12.2 10.9806 11.9989 11.0192 11.8049C11.0578 11.6109 11.153 11.4327 11.2929 11.2929C11.4327 11.153 11.6109 11.0578 11.8049 11.0192C11.9989 10.9806 12.2 11.0004 12.3827 11.0761C12.5654 11.1518 12.7216 11.28 12.8315 11.4444C12.9414 11.6089 13 11.8022 13 12C13 12.2652 12.8946 12.5196 12.7071 12.7071C12.5196 12.8946 12.2652 13 12 13ZM20 19C19.8022 19 19.6089 19.0586 19.4444 19.1685C19.28 19.2784 19.1518 19.4346 19.0761 19.6173C19.0004 19.8 18.9806 20.0011 19.0192 20.1951C19.0578 20.3891 19.153 20.5673 19.2929 20.7071C19.4327 20.847 19.6109 20.9422 19.8049 20.9808C19.9989 21.0194 20.2 20.9996 20.3827 20.9239C20.5654 20.8482 20.7216 20.72 20.8315 20.5556C20.9414 20.3911 21 20.1978 21 20C21 19.7348 20.8946 19.4804 20.7071 19.2929C20.5196 19.1054 20.2652 19 20 19ZM30 16C30 17.305 29.0613 18.2837 28.2325 19.1475C27.7612 19.64 27.2738 20.1475 27.09 20.5938C26.92 21.0025 26.91 21.68 26.9 22.3363C26.8813 23.5562 26.8612 24.9387 25.9 25.9C24.9387 26.8612 23.5562 26.8813 22.3363 26.9C21.68 26.91 21.0025 26.92 20.5938 27.09C20.1475 27.2738 19.64 27.7612 19.1475 28.2325C18.2837 29.0613 17.305 30 16 30C14.695 30 13.7162 29.0613 12.8525 28.2325C12.36 27.7612 11.8525 27.2738 11.4062 27.09C10.9975 26.92 10.32 26.91 9.66375 26.9C8.44375 26.8813 7.06125 26.8612 6.1 25.9C5.13875 24.9387 5.11875 23.5562 5.1 22.3363C5.09 21.68 5.08 21.0025 4.91 20.5938C4.72625 20.1475 4.23875 19.64 3.7675 19.1475C2.93875 18.2837 2 17.305 2 16C2 14.695 2.93875 13.7162 3.7675 12.8525C4.23875 12.36 4.72625 11.8525 4.91 11.4062C5.08 10.9975 5.09 10.32 5.1 9.66375C5.11875 8.44375 5.13875 7.06125 6.1 6.1C7.06125 5.13875 8.44375 5.11875 9.66375 5.1C10.32 5.09 10.9975 5.08 11.4062 4.91C11.8525 4.72625 12.36 4.23875 12.8525 3.7675C13.7162 2.93875 14.695 2 16 2C17.305 2 18.2837 2.93875 19.1475 3.7675C19.64 4.23875 20.1475 4.72625 20.5938 4.91C21.0025 5.08 21.68 5.09 22.3363 5.1C23.5562 5.11875 24.9387 5.13875 25.9 6.1C26.8612 7.06125 26.8813 8.44375 26.9 9.66375C26.91 10.32 26.92 10.9975 27.09 11.4062C27.2738 11.8525 27.7612 12.36 28.2325 12.8525C29.0613 13.7162 30 14.695 30 16ZM12 15C12.5933 15 13.1734 14.8241 13.6667 14.4944C14.1601 14.1648 14.5446 13.6962 14.7716 13.1481C14.9987 12.5999 15.0581 11.9967 14.9424 11.4147C14.8266 10.8328 14.5409 10.2982 14.1213 9.87868C13.7018 9.45912 13.1672 9.1734 12.5853 9.05764C12.0033 8.94189 11.4001 9.0013 10.8519 9.22836C10.3038 9.45542 9.83524 9.83994 9.50559 10.3333C9.17595 10.8266 9 11.4067 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15ZM21.7075 11.7075C21.8004 11.6146 21.8741 11.5043 21.9244 11.3829C21.9747 11.2615 22.0006 11.1314 22.0006 11C22.0006 10.8686 21.9747 10.7385 21.9244 10.6171C21.8741 10.4957 21.8004 10.3854 21.7075 10.2925C21.6146 10.1996 21.5043 10.1259 21.3829 10.0756C21.2615 10.0253 21.1314 9.99944 21 9.99944C20.8686 9.99944 20.7385 10.0253 20.6171 10.0756C20.4957 10.1259 20.3854 10.1996 20.2925 10.2925L10.2925 20.2925C10.1996 20.3854 10.1259 20.4957 10.0756 20.6171C10.0253 20.7385 9.99944 20.8686 9.99944 21C9.99944 21.1314 10.0253 21.2615 10.0756 21.3829C10.1259 21.5043 10.1996 21.6146 10.2925 21.7075C10.4801 21.8951 10.7346 22.0006 11 22.0006C11.1314 22.0006 11.2615 21.9747 11.3829 21.9244C11.5043 21.8741 11.6146 21.8004 11.7075 21.7075L21.7075 11.7075ZM23 20C23 19.4067 22.8241 18.8266 22.4944 18.3333C22.1648 17.8399 21.6962 17.4554 21.1481 17.2284C20.5999 17.0013 19.9967 16.9419 19.4147 17.0576C18.8328 17.1734 18.2982 17.4591 17.8787 17.8787C17.4591 18.2982 17.1734 18.8328 17.0576 19.4147C16.9419 19.9967 17.0013 20.5999 17.2284 21.1481C17.4554 21.6962 17.8399 22.1648 18.3333 22.4944C18.8266 22.8241 19.4067 23 20 23C20.7956 23 21.5587 22.6839 22.1213 22.1213C22.6839 21.5587 23 20.7956 23 20Z" fill="url(#paint0_linear_136_9174)"/>
                        <defs>
                        <linearGradient id="paint0_linear_136_9174" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#36378C"/>
                        <stop offset="0.557692" stop-color="#3B3C9A"/>
                        <stop offset="1" stop-color="#4F51B8"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    }

                    label = '65% Strategy Win Rate'

                    description = 'We don’t guess. Our system is built on a tested strategy with a historical win rate of 65%.'
                    />

                    <GridArrangement 
                        icon = {
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 5H26C27.6569 5 29 6.34315 29 8V22C29 23.6569 27.6569 25 26 25H6C4.34315 25 3 23.6569 3 22V8C3 6.34315 4.34315 5 6 5Z" fill="url(#paint0_linear_136_9179)"/>
                            <path d="M12 27H20C20.2652 27 20.5196 27.1054 20.7071 27.2929C20.8946 27.4804 21 27.7348 21 28C21 28.2652 20.8946 28.5196 20.7071 28.7071C20.5196 28.8946 20.2652 29 20 29H12C11.7348 29 11.4804 28.8946 11.2929 28.7071C11.1054 28.5196 11 28.2652 11 28C11 27.7348 11.1054 27.4804 11.2929 27.2929C11.4804 27.1054 11.7348 27 12 27Z" fill="url(#paint1_linear_136_9179)"/>
                            <defs>
                            <linearGradient id="paint0_linear_136_9179" x1="16" y1="5" x2="16" y2="25" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#36378C"/>
                            <stop offset="0.557692" stop-color="#3B3C9A"/>
                            <stop offset="1" stop-color="#4F51B8"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_136_9179" x1="16" y1="27" x2="16" y2="29" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#36378C"/>
                            <stop offset="0.557692" stop-color="#3B3C9A"/>
                            <stop offset="1" stop-color="#4F51B8"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        }

                        label = 'Total Account Control'

                        description = 'You are always in charge. You connect, monitor and can opt out anytime.'
                    />

                    <GridArrangement 
                        icon = {
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5 15C21.5 16.0878 21.1774 17.1512 20.5731 18.0556C19.9687 18.9601 19.1098 19.6651 18.1048 20.0813C17.0998 20.4976 15.9939 20.6065 14.927 20.3943C13.8601 20.1821 12.8801 19.6583 12.1109 18.8891C11.3417 18.1199 10.8179 17.1399 10.6057 16.073C10.3935 15.0061 10.5024 13.9002 10.9187 12.8952C11.3349 11.8902 12.0399 11.0313 12.9444 10.4269C13.8488 9.82257 14.9122 9.5 16 9.5C17.4587 9.5 18.8576 10.0795 19.8891 11.1109C20.9205 12.1424 21.5 13.5413 21.5 15ZM28 6V26C28 26.5304 27.7893 27.0391 27.4142 27.4142C27.0391 27.7893 26.5304 28 26 28H6C5.46957 28 4.96086 27.7893 4.58579 27.4142C4.21071 27.0391 4 26.5304 4 26V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H26C26.5304 4 27.0391 4.21071 27.4142 4.58579C27.7893 4.96086 28 5.46957 28 6ZM26 26V6H6V26H6.45875C7.054 24.1218 8.18701 22.4595 9.7175 21.2188C9.97417 21.0121 10.2392 20.8196 10.5125 20.6413C10.6036 20.5818 10.7115 20.5537 10.82 20.5611C10.9285 20.5686 11.0317 20.6112 11.1138 20.6825C12.4718 21.8548 14.206 22.4998 16 22.4998C17.794 22.4998 19.5282 21.8548 20.8862 20.6825C20.9683 20.6112 21.0715 20.5686 21.18 20.5611C21.2885 20.5537 21.3964 20.5818 21.4875 20.6413C21.7608 20.8204 22.0258 21.0129 22.2825 21.2188C23.813 22.4595 24.946 24.1218 25.5413 26H26Z" fill="url(#paint0_linear_135_3970)"/>
                            <defs>
                            <linearGradient id="paint0_linear_135_3970" x1="16" y1="4" x2="16" y2="28" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#36378C"/>
                            <stop offset="0.557692" stop-color="#3B3C9A"/>
                            <stop offset="1" stop-color="#4F51B8"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        }

                        label = 'No Experience Needed'

                        description = 'Once you are connected, the bot handles trades while you focus on other things.'
                    />


                    <GridArrangement 
                        icon = {
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.1712 10.1706C10.5038 8.37945 11.3193 6.71321 12.5297 5.35175C13.7401 3.9903 15.2994 2.98535 17.0393 2.44541C18.7792 1.90548 20.6335 1.85108 22.402 2.28808C24.1705 2.72508 25.7861 3.63688 27.0742 4.92503C28.3624 6.21318 29.2742 7.82873 29.7112 9.59726C30.1482 11.3658 30.0938 13.2201 29.5539 14.96C29.0139 16.6998 28.009 18.2591 26.6475 19.4696C25.2861 20.68 23.6198 21.4955 21.8287 21.8281C21.4962 23.6192 20.6806 25.2854 19.4702 26.6469C18.2598 28.0083 16.7005 29.0133 14.9606 29.5532C13.2208 30.0931 11.3665 30.1475 9.59793 29.7105C7.8294 29.2735 6.21384 28.3617 4.92569 27.0736C3.63754 25.7854 2.72574 24.1699 2.28874 22.4013C1.85174 20.6328 1.90614 18.7785 2.44608 17.0386C2.98601 15.2988 3.99096 13.7395 5.35242 12.529C6.71387 11.3186 8.38011 10.5031 10.1712 10.1706ZM28 11.9993C28.0038 10.0494 27.2954 8.16523 26.0078 6.7009C24.7202 5.23658 22.9421 4.29292 21.0078 4.04729C19.0734 3.80165 17.1159 4.27095 15.5032 5.36699C13.8905 6.46303 12.7336 8.11033 12.25 9.9993C14.814 10.0667 17.2543 11.1157 19.0674 12.93C20.8805 14.7442 21.928 17.1852 21.9937 19.7493C23.7116 19.3048 25.2334 18.3026 26.3204 16.9001C27.4074 15.4975 27.9981 13.7738 28 11.9993ZM12 27.9993C13.7736 27.9978 15.4967 27.408 16.8992 26.3222C18.3016 25.2364 19.3043 23.716 19.75 21.9993C17.1848 21.9335 14.7429 20.8851 12.9285 19.0707C11.1141 17.2563 10.0658 14.8144 9.99997 12.2493C8.11099 12.7329 6.46369 13.8898 5.36765 15.5025C4.27162 17.1152 3.80231 19.0727 4.04795 21.0071C4.29358 22.9415 5.23724 24.7195 6.70157 26.0071C8.1659 27.2947 10.0501 28.0031 12 27.9993Z" fill="url(#paint0_linear_136_9190)"/>
                                <defs>
                                <linearGradient id="paint0_linear_136_9190" x1="16" y1="1.99609" x2="16" y2="30.0025" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#36378C"/>
                                <stop offset="0.557692" stop-color="#3B3C9A"/>
                                <stop offset="1" stop-color="#4F51B8"/>
                                </linearGradient>
                                </defs>
                            </svg>

                        }

                        label = 'Secure Broker Integration'

                        description = 'We work with trusted platforms like MT4/MT5. Your funds remain safe within your chosen broker.'
                    />

                    <GridArrangement 
                        icon = {
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2V8C12 8.53043 12.2107 9.03914 12.5858 9.41421C12.9609 9.78929 13.4696 10 14 10H20C20.5304 10 21.0391 9.78929 21.4142 9.41421C21.7893 9.03914 22 8.53043 22 8V2C22 1.46957 21.7893 0.960859 21.4142 0.585786C21.0391 0.210714 20.5304 0 20 0H14C13.4696 0 12.9609 0.210714 12.5858 0.585786C12.2107 0.960859 12 1.46957 12 2ZM2 0H8C8.53043 0 9.03914 0.210714 9.41421 0.585786C9.78929 0.960859 10 1.46957 10 2V8C10 8.53043 9.78929 9.03914 9.41421 9.41421C9.03914 9.78929 8.53043 10 8 10H2C1.46957 10 0.960859 9.78929 0.585787 9.41421C0.210714 9.03914 0 8.53043 0 8V2C0 1.46957 0.210714 0.960859 0.585787 0.585786C0.960859 0.210714 1.46957 0 2 0ZM14 12H20C20.5304 12 21.0391 12.2107 21.4142 12.5858C21.7893 12.9609 22 13.4696 22 14V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H14C13.4696 22 12.9609 21.7893 12.5858 21.4142C12.2107 21.0391 12 20.5304 12 20V14C12 13.4696 12.2107 12.9609 12.5858 12.5858C12.9609 12.2107 13.4696 12 14 12ZM2 12H8C8.53043 12 9.03914 12.2107 9.41421 12.5858C9.78929 12.9609 10 13.4696 10 14V20C10 20.5304 9.78929 21.0391 9.41421 21.4142C9.03914 21.7893 8.53043 22 8 22H2C1.46957 22 0.960859 21.7893 0.585787 21.4142C0.210714 21.0391 0 20.5304 0 20V14C0 13.4696 0.210714 12.9609 0.585787 12.5858C0.960859 12.2107 1.46957 12 2 12Z" fill="url(#paint0_linear_664_4355)"/>
                            <defs>
                            <linearGradient id="paint0_linear_664_4355" x1="11" y1="0" x2="11" y2="22" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#36378C"/>
                            <stop offset="0.557692" stop-color="#3B3C9A"/>
                            <stop offset="1" stop-color="#4F51B8"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        }

                        label = 'Performance Dashboard'

                        description = 'Track every move. See results, trade history, and profit breakdowns from your secure dashboard.'
                    />
                </div>
            </section>


            {/* Overlayed Div */}
            <OverlayedDivAndAnalysis />
        </>
    )
}