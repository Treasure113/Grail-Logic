import Header from "../HomePage/Header";
import Footer from "../HomePage/Footer"

import PrivacyPolicy from './PrivacyPolicy'


const Frame1 = '/Frame 967.png';
const Frame2 = '/Frame 968.png';


export default function PrivacyPolicyPage() {
    return (
        <>
        <div>
            <div className="relative max-w-full flex flex-col
                    bg-[size:20px_50%] bg-[#0D0B1D]"
            > 
            <div className="hidden lg:flex absolute inset-x-0 top-0 h-[32.5rem] bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_20px)] [mask-image:linear-gradient(to_bottom,black_0%,black_60%,transparent_100%)]
                [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_10%,transparent_100%)]"
            >
                
            </div>   
                {/* Background Images */}
                <div className="flex">                    
                    <div className="absolute left-0">
                        <img src={Frame2}/>
                    </div>

                    <div className="absolute right-0">
                        <img src={Frame1}/>
                    </div>
                </div>

                <Header />
                
                <main>
                    <PrivacyPolicy />
                </main>
            </div>

             

        </div>

       
        <div>
                <Footer />
        </div>
        </>
    );
};