import { useEffect, useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

import { 
    WalletMinimal,
    ShieldCog,
    Wallet,
    Waypoints,
    Settings,
    CircleQuestionMark,
} from 'lucide-react';

import StillNeedHelp from "../../FAQsPage/StillNeedHelp";

export default function SupportPage() {
    const supportLinks = [
    {
      id: "getting started",
      label: "Getting Started",
      icon: WalletMinimal,
      badge: null,
      href: '/support/getting-started'
    },
    {
      id: "account and security",
      label: "Account & Security",
      icon: ShieldCog,
      badge: null,
      href: '/support/account-and-security'
    },
    {
      id: "trading and synchronization",
      label: "Trading & Sync",
      icon: Wallet,
      href: '/support/trading-and-sync'
    },
    {
      id: "platform navigation",
      label: "Platform Navigation",
      icon: Waypoints,
      href: '/support/platform-navigation'
    },
    {
      id: "troubleshoot and support",
      label: "Troubleshooting & Support",
      icon: CircleQuestionMark,
      href: '/support/troubleshooting-and-support'
    },
  ];

//   function SupportCards({text, dropDownText}) {
//     const [dropDown, setDropDown] = useState(false);
//     return (
//         <>
//         <div className='relative flex flex-col gap-1 py-2 px-6 bg-gradient-to-r from-[#100E24] to-[#161233] border border-[#1D1B3D] rounded-[8px]'>
//             <button className={`flex justify-between items-center`}
//                 onClick={() => setDropDown(!dropDown)}
//             >
//                     <h1 className={`!text-white text-[16px]`}>
//                         {text}
//                     </h1>

//                     {dropDown ? (
//                             <Minus size={20} className="text-white"/>
//                         ) : (
//                             <Plus size={20} className="text-white"/>
//                     )}
//             </button>
                
//             <div className=''></div>
//              <div
//                     className={`
//                         overflow-hidden
//                         transition-all
//                         duration-300
//                         ease-in-out
//                         ${
//                             dropDown
//                             ? "max-h-40 opacity-100 mt-4"
//                             : "max-h-0 opacity-0 mt-0"
//                         }
//                     `}
//                     >
//                     <p className={`text-[#E5E5E5] text-sm`}>
//                         {dropDownText}
//                     </p>
//                 </div>
//         </div>
//         </>
//     )
// }

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

              const location = useLocation();

    return (
        <section>
            <div className="mt-6">
                <div>
                    <h1 className="text-white text-[24px] font-bold border-b p-5 lg:-mt-8 border-[#171717] bg-[#0D0B1D]">
                        Support Center
                    </h1>
                </div>

                <div className="lg:flex flex-row items-center gap-12">

                    {/* Support Links */}
                    <div className="w-[300px]">
                        <div className="space-y-4 mt-12">

                        {supportLinks.map((link) => {
                            const Icon = link.icon;

                            const isActive = location.pathname === link.href;

                            return (
                            <Link
                                key={link.id}
                                to={link.href}
                                className={`
                                w-full
                                flex
                                items-center
                                gap-3
                                px-3
                                py-3
                                rounded-[6px]
                                transition-all

                                ${
                                    isActive
                                    ? "bg-[#3B3C9A] text-white"
                                    : "hover:bg-white/5 text-white/50"
                                }
                                `}
                            >
                                <Icon size={20}/>

                                <>
                                    <span className="flex-1 text-left text-sm font-medium">
                                        {link.label}
                                    </span>

                                    {link.badge && (
                                    <span className="px-2 py-1 rounded-md text-xs bg-white/10">
                                        {link.badge}
                                    </span>
                                    )}
                                </>
                            </Link>
                            );
                        })}
                        </div>
                    </div>

                    <Outlet />

                    {/* <div className="flex flex-col gap-6 mt-12 max-w-[770px]">
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
                    </div> */}
                </div>

                <div className="w-full flex lg:flex-row flex-col mt-[10rem]">
                    <StillNeedHelp isTestimonial={false} h1='!text-[24px]'
                    />
                </div>
             </div>
        </section>
    );
};