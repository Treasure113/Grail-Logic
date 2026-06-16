import Header from "../HomePage/Header"
import Footer from "../HomePage/Footer"

import HeroSection from "./HeroSection"
import OurStory from "./OurStory";


// export default function CompanyPage() {
//     return (
//         <div>
//             <div className="max-w-full overflow-x-hidden flex flex-col lg:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)]
//                      bg-[size:60px_100%] mx-auto"
//             >    
//                 <Header /> 
//                 <HeroSection />   
//             </div>

//             <main 
//             className="bg-[#FFFFFF] min-h-screen mx-auto"
//             >
//                  <OurStory />             
//             </main>
            
        
        
//             <div>
//                 <Footer />
//             </div>
//         </div>
//     );
// };

const Frame1 = '/Frame 967.png';
const Frame2 = '/Frame 968.png';


export default function CompanyPage() {
    return (
        <div>
            <div className="relative max-w-full flex flex-col lg:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)]
                    bg-[size:20px_100%] bg-[#0D0B1D]"
            >    
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
                <HeroSection />    
            </div>

            <main className="bg-[#FFFFFF] min-h-screen mx-auto">
                <OurStory />
            </main>


            <div>
                <Footer />
            </div>
        </div>
    )
}