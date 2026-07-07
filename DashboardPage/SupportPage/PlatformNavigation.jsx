import { SupportCards } from "./GettingStarted";


export default function PlatformNavigation() {
    return (
        <div className="flex flex-col gap-6 mt-12 max-w-[770px]">
                                <SupportCards 
                                  text='How do I read my Profit/Loss metrics?'
                                  dropDownText='On your Dashboard, the KPI cards show your net profit, total trades mirrored, and performance percentage.'
                                />
        
                                <SupportCards 
                                  text='Where can I see recent trading activity?'
                                  dropDownText='Go to the Trading Page. You’ll find live trade updates, sync status, and a history of all mirrored trades.'
                                />
        
                                <SupportCards 
                                  text='How do I check if my account is synced?'
                                  dropDownText='On the Dashboard, your connection status is visible at the top. Green = Synced, Red = Not Connected.'
                                />
        
                                <SupportCards 
                                  text='What notifications should I pay attention to?'
                                  dropDownText='Look out for margin calls, sync failures, and major trade alerts. These appear in the top-right notification panel.'
                                />
                            </div>
    ) 
}