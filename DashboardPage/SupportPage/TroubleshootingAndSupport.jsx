import { SupportCards } from "./GettingStarted";


export default function TroubleshootingAndSupport() {
    return (
        <div className="flex flex-col gap-6 mt-12 max-w-[770px]">
                                <SupportCards 
                                  text=' How do I reset my password?'
                                  dropDownText='On the login page, click “Forgot Password” and follow the instructions to reset it via your registered email.'
                                />
        
                                <SupportCards 
                                  text=' Can I update my trading account username?'
                                  dropDownText='Yes. Go to Settings > Trading Account and update your username. Ensure it matches your broker’s credentials.'
                                />
        
                                <SupportCards 
                                  text='How is my personal data protected?'
                                  dropDownText=' We follow strict data privacy policies and industry-grade encryption to protect your information at all times.'
                                />
        
                                <SupportCards 
                                  text='What happens if I lose access to my email?'
                                  dropDownText='Contact support with proof of identity and account ownership to request an email update or account recovery.'
                                />
                            </div>
    ) 
}