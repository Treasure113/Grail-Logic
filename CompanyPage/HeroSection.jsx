import { VectorDeskTop } from "../HomePage/HeroSection";
import { Vector } from "../HomePage/HeroSection";

const image = '/young-people.jpg';
const synergy = '/synergy.png';
const lumina = '/lumina.png';
const velocity = '/velocity.png';
const spectrum = '/spectrum.png';
const enigma = '/enigma.png';
const vortex = '/vortex.png';

function Brands({logo, alt}) {
    return (
             <img src={logo} alt={alt} className='w-[72px] h-auto lg:w-[150px] object-cover mx-4' />
                     
    )
};



function TrustedBy({className}) {
    return (
     <>
        {/* <BlurredDemarcationLine /> */}
        
                    <div className={`flex flex-col relative items-center justify-center ${className}`}>
                <div className='absolute lg:hidden bottom-12 w-full blur-lg bg-black p-12'></div>

                {/* Linear Gradient for Desktop */} <div className="absolute hidden lg:flex h-[232px] bottom-0 blur-lg w-full bg-gradient-to-r from-[#0D0D0D] to-[#0D0D0D]"></div>
                    
                        <div className={`absolute lg:hidden bottom-0 border-t bg-[radial-gradient(ellipse_100%_5%_at_top,#28282C,#000000_40%)]`}>
                            <div className="flex flex-col justify-center">
                            <div className='mx-auto lg:justify-center '>
                                <div>
                                <p className='text-white text-[14px] text-center md:text-md lg:text-[18px]'>
                                    Trusted by 1000+ businesses across the world
                                </p>
                                </div>
                            </div>

                            <div className='flex items-center p-12 justify-center w-full py-6  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]'>
                                <Brands logo={synergy} alt="Synergy" />
                                <Brands logo={lumina} alt="Lumina" />
                                <Brands logo={velocity} alt="Velocity" />
                                <Brands logo={spectrum} alt="Spectrum" />
                                <Brands logo={enigma} alt="Enigma" />
                                <Brands logo={vortex} alt="Vortex" />
                            </div>
                            </div>
                    </div>      
                </div>
     </>   
    )
}


export default function HeroSection() {
    return (
        <section className="mt-12">
            <div className="flex flex-col gap-12">
                <div className="text-center flex flex-col gap-4 items-center justify-center lg:w-[971px] mx-auto">
                    <h1 className="text-[28px] leading-tight lg:text-[64px] lg:leading-[120%]">We’re on a mission to simplify <span className="text-[#C3C3C3]">automated trading</span></h1>
                    <p className="text-white text-sm w-3/4 md:text-[18px]">Grail Logic was built to give everyday traders access to the kind of automation and accuracy only experts once had.</p>
                </div>

                <Vector />
                <VectorDeskTop />

                <div className="p-4 -mt-15 md:p-12 w-full lg:max-w-[1200px] mx-auto lg:-mt-24">
                    <img src={image} className="rounded-xl"/>
                </div>

                <TrustedBy />
            </div>
        </section>
    );
};