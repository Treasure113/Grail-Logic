import Header from "./Header"
import HeroSection from "./HeroSection"
import WhyGrailLogic from "./Why-Grail-Logic"
import OurItWork from "./Our-It-Work-Section"
import FAQs from "./FAQs-Section"
import Footer from "./Footer"

const Frame1 = '/Frame 967.png';
const Frame2 = '/Frame 968.png';


export default function HomePage() {
    return (
        <div>
            <div className="relative max-w-full flex flex-col lg:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)]
                    bg-[size:20px_100%] bg-[#0D0B1D]"
            >    
                {/* Background Images */}
                <div className="flex">                    
                    <div className="absolute z-0 left-0 pointer-events-none">
                        <img src={Frame2}/>
                    </div>

                    <div className="absolute z-0 right-0 pointer-events-none">
                        <img src={Frame1}/>
                    </div>
                </div>


                <Header />
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