import { TextList } from "../PrivacyPolicyPage/PrivacyPolicy";


export default function TandC() {
    return (
        <section className="min-h-screen mt-24">
            <div className="">
                <div className="text-center flex flex-col gap-4 lg:gap-12 md:gap-8 items-center">
                    <h1 className="text-[28px] tracking-tight md:text-[44px] lg:text-[64px]">Terms & Conditions</h1>
                    <p className="text-white lg:text-[18px] w-[343px] text-sm lg:opacity-100 leading-relaxed md:w-full lg:w-[45rem]">Please review our terms carefully. By using Grail Logic, you agree to these terms, which outline how our trading mirroring platform works and your responsibilities as a user.</p>
                    <p className="text-[#C3C3C3] lg:opacity-80 text-sm italic">Last updated: May 3, 2025</p>
                </div>

                <div className="bg-[#0D0D0D] w-full mt-16 lg:flex lg:flex-col lg:mt-[4rem] backdrop-blur-md">
                    <div className="bg-[#0D0D0D] lg:w-1/2 p-4 flex flex-col gap-12 py-12 lg:mx-auto">
                        <TextList 
                            label='Acceptance of Terms'
                            info={
                                <div>
                                    <p className="text-[#C3C3C3] text-sm lg:text-[19px] lg:leading-[200%]">
                                       By accessing or using Grail Logic, you agree to be bound by these Terms & Conditions and our Privacy Policy.
                                    </p>
                                </div>
                            }
                        />

                        <TextList 
                            label='Eligibility'
                            info={
                                <div>
                                    <p className="text-[#C3C3C3] text-sm lg:w-3/4 lg:text-[19px] lg:leading-[200%]">
                                       To use Grail Logic, you must be at least 18 years old and legally permitted to enter into contracts in your jurisdiction. By registering, you confirm that all provided information is accurate and current.
                                    </p>
                                </div>
                            }
                        />

                        <TextList 
                            label='Account Registration and Security'
                            info={
                                <div className="text-[#C3C3C3] text-sm flex flex-col gap-4 lg:text-[19px]">
                                        You are required to register for an account in order to access certain features of the platform. You agree to:                                       
                                         <ul className="list-disc pl-6 lg:pl-8 flex flex-col gap-4">
                                            <li>Keep your login credentials secure and confidential.</li>
                                            <li>Notify us immediately of any unauthorized use or breach.</li>
                                            <li>Be solely responsible for activity under your account.</li>
                                        </ul>
                                    </div>
                            }
                        />

                        <TextList 
                            label='Service Description'
                            info={
                                <div className="text-[#C3C3C3] text-sm flex flex-col gap-4 lg:w-3/4 lg:text-[19px]">
                                        Grail Logic provides a trade mirroring service that syncs trades from a master strategy account to your personal forex trading account via secure API connections. This service:                                     
                                         <ul className="list-disc pl-6 lg:pl-8 flex flex-col gap-4">
                                            <li>Does not hold or manage your funds.</li>
                                            <li>Requires you to link your own trading account (e.g., via broker API).</li>
                                            <li>Is automated and based on proprietary trading logic developed by our team.</li>
                                        </ul>
                                    </div>
                            }
                        />

                        <TextList 
                            label='Risk Disclosure'
                            info={
                                <div className="text-[#C3C3C3] text-sm flex flex-col gap-4 lg:text-[19px] lg:leading-[200%]">
                                        Trading foreign exchange (forex) involves substantial risk and is not suitable for every investor. By using Grail Logic:                                     
                                         <ul className="list-disc pl-6 lg:pl-8 flex flex-col gap-4">
                                            <li>You acknowledge that profits are not guaranteed.</li>
                                            <li>You accept that market conditions may result in loss of capital.</li>
                                            <li className="lg:w-3/4 lg:leading-[200%]">You release Grail Logic from liability for financial losses caused by market fluctuations, connection failures, or trade execution delays.</li>
                                        </ul>
                                    </div>
                            }
                        />

                        <TextList 
                            label='No Financial or Investment Advice'
                            info={
                                <div className="text-[#C3C3C3] text-sm lg:w-3/4 lg:text-[19px] lg:leading-[200%]">
                                        All content, strategy, and services offered by Grail Logic are provided for informational and automation purposes only. Nothing on the platform should be considered investment or trading advice.     
                                </div>
                            }
                        />

                        <TextList 
                            label='Fees and Payments'
                            info={
                                <div className="text-[#C3C3C3] text-sm flex flex-col gap-4 lg:text-[19px] lg:leading-[200%]">
                                        Some features and services may require payment. You agree to:                                     
                                         <ul className="list-disc pl-6 lg:pl-8">
                                            <li>Pay applicable fees according to your selected plan.</li>
                                            <li>Authorize recurring charges (where applicable).</li>
                                            <li>Understand that fees are non-refundable unless stated otherwise.</li>
                                         </ul>
                                        Pricing may change with prior notice, and failure to pay may result in suspension of service.
                                </div>
                            }
                        />

                        <TextList 
                            label='Account Connection & User Responsibility'
                            info={
                                <div className="text-[#C3C3C3] text-sm flex flex-col gap-4 lg:text-[19px] lg:leading-[200%]">
                                        You are solely responsible for:                                     
                                         <ul className="list-disc pl-6 flex flex-col gap-4 lg:pl-8">
                                            <li>Connecting your trading account securely and accurately.</li>
                                            <li>Ensuring your broker supports API or integration access.</li>
                                            <li>Monitoring the mirrored trades on your end.</li>
                                         </ul>
                                        Grail Logic only executes mirrored trades and does not interfere with your trading account balance or withdrawal rights.
                                </div>
                            }
                        />

                        <TextList 
                            label='Platform Availabilty and Downtime'
                            info={
                                <div className="text-[#C3C3C3] text-sm flex flex-col gap-4 lg:text-[19px] leading-[200%]">
                                        While we strive for 24/7 uptime, we do not guarantee uninterrupted service. <br/> 
                                        Grail Logic may be temporarily unavailable for:                                     
                                         <ul className="list-disc pl-6 lg:pl-8">
                                            <li>Scheduled maintenance</li>
                                            <li>Security updates</li>
                                            <li>Unexpected system outages</li>
                                         </ul>
                                        We are not liable for missed trades or losses during these periods.
                                </div>
                            }
                        />

                        <TextList 
                            label='Limitation of Liability'
                            info={
                                <div className="text-[#C3C3C3] text-sm flex flex-col gap-4 lg:text-[19px] lg:leading-[200%]">
                                        To the fullest extent allowed by law:                                     
                                         <ul className="list-disc pl-6 lg:pl-8">
                                            <li>Grail Logic is not liable for indirect, incidental, or consequential damages.</li>
                                            <li>Our maximum liability is limited to the total fees paid by you in the last 3 months.</li>
                                         </ul>
                                </div>
                            }
                        />

                        <TextList 
                            label='Privacy & Data Use'
                            info={
                                <div className="text-[#C3C3C3] text-sm lg:w-3/4 lg:text-[19px] lg:leading-[200%]">
                                        We take data privacy seriously. By using Grail Logic, you consent to our collection and use of information as described in our [Privacy Policy].  Your credentials and API keys are stored securely and encrypted.
                                </div>
                            }
                        />

                        <TextList 
                            label='Changes to These Terms'
                            info={
                                <div className="text-[#C3C3C3] text-sm lg:w-3/4 lg:text-[19px] lg:leading-[200%]">
                                        We may update these Terms from time to time. Material changes will be notified via email or platform notice. Continued use of the platform after changes constitutes acceptance of the new terms.                                     
                                </div>
                            }
                        />

                        <TextList 
                            label='Governing Law'
                            info={
                                <div className="text-[#C3C3C3] text-sm lg:w-3/4 lg:text-[19px] lg:leading-[200%]">
                                        These Terms and Conditions are governed by the laws of the Federal Republic of Nigeria. Any disputes or claims will be subject to the exclusive jurisdiction of Nigerian courts. Users agree to comply with all applicable legal requirements and to resolve any legal disagreements through amicable discussions, where possible.                                     
                                </div>
                            }
                        />

                        <TextList 
                            label='Contact Information'
                            info={
                                <div className="text-[#C3C3C3] text-sm lg:text-[19px] lg:leading-[200%] lg:w-[32rem]">
                                        For questions about these terms or other inquiries, contact us at:  📧 support@graillogic.com                                     
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
  
    );

};
