import { SupportCards } from "./GettingStarted";


export default function TradingAndSync() {
    return (
        <div className="flex flex-col gap-6 mt-12 max-w-[770px]">
                                <SupportCards 
                                  text='How does trade mirroring work?'
                                  dropDownText='When a trade is executed on our master account, it is automatically copied (mirrored) to your connected trading account in real-time.'
                                />
        
                                <SupportCards 
                                  text='How often are trades synced to my account?'
                                  dropDownText=' Trades are synced automatically within seconds of execution, depending on broker response and connection speed.'
                                />
        
                                <SupportCards 
                                  text=' What is the master account and how does it affect mine?'
                                  dropDownText='The master account is where our strategy bot trades. Your connected account mirrors these trades proportionally.'
                                />
        
                                <SupportCards 
                                  text=' Can I disconnect my trading account?'
                                  dropDownText='Yes. Go to Settings > Trading Account and click Disconnect. Note that this will pause trade mirroring.'
                                />
                            </div>
    ) 
}