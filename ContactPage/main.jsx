import Header from "../HomePage/Header";
import Footer from "../HomePage/Footer"
import LetsTalk from './LetsTalk';

import { Frame3 } from "../HomePage/main";
import { Frame4 } from "../HomePage/main";


const Frame1 = '/Frame 967.png';
const Frame2 = '/Frame 968.png';


export default function ContactPage() {
    return (
        <>
        <div className=" ">
            <div className="relative max-w-full flex flex-col overflow-hidden
                 bg-[size:20px_50%] bg-[#0D0B1D]"
            > 
            <div className="hidden lg:flex absolute inset-x-0 top-0 h-[32.5rem] bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_20px)] [mask-image:linear-gradient(to_bottom,black_0%,black_60%,transparent_100%)]
                [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_10%,transparent_100%)]"
            >
                
            </div>   
                {/* Background Images */}
                <div className="flex">                    
                    <div className="absolute left-0 w-[463px]">
                        <img src={Frame2}/>
                    </div>

                    <div className="absolute right-0 w-[463px]">
                        <img src={Frame1}/>
                    </div>
                </div>

                <div className="lg:hidden md:hidden">
                    <div className="absolute z-0  left-0 pointer-events-none">
                        <img src={Frame3} className="w-[105px]"/>
                    </div>

                    <div className="absolute z-0 right-0 pointer-events-none">
                        <img src={Frame4} className="w-[105px]"/>
                    </div>
                </div>

                <Header className='lg:mt-6'/>
                
                <main>
                    <LetsTalk />
                </main>
            </div>

             
             <div>
                <Footer />
            </div>

        </div>

       
        
        </>
    );
};