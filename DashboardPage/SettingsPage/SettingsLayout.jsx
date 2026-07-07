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

export default function SettingsPage() {
    const settingsLinks = [
    {
      id: "profile",
      label: "My Profile",
      badge: null,
      href: '/settings/my-profile'
    },

    {
      id: "security",
      label: "Security",
      badge: null,
      href: '/settings/security'
    },

    {
      id: "notifications",
      label: "Notifications",
      href: '/settings/notifications'
    },

    {
      id: "billing and subscription",
      label: "Billing & Subscription",
      href: '/settings/billing-and-subscription'
    },
  ];

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
                        Settings
                    </h1>
                </div>

                <div className="flex flex-col gap-12">

                    {/* Settings Links */}
                    <div className="px-6">
                        <div className="space-y-4 space-x-4 mt-12">

                        {settingsLinks.map((link) => {

                            const isSettingsActive = location.pathname === link.href;

                            return (
                            <Link
                                key={link.id}
                                to={link.href}
                                className={`
                                inline-flex
                                w-fit
                                flex
                                items-center
                                gap-3
                                px-3
                                py-3
                                rounded-[32px]
                                transition-all

                                ${
                                    isSettingsActive
                                    ? "bg-[#3B3C9A] text-white"
                                    : "bg-white text-[#585858]"
                                }
                                `}
                            >

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

                    
                </div>
             </div>
        </section>
    );
};