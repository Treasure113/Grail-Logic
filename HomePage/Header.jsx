import { useState } from "react";
import { Menu, X } from 'lucide-react';



const navLinks = [
  { id: 1, label: "Company", href: "/company" },
  { id: 2, label: "Pricing", href: "/pricing" },
  { id: 3, label: "FAQs", href: "/FAQs" },
  { id: 4, label: "Contact Us", href: "/contact-us" },
];

export function Button({ label, className }) {
  return (
    <button className={`bg-[#3B3C9A] text-[var(--text)] text-sm rounded-[12px] shadow-[0px_0px_0px_3px_#133367] ring-1 ring-white/20 ${className}`}>
      {label}
    </button>
  );
}

function Logo() {
  return (
    <div className="flex gap-1 shrink-0">
      <p className="tracking-[11%] md:text-[24px] text-[var(--text)] font-light">GRAIL LOGIC</p>
      <div className="rounded-full w-3 h-3 flex justify-center items-center border text-[8px] border-[var(--primary)] text-[var(--primary)]">R</div>
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full z-10 min-h-[84px] bg-[#17191CCC] border border-[#37393C] p-3 flex items-center md:max-w-[891px] mx-auto md:rounded-[500px] relative">

      {/* Logo — left */}
      <Logo />

      {/* Nav links — center (desktop only) */}
      <nav className="hidden lg:flex flex-1 justify-center">
        <ul className="flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} className="text-[var(--text)] font-medium hover:underline hover:text-white transition-all duration-200 text-base">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Login + Sign Up — right (desktop only) */}
      <div className="lg:flex hidden items-center gap-4 shrink-0">
        <a className="text-white font-medium">Login</a>
        <Button className="pt-[11px] pr-[20px] pb-[11px] pl-[20px] whitespace-nowrap" label="Sign Up" />
      </div>

      {/* Hamburger — right (mobile only) */}
      <div className="lg:hidden ml-auto flex items-center gap-4">
        <Button className="pt-[11px] pr-[20px] pb-[11px] pl-[20px] whitespace-nowrap" label="Sign Up" />
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
            {/* <a className="text-black font-medium">Login</a> */}
            <Button className="pt-[11px] pr-[20px] pb-[11px] pl-[20px] whitespace-nowrap" label="Sign Up" />
          </div>
        </div>
      )}
    </header>
  );
}
