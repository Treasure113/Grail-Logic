import { useEffect } from "react";
import SidebarLayout from "../Sidebar";
import TradingLineChart from "../Chart";
import { useState } from "react";
import {Link} from 'react-router-dom';
import {
  Menu,
  ChevronLeft,
  Search,
  User,
  LogOut,
  BarChart3,
  Wallet,
  Settings,
  House,
  Info
} from "lucide-react";
import { TradeTable } from "../Dashboard";
import { TableSearchBar } from "../Dashboard";
import { Filter } from "../Dashboard";
import { Export } from "../Dashboard";
import { Logo2 } from "../../AuthPages/SignupPage";
// import { Dot } from "lucide-react";
import { Button } from "../../HomePage/Header";

// import { Correct } from "../AuthPages/ForgotPasswordFlow/Page 2";

const Data = ({label, data, text, className}) => {
    return (
        <div className={`bg-gradient-to-r from-[#100E24] to-[#161233] text-white flex flex-col border border-[#1D1B3D] gap-6 w-full lg:w-1/2 rounded-[8px] p-[24px] ${className}`}>
            <p className="text-sm">{label}</p>
            <h1 className="text-[28px]">{data}</h1>
            {text}
        </div>
    );
};

export const Connected = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="18" height="18" rx="9" fill="#29A645"/>
            <path d="M6.35999 10.308L8.58585 12.5339L13.65 7.46973" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
};

const ArrowUp = () => {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.83113 4.0288L6.00228 1.19995L3.17343 4.0288M6.00228 1.19995V10.602" stroke="#29A645" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
};

const Disconnected = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="9" fill="#EF4444"/>
            <path d="M7 13L13 7M7 7L13 13" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
};

const Dot = () => {
    return (
        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="3" fill="white"/>
        </svg>
    );
};


const accountSyncData = (status) => [
  {
    id: 1,
    label: "Status",
    info:
      status === "connected" ? (
        <span className="flex items-center gap-2">
          <Connected />
          <p>Connected</p>
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <Disconnected />
          <p>Disconnected</p>
        </span>
      ),
  },

  {
    id: 2,
    label: "Last Sync",
    info:
      status === "connected"
        ? "3 minutes ago"
        : "Not available",
  },

  {
    id: 3,
    label: "Mirrored Trades",
    info:
      status === "connected"
        ? "24"
        : "0",
  },

  {
    id: 4,
    label: "Total Profit/Loss",
    info:
      status === "connected" ? (
        <p className="text-[#29A645]">
          +$812.50
        </p>
      ) : (
        <p className="text-red-400">
          -- 
        </p>
      ),
  },
];

const YourAccountSync = ({ status, onReconnect }) => {
  const accountData = accountSyncData(status);

  return (
    <div className="flex flex-col gap-6 bg-gradient-to-r from-[#100E24] to-[#161233] p-[24px] lg:p-0 lg:px-6 rounded-[8px] border border-[#1D1B3D] h-[450px]">
      <h1 className="mt-2 text-[20px]">Your Account Sync</h1>

      {accountData.map((item) => (
        <div
          key={item.id}
          className="text-white text-sm p-4 border-b border-[#1D1B3D] flex justify-between"
        >
          <p className="text-sm mb-1">
            {item.label}
          </p>

          <div>
            {item.info}
          </div>
        </div>
      ))}

       {status === "disconnected" && (
        <div className="pb-6">

            <Button 
             onClick = {onReconnect}
             label = 'Reconnect Account'
             className="
              w-full
              bg-[#3B3C9A]
              hover:bg-[#4B4CB8]
              text-white
              py-3
              rounded-[8px]
              transition
            "
            />
        </div>
      )}
    </div>
  );
};


export default function Trading() {
    useEffect(() => {
    // 1. Save your unique background class name
    const uniqueBgClass = 'bg-[#0D0B1D]';
    
    // 2. Add the class to the HTML body when the component mounts
    document.body.classList.add(uniqueBgClass);

    // 3. Clean up function: removes the class when the user navigates away
    return () => {
      document.body.classList.remove(uniqueBgClass);
    };
  }, []);

    const [status, setStatus] = useState("connected");
        
    return (
        <section className="w-full p-6 bg-[#0D0B1D] lg:max-w-[1140px]">
            <h1 className="text-white text-[24px] font-bold border-b p-5 lg:-mt-8 border-[#171717] bg-[#0D0B1D]">
                    Trading
            </h1>
    
            <div className="bg-gradient-to-r from-[#100E24] to-[#161233] flex flex-col mt-12">
                            <div className="flex flex-col lg:flex-row lg:justify-between gap-6 border border-[#1D1B3D] rounded-tl-[8px] rounded-tr-[8px]">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 gap-4 p-6">
                                    <div>
                                        <h1 className="text-[18px]">Live Trade Feed</h1>
                                    </div>
                                    <TableSearchBar />
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
                                <TradeTable 
                                 children = {
                                    <>
                                    <tr className="text-white/80">
                                          <td>23 May, 2025</td>
                                          <td>USD/CAD</td>
                                          <td>Buy</td>
                                          <td>0.7</td>
                                          <td class="text-[#29A645]">+$210.00</td>
                                          <td>
                                            <div className="flex">
                                                <button className="flex items-center gap-2 px-2 text-[12px] bg-[#F04438] rounded-[16px]"> <Dot /> Error</button>
                                            </div>
                                          </td>
                                        </tr>
                                    
                                    <tr className="text-white/80">
                                          <td>23 May, 2025</td>
                                          <td>USD/CAD</td>
                                          <td>Buy</td>
                                          <td>0.7</td>
                                          <td class="text-[#29A645]">+$210.00</td>
                                          <td>
                                            <div className="flex">
                                                <button className="flex items-center gap-2 px-2 text-[12px] bg-[#F04438] rounded-[16px]"><Dot /> 
                                                Error</button>
                                            </div>
                                          </td>
                                        </tr>
                                    </>
                                 }
                                />
                            </div>
                        </div>


                        <div className="flex flex-col lg:flex-row gap-4 items-start">
                            <div className="w-full">
                                <TradingLineChart 
                                    h1='Performance Chart' 
                                    className='w-full h-[450px] lg:w-full'                           
                                />
                            </div>

                            <div className="w-full lg:max-w-[300px] mt-5">
                                    <YourAccountSync status={status} 
                                        onReconnect={() => setStatus('connected')}
                                    />
                            </div>
                        </div>
        </section>
    )
}