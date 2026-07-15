import Header from "./Header"
import HeroSection from "./HeroSection"
import WhyGrailLogic from "./Why-Grail-Logic"
import OurItWork from "./Our-It-Work-Section"
import FAQs from "./FAQs-Section"
import Footer from "./Footer"

const Frame1 = '/Frame 967.png';
const Frame2 = '/Frame 968.png';

export const Frame3 = '/mobile ray 1.png';
export const Frame4 = '/mobile ray 2.png';


export default function HomePage() {
    return (
        <div className="main-container flex-1 min-h-screen">
            <div className="relative max-w-full flex flex-col 
                    bg-[size:20px_100%] bg-[#0D0B1D]"
            > 
            <div className="hidden lg:flex absolute inset-x-0 top-0 h-[32.5rem] bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_20px)] [mask-image:linear-gradient(to_bottom,black_0%,black_60%,transparent_100%)]
                [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_10%,transparent_100%)]"
            ></div>

                {/* Background Images */}
                <div className="hidden lg:flex">                    
                    <div className="absolute z-0 left-0 pointer-events-none w-[463px]">
                        <img src={Frame2}/>
                    </div>

                    <div className="absolute z-0 right-0 pointer-events-none w-[463px]">
                        <img src={Frame1}/>
                    </div>
                </div>

                <div className="lg:hidden">
                    <div className="absolute z-0 left-0 pointer-events-none">
                        <img src={Frame3} className="w-[105px]"/>
                    </div>

                    <div className="absolute z-0 right-0 pointer-events-none">
                        <img src={Frame4} className="w-[105px]"/>
                    </div>
                </div>


                <Header 
                 className='lg:mt-6'
                />
                <HeroSection />    
            </div>

            <main className="bg-[#FFFFFF] min-h-screen mx-auto">
                <WhyGrailLogic/>
            </main>

            <main>
                <OurItWork />
            </main>

            <main className="bg-[#FFFFFF] min-h-screen mx-auto">
                <FAQs />
            </main>

            <div>
                <Footer />
            </div>
        </div>
    )
};