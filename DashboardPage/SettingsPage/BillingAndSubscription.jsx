import { PricingCard } from "../../PricingPage/HeroSection";
import { PricingCard2 } from "../../PricingPage/HeroSection";
import { List } from "../../PricingPage/HeroSection";
import { ToggleButton } from "../../PricingPage/HeroSection";
import { TradeTable } from "../Dashboard";
import { TableSearchBar } from "../Dashboard";
import { Filter } from "../Dashboard";
import { Export } from "../Dashboard";
import { Search } from "lucide-react";

const Dot = () => {
    return (
        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="3" fill="white"/>
        </svg>
    );
};

const BillingTable = () => {

    return (
    <table className="trade-table">
    <thead>
        <tr className="">
        <th>Plan Name</th>
        <th>Amount</th>
        <th>Purchase Date</th>
        <th>End Date</th>
        <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr className="text-white/80">
        <td>Pro Plan - Jun 2024</td>
        <td>$49</td>
        <td>25 May, 2024</td>
        <td>25 June, 2024</td>
        
        <td>
            <div className="flex ">
                <button className="flex items-center gap-2 px-2  text-[12px] bg-[#29A645] rounded-[16px]"><Dot /> Success</button>
            </div>
        </td>
        </tr>
        <tr className="text-white/80">
        <td>Pro Plan - May 2024</td>
        <td>$49</td>
        <td>25 May, 2024</td>
        <td>25 June, 2024</td>
        
        <td>
            <div className="flex">
                <button className="flex items-center gap-2 px-2 text-[12px] bg-[#29A645] rounded-[16px]"><Dot /> Success</button>
            </div>
        </td>
        </tr>
        <tr className="text-white/80">
        <td>Pro Plan - April 2024</td>
        <td>$49</td>
        <td>25 May, 2024</td>
        <td>25 June, 2024</td>
        
        <td>
            <div className="flex">
                <button className="flex items-center gap-2 px-2 text-[12px] bg-[#F79009] rounded-[16px]"><Dot /> Pending</button>
            </div>
        </td>
        </tr>
    </tbody>
    </table>
)};

function SearchBar() {
    return (
        <div className="relative rounded-[4px]">
      <Search
        size={18}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-white/40"
      />

      <input
        placeholder="Search by name, amount, or date..."
        className="
          w-[400px]
          pl-7
          pr-[12px]
          py-[13px]
          rounded-[4px]
          text-sm
          text-white
          placeholder:text-[#BEBEBE]
          border border-[#4E4B79]
          focus:outline-none
          focus:border-[#1E6FB9]
          transition
        "
      />
    </div>
    )
}




export default function BillingAndSubscription() {
    return (
        <div className="px-6 -mt-8">
        <div className="bg-gradient-to-r from-[#100E24] to-[#161233] w-full lg:max-w-[1140px] border border-[#1D1B3D] rounded-[8px] p-6 flex flex-col gap-12">
            <div className="flex justify-between">
                <div className="flex flex-col gap-6">
                        <h1 className="text-[20px]">Billing & Subscription</h1>
                        <p className="text-white/50 text-sm">Manage subscription plans and payments</p>
                </div> 

                <div>
                    <ToggleButton />
                </div>
            </div>


            <div className="flex gap-12">
                
                <PricingCard 
                                type='Starter'
                                description='Perfect for beginners.'
                                price ='Free'
                                subcontentlabel='What you will get'
                                list = {
                                    <div className="flex flex-col gap-4">
                                    <List 
                                        text='Trade mirroring access'
                                    />
                                    <List 
                                        text='Up to $500 account balance'
                                    />
                                    <List 
                                        text='Basic Support'
                                    />
                                    <List 
                                        text='24-Hour Customer Service'
                                    />
                                    <List 
                                        text='Access to Monthly Newsletter'
                                    />
                            </div>
                                                }
                                            />

                            <PricingCard2 />

                            <PricingCard 
                                type='Elite'
                                description='High-volume traders'
                                price ={
                                    <div>
                                        <h1 className="text-[36px]">$99 <span className="text-sm font-[Inter] font-normal text-[#FFFFFFCC]">/ per month</span></h1>
                                    </div>
                                }
                                subcontentlabel='Everything in Pro Trader'
                                list={
                                   <div className="flex flex-col gap-4">
                                                <List 
                                                    text='Unlimited Trade Mirroring'
                                                />
                                                <List 
                                                    text='Dedicated Account Manager'
                                                />
                                                <List 
                                                    text='Weekly Performance Reports'
                                                />
                                                <List 
                                                    text='Early Access to New Features'
                                                />
                                                <List 
                                                    text='Private Discord Group for Top Traders'
                                                />
                                        </div>
                                }
                            />
            </div>




            <div>    
                           <div className="bg-gradient-to-r from-[#100E24] to-[#161233] flex flex-col mt-6">
                                           <div className="flex flex-col lg:flex-row lg:justify-between gap-6 border border-[#1D1B3D] rounded-tl-[8px] rounded-tr-[8px]">
                                               <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 gap-4 p-6">
                                                   <div>
                                                       <h1 className="text-[18px]">Billing History</h1>
                                                   </div>
                                                   <SearchBar />
                                               </div>
                   
                                               <div className="flex w-fit gap-4 lg:flex-row lg:p-10 px-6 mb-10 lg:mb-0">
                                                   <button className="text-white bg-[#1D1B3D] rounded-[4px] flex gap-2 items-center px-3 py-2">
                                                       <Filter />
                                                       Filter
                                                   </button>
                   
                                                   <button className="text-white bg-[#1D1B3D] rounded-[4px] flex gap-2 items-center px-3 py-2">
                                                       <Export />
                                                       Export List
                                                   </button>
                                               </div>
                                           </div>
                   
                                           <div className="-mt-8">
                                               <BillingTable />
                                           </div>
                                       </div>
               
               
            </div>
        </div>
        </div>
    );
};