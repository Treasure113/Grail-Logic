import { useState } from "react";
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from "react-router-dom";

import { Logo2 } from "../AuthPages/ForgotPasswordFlow/Page1";



const navLinks = [
  { id: 1, label: "Company", href: "/company" },
  { id: 2, label: "Pricing", href: "/pricing" },
  { id: 3, label: "FAQs", href: "/FAQs" },
  { id: 4, label: "Contact Us", href: "/contact-us" },
];

export function Button({ label, className, onClick, id}) {
  const [click, setClick] = useState(false);
  return (
    
      <button 
      id={id}
      className={`text-[var(--text)] text-sm rounded-[12px] shadow-[0px_0px_0px_3px_#133367] ring-1 ring-white/20 transition-all duration-300
      hover:translate-y-1
      hover:shadow-lg 
      ${click ? 'bg-[#0D0D0D]' : 'bg-[#3B3C9A]'}
      
      ${className}`}
      onClick={(e) => { setClick(!click)
        onClick?.(e)
      }}
      >
        {label}
      </button>
    
  );
}



export function Logo({className}) {
  return (
    <Link to='/home'>
      <div className='flex gap-1 shrink-0'>
        <p className={`tracking-[11%] md:text-[16px] text-[var(--text)] font-light ${className}`}>GRAIL LOGIC</p>
        <div className="rounded-full w-3 h-3 flex justify-center items-center border text-[8px] border-[var(--primary)] text-[var(--primary)]">R</div>
      </div>
    </Link>
  );
}

export default function Header({className}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`w-full p-[1px] lg:rounded-[500px]  mx-auto shadow-[0px_1px_4px_0px_#26282E5E] lg:max-w-[931px] bg-gradient-to-r from-[#37393C] to-[#37393C00] ${className}`}>
    <header className={`w-full min-h-[84px] bg-[#17191C] lg:px-12 px-3  lg:backdrop-blur-16 lg:gap-24 flex items-center justify-between lg:rounded-[500px] relative`}>
        {/* Logo — left */}
        <Link to='/home' className="hover:opacity-80">
          <img src={Logo2} className="w-[150px] "/>
        </Link>

        {/* Nav links (desktop only) */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} className="group text-[var(--text)] font-medium  text-[14px] relative text-white after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Login + Sign Up — right (desktop only) */}
        <div className="lg:flex hidden items-center gap-4 shrink-0">
          <a href='/login' className="text-white font-medium hover:text-[#aa3bff]">Login</a>
          
          <Link to='/signup'>
            <Button className={`pt-[11px] pr-[20px] pb-[11px] pl-[20px] whitespace-nowrap
            `} 
              label="Sign Up"
              
              />
          </Link>
        </div>

        {/* Hamburger — right (mobile only) */}
        <div className="lg:hidden ml-auto border-none flex items-center gap-4">
          <Link to='/signup'>
            <Button className="pt-[11px] pr-[20px] pb-[11px] pl-[20px] whitespace-nowrap" label="Sign Up" 
            />
          </Link>
          <button onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen
              ? <X className="w-6 h-6 text-white" />
              : <Menu className="w-6 h-6 text-[#BEBEBE] hover:text-white" />
            }
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="absolute top-[84px] left-0 right-0 mx-3 rounded-xl bg-white shadow-lg z-[999]">
            <ul className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="text-base font-medium hover:text-[#3B3C9A] transition duration-200 text-black">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center gap-4 pb-6">
            </div>
          </div>
        )}
      
    </header>
    </div>
  );
}
