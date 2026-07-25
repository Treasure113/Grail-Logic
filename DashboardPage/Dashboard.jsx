import { useEffect, useState } from "react";
import SidebarLayout from "./Sidebar";
import TradingLineChart from "./Chart";
import { Search } from "lucide-react";
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

const Connected = () => {
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

const SyncIssueIcon = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5001 14.6946L11.6681 2.82974C11.4973 2.53906 11.2536 2.29803 10.961 2.13057C10.6685 1.9631 10.3372 1.875 10.0001 1.875C9.66299 1.875 9.33174 1.9631 9.03916 2.13057C8.74659 2.29803 8.50286 2.53906 8.33214 2.82974L1.50011 14.6946C1.33584 14.9757 1.24927 15.2955 1.24927 15.6211C1.24927 15.9468 1.33584 16.2665 1.50011 16.5477C1.66865 16.8401 1.91196 17.0825 2.20508 17.2498C2.49819 17.4172 2.83056 17.5036 3.16807 17.5001H16.8321C17.1694 17.5033 17.5014 17.4168 17.7942 17.2494C18.0871 17.0821 18.3301 16.8399 18.4985 16.5477C18.663 16.2667 18.7499 15.947 18.7502 15.6214C18.7504 15.2957 18.6641 14.9759 18.5001 14.6946ZM9.37511 8.12505C9.37511 7.95929 9.44095 7.80032 9.55816 7.68311C9.67537 7.5659 9.83435 7.50005 10.0001 7.50005C10.1659 7.50005 10.3248 7.5659 10.442 7.68311C10.5593 7.80032 10.6251 7.95929 10.6251 8.12505V11.2501C10.6251 11.4158 10.5593 11.5748 10.442 11.692C10.3248 11.8092 10.1659 11.8751 10.0001 11.8751C9.83435 11.8751 9.67537 11.8092 9.55816 11.692C9.44095 11.5748 9.37511 11.4158 9.37511 11.2501V8.12505ZM10.0001 15.0001C9.81469 15.0001 9.63343 14.9451 9.47926 14.8421C9.32509 14.739 9.20493 14.5926 9.13397 14.4213C9.06301 14.25 9.04445 14.0615 9.08062 13.8797C9.11679 13.6978 9.20608 13.5308 9.33719 13.3996C9.4683 13.2685 9.63535 13.1792 9.81721 13.1431C9.99907 13.1069 10.1876 13.1255 10.3589 13.1964C10.5302 13.2674 10.6766 13.3875 10.7796 13.5417C10.8826 13.6959 10.9376 13.8771 10.9376 14.0626C10.9376 14.3112 10.8388 14.5496 10.663 14.7255C10.4872 14.9013 10.2487 15.0001 10.0001 15.0001Z" fill="#F79009"/>
        </svg>

    );
};

const NotificationIcon = () => {
    return (
        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.7236 18.9925C23.0298 17.7975 21.9986 14.4163 21.9986 10C21.9986 7.34784 20.945 4.8043 19.0696 2.92893C17.1943 1.05357 14.6507 0 11.9986 0C9.34639 0 6.80285 1.05357 4.92748 2.92893C3.05212 4.8043 1.99855 7.34784 1.99855 10C1.99855 14.4175 0.966051 17.7975 0.272301 18.9925C0.0951393 19.2963 0.00121912 19.6415 1.17887e-05 19.9931C-0.00119554 20.3448 0.0903529 20.6906 0.265425 20.9956C0.440496 21.3006 0.692901 21.5541 0.997183 21.7304C1.30147 21.9068 1.64687 21.9997 1.99855 22H7.0998C7.33052 23.1289 7.94408 24.1436 8.83672 24.8722C9.72936 25.6009 10.8463 25.9989 11.9986 25.9989C13.1508 25.9989 14.2677 25.6009 15.1604 24.8722C16.053 24.1436 16.6666 23.1289 16.8973 22H21.9986C22.3501 21.9995 22.6954 21.9064 22.9995 21.73C23.3036 21.5535 23.5558 21.3001 23.7307 20.9951C23.9057 20.6901 23.9971 20.3444 23.9958 19.9928C23.9946 19.6412 23.9007 19.2962 23.7236 18.9925ZM11.9986 24C11.3783 23.9998 10.7734 23.8074 10.2671 23.4492C9.76069 23.0911 9.37779 22.5848 9.17105 22H14.8261C14.6193 22.5848 14.2364 23.0911 13.7301 23.4492C13.2237 23.8074 12.6188 23.9998 11.9986 24Z" fill="white"/>
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

export function TradeTable({children}) {
    return (
        <table className="trade-table">
  <thead>
    <tr className="">
      <th>Date</th>
      <th>Pair</th>
      <th>Action</th>
      <th>Lot Size</th>
      <th>Profit/Loss</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr className="text-white/80">
      <td>29 May, 2025</td>
      <td>EUR/USD</td>
      <td>Buy</td>
      <td>0.5</td>
      <td class="text-[#29A645]">+$340.25</td>
      <td>
        <div className="flex ">
            <button className="flex items-center gap-2 px-2  text-[12px] bg-[#29A645] rounded-[16px]"><Dot /> Success</button>
        </div>
      </td>
    </tr>
    <tr className="text-white/80">
      <td>28 May, 2025</td>
      <td>GBP/JPY</td>
      <td>Sell</td>
      <td>0.3</td>
      <td class="text-[#F04438]">-$120.00</td>
      <td>
        <div className="flex">
            <button className="flex items-center gap-2 px-2 text-[12px] bg-[#F79009] rounded-[16px]"><Dot /> Pending</button>
        </div>
      </td>
    </tr>
    <tr className="text-white/80">
      <td>28 May, 2025</td>
      <td>USD/CAD</td>
      <td>Buy</td>
      <td>0.7</td>
      <td class="text-[#29A645]">+$210.00</td>
      <td>
        <div className="flex">
            <button className="flex items-center gap-2 px-2 text-[12px] bg-[#F04438] rounded-[16px]"><Dot /> Error</button>
        </div>
      </td>
    </tr>

    {children}
  </tbody>
</table>
    );
};

export function TableSearchBar() {
    return (
        <div className="relative rounded-[4px]">
      <Search
        size={18}
        className="absolute left-7 top-1/2 -translate-y-1/2 text-white/40"
      />

      <input
        placeholder="Search trades"
        className="
          w-full
          pl-13
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

export const Filter = () => {
    return (
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.0625 6.5625L2.0625 14.0625" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.3125 8.0625L13.3125 14.0625" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.3125 0.5625L13.3125 3.5625" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.6875 0.5625L7.6875 8.0625" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.0625 0.5625L2.0625 2.0625" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.6875 12.5625L7.6875 14.0625" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M0.5625 5.4375C0.5625 5.08804 0.5625 4.91332 0.61959 4.77549C0.695711 4.59172 0.841716 4.44571 1.02549 4.36959C1.16332 4.3125 1.33804 4.3125 1.6875 4.3125H2.4375C2.78696 4.3125 2.96168 4.3125 3.09951 4.36959C3.28328 4.44571 3.42929 4.59172 3.50541 4.77549C3.5625 4.91332 3.5625 5.08804 3.5625 5.4375C3.5625 5.78696 3.5625 5.96168 3.50541 6.09951C3.42929 6.28328 3.28328 6.42929 3.09951 6.50541C2.96168 6.5625 2.78696 6.5625 2.4375 6.5625H1.6875C1.33804 6.5625 1.16332 6.5625 1.02549 6.50541C0.841716 6.42929 0.695711 6.28328 0.61959 6.09951C0.5625 5.96168 0.5625 5.78696 0.5625 5.4375Z" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.8125 6.9375C11.8125 6.58804 11.8125 6.41332 11.8696 6.27549C11.9457 6.09172 12.0917 5.94571 12.2755 5.86959C12.4133 5.8125 12.588 5.8125 12.9375 5.8125H13.6875C14.037 5.8125 14.2117 5.8125 14.3495 5.86959C14.5333 5.94571 14.6793 6.09172 14.7554 6.27549C14.8125 6.41332 14.8125 6.58804 14.8125 6.9375C14.8125 7.28696 14.8125 7.46168 14.7554 7.59951C14.6793 7.78328 14.5333 7.92929 14.3495 8.00541C14.2117 8.0625 14.037 8.0625 13.6875 8.0625H12.9375C12.588 8.0625 12.4133 8.0625 12.2755 8.00541C12.0917 7.92929 11.9457 7.78328 11.8696 7.59951C11.8125 7.46168 11.8125 7.28696 11.8125 6.9375Z" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.1875 9.1875C6.1875 8.83804 6.1875 8.66332 6.24459 8.52549C6.32071 8.34172 6.46672 8.19571 6.65049 8.11959C6.78832 8.0625 6.96304 8.0625 7.3125 8.0625H8.0625C8.41196 8.0625 8.58668 8.0625 8.72451 8.11959C8.90828 8.19571 9.05429 8.34172 9.13041 8.52549C9.1875 8.66332 9.1875 8.83804 9.1875 9.1875C9.1875 9.53696 9.1875 9.71168 9.13041 9.84951C9.05429 10.0333 8.90828 10.1793 8.72451 10.2554C8.58668 10.3125 8.41196 10.3125 8.0625 10.3125H7.3125C6.96304 10.3125 6.78832 10.3125 6.65049 10.2554C6.46672 10.1793 6.32071 10.0333 6.24459 9.84951C6.1875 9.71168 6.1875 9.53696 6.1875 9.1875Z" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
};

export const Export = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.33 6.67499C15.03 6.90749 16.1325 8.29499 16.1325 11.3325V11.43C16.1325 14.7825 14.79 16.125 11.4375 16.125H6.55498C3.20249 16.125 1.85999 14.7825 1.85999 11.43V11.3325C1.85999 8.31749 2.94749 6.92999 5.60248 6.68249" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 11.25V2.71503" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.5125 4.3875L9.00005 1.875L6.48755 4.3875" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
};

const AccountSync = ({status, setStatus, connected, setConnected}) => {
  const [syncing, setIsSynced] = useState(false);
//   const [status, setStatus] = useState("connected");
//    const [connected, setConnected] = useState(true);
  const [lastSync, setLastSync] = useState('3 minutes ago');

  const handleSync = async () => {
    setIsSynced(true);

    await new Promise((resolve) => setTimeout (resolve, 2000))

  const random = Math.random();

  if (random < 0.3) {
    setStatus("error");
    setLastSync(null);
  } else if (random < 0.6) {
    setStatus("disconnected");
    setLastSync(null);
  } else {
    setStatus("connected");
    setLastSync("Just now");
  }

  setIsSynced(false);

    // setConnected(true);
    // setLastSync("Just now");
    // setIsSynced(false);
  };

  const handleDisconnect = () => {
    setConnected(false);
    setLastSync(null);
  };

    return (
        <div className="lg:max-w-[720px] flex flex-col gap-6 bg-gradient-to-r from-[#100E24] to-[#161233] p-[24px] rounded-[8px] border border-[#1D1B3D]">
            <div>
                <h1>Account Sync</h1>
            </div>

            <div className="flex gap-5 flex-col lg:flex-row lg:justify-between">
                <div className="flex items-center gap-2">
                    {status === "connected" ? (
                    <Connected />
                    ) : status === "error" ? (
                    <SyncIssueIcon />
                    ) : (
                    <Disconnected />
                    )} 
                    <p className={`text-white text-sm`}> 
                         {syncing
                        ? "Syncing..."
                        : status === "connected"
                        ? "Connected"
                        : status === "error"
                        ? "Sync Issues"
                        : "Disconnected"}
                        {connected && lastSync && (
                            <span className="text-[#868686]">
                            {" "}
                            ({lastSync})
                            </span>
                            )}
                            </p>
                </div>
                <button className={`text-white shadow-lg blur-2 py-2 px-3 rounded-[8px] transition duration-300
                    ${status === "connected" 
                    ? "bg-[#7C7CBB]"
                    : "bg-[#3B3C9A]"}
                                    ` 
                                    }
                    onClick={handleSync}
                    disabled={syncing}
                >
                    {syncing
                        ? "Syncing..."
                        : connected
                        ? "Re-sync"
                        : "Re-sync"}
                </button>
            </div>

            <div className="text-[#C5C5C5] text-sm">
                {status === "connected" && (
                    <p>
                    Your forex account is currently linked and receiving
                    live trade signals from Grail Logic’s strategy engine.
                    </p>
                )}

                {status === "disconnected" && (
                    <>                    
                    <p>
                    Your account is currently not synced.
                    Please reconnect to continue receiving trades.
                    </p>
                    <div className="py-[9px]"></div>
                     </>

                )}

                {status === "error" && (
                    <p>
                    We encountered issues syncing your account.
                    Some trade signals and performance data may be delayed.
                    </p>
                )}
            </div>
        </div>
    )
}


const AlertsAndUpdates = ({text, value, connected, status, className}) => {
    
        if (status === "connected" || status === "disconnected") {
    return (
      <div className={`text-white/70 py-2 -mt-5 text-sm ${className}`}>
            <p>{text}</p>
            {value}
      </div>
    );
  }

  
  if (status === "error") {
    return (
      <div>
        <NotifiationIcon />

        <p className="text-yellow-400 font-semibold">
          No new alerts
        </p>

        <p>
          You’re all caught up. We’ll notify you here when there’s trading activity, account updates, or important tips.
        </p>
      </div>
    );        
}
}

const CloseSidebar = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25 4.5V19.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.25 4.5H3.75C3.33579 4.5 3 4.83579 3 5.25V18.75C3 19.1642 3.33579 19.5 3.75 19.5H20.25C20.6642 19.5 21 19.1642 21 18.75V5.25C21 4.83579 20.6642 4.5 20.25 4.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 7.5H5.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 10.5H5.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 13.5H5.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
};


export default function Dashboard() {
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
  const [connected, setConnected] = useState(true);
  

return (
    <main className="flex-1 min-h-screen lg:max-w-[1140px] overflow-auto p-6 flex flex-col gap-10 bg-[#0D0B1D]">
     
                {/* Put your pages here */}
                <h1 className="text-white text-[24px] font-bold border-b p-5 lg:-mt-8 border-[#171717] bg-[#0D0B1D]">
                    Dashboard
                </h1>
    
                <div className="flex flex-col gap-6 lg:flex-row">
                    <Data 
                        label='Total Profit/Loss'
                        data='$9,482.25'
                        text = {
                            <div className="flex items-center gap-2">
                                <ArrowUp />
                                <p className="">
                                    <span className="text-[#29A645]"> 8.2% </span>from last 30 days
                                </p>
                            </div>
                        }
                    />
    
                    <Data 
                        label='Trade Accuracy'
                        data='65%'
                        text = {
                            <div className="flex items-center gap-2">
                                <p className="">
                                    Improved by<span className="text-[#29A645]"> 3.5% </span>since last month
                                </p>
                            </div>
                        }
                    />
    
                    <Data 
                        label='Mirrored Trades'
                        data='124'
                        text = {
                            <div className="flex items-center gap-2">
                                <ArrowUp />
                                <p className="">
                                    <span className="text-[#29A645]"> 14 trades </span>since last month
                                </p>
                            </div>
                        }
                    />
                </div>
                
                <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6 lg:-translate-y-5 overflow-hidden">
                    {/* LEFT AREA */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <AccountSync 
                                status = {status}
                                setStatus = {setStatus}
                                connect = {connected}
                                setConnected={setConnected}
                            />
                        </div>
    
                        <div className="">
                            <TradingLineChart 
                             h1= 'Trading Overview Chart'
                             className='lg:max-w-[720px] lg:mt-0.5'
                            />
                        </div>
                  </div>
    
                  
    
                        {/* RIGHT AREA  */}
                    <div className="bg-gradient-to-r from-[#100E24] to-[#161233] border border-[#1D1B3D] w-full p-[24px] lg:rounded-[8px] lg:h-[625px] flex flex-col gap-6 lg:sticky">
                            <h1 className="">Alerts & Updates</h1>
    
                            {status === "error" ? (
                                <div className="p-6 lg:translate-y-1/2 text-center flex flex-col justify-center items-center gap-6 p-12">
                                <NotificationIcon />
    
                                <p className="text-white font-semibold mt-3">
                                    No new alerts
                                </p>
    
                                <p className="text-white/60 text-sm mt-2">
                                    You're all caught up. We'll notify you here when there's trading
                                    activity, account updates, or important tips.
                                </p>
                                </div>
                            ) :
    
                            (<div className="flex flex-col gap-6 mt-2 lg:gap-12">
                                <AlertsAndUpdates 
                                text='New trade mirrored on EUR/USD.'
                                value={
                                    <span className="text-[#29A645]">+$35</span>
                                }
                                className='border-b border-[#1D1B3D]'
    
                                connected = {connected}
                                status = {status}/>
    
                                <AlertsAndUpdates 
                                text='A new trade has been mirrored to your account.'
                                value={
                                    <span>BUY EUR/USD – Lot 0.5.</span>
                                }
                                className='border-b border-[#1D1B3D]'
    
                                connected = {connected}
                                status = {status}
                                />
    
                                <AlertsAndUpdates 
                                text='A mirrored trade closed with a loss.'
                                className='border-b border-[#1D1B3D]'

                                value={
                                    <span>SELL GBP/JPY – <span className="text-[#E42B2B]">-$125.40</span></span>
                                }
    
                                connected = {connected}
                                status = {status}
                                />
    
                                <AlertsAndUpdates 
                                text='Your weekly performance summary is ready.'
                                value={
                                    <div className="flex gap-1">
                                    <p className="text-[#29A645]">+$652.10</p> <span> in the past 7 days</span>
                                    </div>
                                }
    
                                connected = {connected}
                                status = {status}
                                />
                        </div>)}
                    </div> 
                </div>
    
    
    
                <div className="bg-gradient-to-r from-[#100E24] to-[#161233] flex flex-col">
                            <div className="flex flex-col lg:flex-row lg:justify-between gap-6 border border-[#1D1B3D] rounded-tl-[8px] rounded-tr-[8px]">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 gap-4 p-6">
                                    <div>
                                        <h1 className="text-[18px]">Trade Summary</h1>
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
                                <TradeTable />
                            </div>
                        </div>
          </main>
)};