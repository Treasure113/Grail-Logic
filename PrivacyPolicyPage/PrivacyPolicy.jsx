export function TextList({label, info}) {
    return (
        <div className="flex flex-col gap-4 items-start lg:gap-8">
            <h1 className="text-[18px] lg:text-[28px]">{label}</h1>
            {info}
        </div>
    );
};

export default function PrivacyPolicy() {
    return (
        <section className="min-h-screen mt-24">
            <div className="">
                <div className="text-center flex flex-col gap-4 lg:gap-12 md:gap-8 items-center">
                    <h1 className="text-[28px] tracking-tight md:text-[44px] lg:text-[64px]">Privacy Policy</h1>
                    <p className="text-white lg:text-[18px] w-[343px] text-sm lg:opacity-100 leading-relaxed md:w-full lg:w-[38rem]">This policy explains how we collect and use your information while protecting your privacy and keeping you in control.</p>
                    <p className="text-[#C3C3C3] lg:opacity-80 text-sm italic">Last updated: May 3, 2025</p>
                </div>

                <div className="bg-[#0D0D0D] w-full mt-16 lg:flex lg:flex-col lg:mt-[4rem] backdrop-blur-md">
                    <div className="bg-[#0D0D0D] lg:w-1/2 p-4 flex flex-col gap-12 py-12 lg:mx-auto">
                        <TextList 
                            label='Information We Collect'
                            info= {
                                <div className="flex flex-col gap-4">
                                    <div className="text-[#C3C3C3] text-sm lg:text-[19px] lg:leading-[200%]">
                                    a. Personal Information <br />
                                        When you sign up or interact with our platform, we may collect:
                                        <ul className="list-disc pl-8">
                                            <li>Full name</li>
                                            <li>Email address</li>
                                            <li>Phone number (if applicable)</li>
                                            <li>Forex account username or broker ID</li>
                                            <li>Billing details (for paid tiers)</li>
                                        </ul>
                                    </div>

                                    <div className="text-[#C3C3C3] text-sm lg:text-[19px] lg:leading-[200%]">
                                    b. Technical Data <br />
                                        We collect device and usage information such as:
                                        <ul className="list-disc pl-8">
                                            <li>IP address</li>
                                            <li>Browser type and version</li>
                                            <li>Device Identifiers</li>
                                            <li>Pages visited, links clicked, and session duration</li>
                                        </ul>
                                    </div>

                                    <p className="text-[#C3C3C3] text-sm lg:w-3/4 lg:text-[19px] lg:leading-[200%]">
                                    c. Account Integration Data <br />
                                        When connecting your forex account, we may request secure credentials (e.g., API keys, usernames) to enable trade mirroring. These are encrypted and stored securely.
                                    </p>
                                </div>
                            }
                        />

                        <TextList 
                            label='How We Use Your Information'
                            info= {
                                <div>
                                    <div className="text-[#C3C3C3] text-sm flex flex-col gap-4 lg:text-[19px] lg:leading-[200%]">
                                        <p className="text-[#C3C3C3] text-sm lg:text-[19px]">We use your data to:</p>
                                        <ul className="list-disc pl-8">
                                            <li>Provide our core service of automated trade mirroring</li>
                                            <li>Maintain and improve platform performance</li>
                                            <li>Send essential updates, trade reports, or alerts</li>
                                            <li>Offer relevant promotions or feature updates (optional)</li>
                                        </ul>
                                        <p className="text-[#C3C3C3] text-sm lg:text-[19px]">We never sell your data</p>
                                    </div>
                                </div>
                            }
                        />

                        <TextList 
                            label='How We Share Your Information'
                            info= {
                                <div>
                                    <div className="text-[#C3C3C3] text-sm flex flex-col gap-4 lg:text-[19px] lg:leading-[200%]">
                                        <p className="text-[#C3C3C3] text-sm lg:text-[19px]">We may share your data only when necessary:</p>
                                        <ul className="list-disc pl-8">
                                            <li>With trusted service providers (e.g., hosting, analytics, payment processors)</li>
                                            <li>To comply with legal obligations</li>
                                            <li>In case of a business transfer (e.g., acquisition)</li>
                                        </ul>
                                        <p className="text-[#C3C3C3] text-sm lg:w-3/4 lg:text-[19px]">Your trading activity and credentials are never shared with other users or third parties outside of these requirements.</p>
                                    </div>
                                </div>
                            }
                        />

                        <TextList 
                            label='Cookies & Tracking Technologies'
                            info= {
                                <div>
                                    <div className="text-[#C3C3C3] text-sm flex flex-col gap-4 lg:text-[19px] lg:leading-[200%]">
                                        <p className="text-[#C3C3C3] text-sm lg:text-[19px]">Grail Logic uses cookies to:</p>
                                        <ul className="list-disc pl-8">
                                            <li>Keep you logged in</li>
                                            <li>Remember preferences</li>
                                            <li>Analyze how you use the site</li>
                                        </ul>
                                        <p className="text-[#C3C3C3] text-sm lg:text-[19px]">You may disable cookies in your browser, but some features may not work properly.</p>
                                    </div>
                                </div>
                            }
                        />

                        <TextList 
                            label='Data Security'
                            info= {
                                <div>
                                    <div className="text-[#C3C3C3] text-sm flex flex-col gap-4 lg:text-[19px] lg:leading-[200%]">
                                        <p className="text-[#C3C3C3] text-sm lg:text-[19px]">We implement strict measures to protect your information:</p>
                                        <ul className="list-disc pl-8">
                                            <li>Industry-grade encryption for sensitive data</li>
                                            <li>Firewalls and access controls</li>
                                            <li>Secure infrastructure monitored regularly</li>
                                        </ul>
                                        <p className="text-[#C3C3C3] text-sm lg:text-[19px]">Despite our efforts, no platform can guarantee 100% security.</p>
                                    </div>
                                </div>
                            }
                        />

                        <TextList 
                            label='Your Rights'
                            info= {
                                <div>
                                    <div className="text-[#C3C3C3] text-sm flex flex-col gap-4 lg:text-[19px] lg:leading-[200%]">
                                        <p className="text-[#C3C3C3] text-sm lg:text-[19px]">Depending on your location, you may:</p>
                                        <ul className="list-disc pl-8">
                                            <li>Access or correct your personal information</li>
                                            <li>Request deletion of your data</li>
                                            <li>Opt out of marketing communications</li>
                                            <li>Withdraw consent at any time</li>
                                        </ul>
                                    </div>
                                </div>
                            }
                        />

                        <TextList 
                            label='Updates to this Policy'
                            info= {
                                <div>
                                    <div className="text-[#C3C3C3] text-sm">
                                        <p className="text-[#C3C3C3] text-sm lg:w-3/4 lg:text-[19px] lg:leading-[200%]">We may update this Privacy Policy as needed. When we do, we’ll notify users via email or dashboard alert. Continued use of our services constitutes your acceptance of any changes.</p>
                                    </div>
                                </div>
                            }
                        />

                        <TextList 
                            label='Contact Us'
                            info= {
                                <div>
                                    <div className="text-[#C3C3C3] text-sm lg:w-[32rem]">
                                        <p className="text-[#C3C3C3] text-sm lg:text-[19px] lg:leading-[200%]">For questions or concerns about this policy, reach out: 📧 privacy@graillogic.com</p>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};