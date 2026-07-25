import { MoveRight } from 'lucide-react';

const DesktopBottom = '/Bottom 1.png'
const MobileBottom = '/Bottom 2.png'

const Links = [
    {
        heading: 'Platform',
        links: [
            {
                label: 'How it works',
                href: '/how-it-works'
            },
            {
                label: 'Get Started',
                href: '/get-started'
            },
            {
                label: 'FAQs',
                href: '/FAQs'
            },
        ]
    },
    {
        heading: 'Company',
        links: [
            {
                label: 'About Us',
                href: '/company'
            },
            {
                label: 'Terms & Condition',
                href: '/terms-and-condition'
            },
            {
                label: 'Privacy Policy',
                href:'/privacy-policy'
            },
            {
                label: 'Contact Us',
                href: '/contact-us'
            },
            {
                label: 'FAQs',
                href: '/FAQs'
            }
        ]
    },
    {
        heading: 'Connect',
        links: [
            {
                label: 'X(Formerly Twitter)',
                href: '/X'
            },
            {
                label: 'Discord',
                href: '/Discord'
            },
            {
                label: 'LinkedIn',
                href: '/LinkedIn'
            },
            {
                label: 'Instagram',
                href: '/Instagram'
            }
        ]
    }
];


export default function Footer() {
    return (
        <footer className="p-6 gap-6 flex flex-col bg-[#0D0D0D]">
            <div className='flex flex-col gap-12 lg:px-32 mx-auto w-full md:justify-between md:flex-row md:gap-[225px] md:py-12'>
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
                            className='absolute right-2 top-1/2 -translate-y-1/2 lg:-translate-y-2 text-[#BEBEBE]'
                            aria-label='Submit email'
                        >   <MoveRight/>
                        </button>
                    </div>
                       
                       
                </div>



                {/* Footer Links */}
                <div className='flex flex-col gap-6 md:flex-row md:gap-24'>
                    {
                                Links.map((section, index) => {
                                    return (
                                        <div className='flex flex-col gap-4 text-white text-sm font-light'>
                                            <p className='!text-[12px] opacity-50'>{section.heading}</p>
                                            {
                                                section.links.map((link) => (
                                                    <a key={link.href} href={link.href} className='hover:underline underline-white underline-offset-5'>
                                                        {link.label}
                                                    </a>
                                                ))
                                            }
                                        </div>
                                    );
                                })
                    }
                </div>
            </div>



            {/* Bottom */}
            <div>
                <img src={DesktopBottom} className='hidden lg:flex'/>
            </div>

            <div>
                <img src={MobileBottom} className='lg:hidden'/>
            </div>
        </footer>
    )
};