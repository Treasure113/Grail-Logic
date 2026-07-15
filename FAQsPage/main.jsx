import Header from "../HomePage/Header"
import FAQs from "../HomePage/FAQs-Section";
import Footer from "../HomePage/Footer";

import StillNeedHelp from "./StillNeedHelp";

export default function FAQsPage() {
    return (
        <div className="bg-[#FFFFFF] main-container flex-1 min-h-screen">
            
            <div className="max-w-full bg-[#FFFFFF]">
                <div className="lg:py-6">
                    <Header />
                </div>

                <main className=''>
                    <FAQs showCard={false}/>
                </main>
            </div>

            <main className="bg-[#0D0D0D] min-h-screen">
                <StillNeedHelp />
            </main>

            <div>
                <Footer />
            </div>
        </div>
    );
};