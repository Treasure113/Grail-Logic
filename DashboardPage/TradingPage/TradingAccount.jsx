import { useEffect, useState } from "react";
import { Button } from "../../HomePage/Header";
import { Connected } from "./Trading";
import { ConnectAccountModal } from "../../HomePage/HeroSection";

const traderInfo = [
    {
        id: 1,
        label: 'Username',
        value: 'fxtrader_1990',
    },
    {
        id: 2, 
        label: 'Broker',
        value: 'Exness'
    },
    {
        id: 3,
        label: 'Connection date',
        value: 'May 12, 2025'
    }
];

const accountSyncData = (status) => [
  
  {
    id: 1,
    label: "Last Sync",
    info:
      status === "connected"
        ? "3 minutes ago"
        : "Not available",
  },

  {
    id: 2,
    label: "Mirrored Trades",
    info:
      status === "connected"
        ? "24"
        : "0",
  },

  {
    id: 3,
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

const YourAccountSync = ({ status }) => {
  const accountData = accountSyncData(status);

  return (
    <div className="flex flex-col gap-6 bg-gradient-to-r from-[#100E24] to-[#161233] p-[24px] lg:p-0 lg:px-6 rounded-[8px] border border-[#1D1B3D] w-[348px] h-[210px]">
      <h1 className="mt-2 text-[20px]">Your Account Sync</h1>

      {accountData.map((item) => (
        <div
          key={item.id}
          className="text-white text-sm  border-b border-[#1D1B3D] flex justify-between"
        >
          <p className="text-sm mb-1">
            {item.label}
          </p>

          <div>
            {item.info}
          </div>
        </div>
    ))}
    </div>
)}


export default function TradingAccount() {
    
        
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
  const [disconnect, setDisconnect] = useState('');
  const [change, setChange] = useState(false);
   const [modal, setModal] = useState(false);
  const [userName, setUserName] = useState("");

  return (
        <section className="mt-6 lg:max-w-[1140px]">
            <h1 className="text-white text-[24px] font-bold border-b p-5 lg:-mt-8 border-[#171717] bg-[#0D0B1D]">
                    Trading Account
            </h1>
         <div>
            
            <div className="flex justify-between p-6">
                <div className="flex flex-col gap-1">
                    <div>
                        <h1 className="text-[20px]">Manage Trading Account</h1>
                    </div>
                    <div>
                        <p className="text-white/50 text-sm w-[462.21px]">Connect your trading account to start receiving mirrored trades from our core strategy.</p>
                    </div>
                </div>

                <div className="flex gap-6">
                   <button className='h-3/4 py-0 px-4 bg-[#3B3C9A] text-white rounded-[12px] transition duration-200 hover:bg-[#4B4CB8]'
                    onClick={() => setDisconnect(!disconnect)}
                   >
                    {disconnect ? 'Re-sync account' : 'Disconnect'}
                   </button>
                    
                   <button className="h-3/4 px-4 text-[#3B3C9A] bg-[#EBECF5] rounded-[12px] transition duration-300 ease-in-out hover:scale-95"
                    onClick={() => setModal(true)}
                   >
                        Change account
                   </button>

                   <ConnectAccountModal
                        modal={modal}
                        setModal={setModal}
                        userName={userName}
                        setUserName={setUserName}
                    />
                </div>
            </div>

            <div className="p-6 flex gap-4 w-full ">    
                <div className="bg-gradient-to-r from-[#100E24] to-[#161233] flex-1 flex flex-col gap-12 p-[24px] lg:px-6 rounded-[8px] border border-[#1D1B3D]">
                    <div className="flex gap-2 items-center">
                        <Connected />
                        <h1>
                        Connected
                        </h1>
                    </div>

                    <div>

                    <div className="flex justify-between">
                        {traderInfo.map((trader) => (
                            
                                <div
                                    key={trader.id}
                                    className="flex flex-col gap-2 py-4 border-[#1D1B3D]"
                                >
                                    <p className="text-white/60 text-sm">{trader.label}</p>
                                    <p className="text-white text-[24px] font-bold">{trader.value}</p>
                                
                            </div>
                        ))}
                    </div>  
                    </div>
                </div>

                <div className="">
                        <YourAccountSync 
                          status={status}
                        />
                </div>
            </div>    
          </div>
        </section>
    )
}