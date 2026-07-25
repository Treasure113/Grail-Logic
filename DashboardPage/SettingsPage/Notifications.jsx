import { useState } from "react";

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const TextAndCheckBox = ({label, text}) => {
    const [checked, setChecked] = useState(false);

    const [emailChecked, setEmailChecked] = useState(false);
    const [appChecked, setAppChecked] = useState(false);

    const CheckBox = ({text, checked, setChecked}) => {
        return (
           <div className="flex flex-col gap-6">
                    <div className='flex items-center'>
                            <FormControlLabel
                            control={
                            <Checkbox
                            checked={checked}
                            onChange={(e) => setChecked(e.target.checked)}
                                sx={{
                                    color: '#fff', // unchecked color
                                    '&.Mui-checked': {
                                    color: '#3B3C9A', // checked color
                                    },
                
                                    '& .MuiSvgIcon-root': {
                                    borderRadius: '6px',
                                    },
                                }}
                                />
                                }
                                className=''
                                label={
                                    <p className='text-[14px] text-white tracking-wider translate-y-1'>{text}</p>
                                }
                                />
                    </div>

                    </div> 
        )
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="text-[#E5E5E5]">{label}</p>

                    <div className="flex ">
                        <CheckBox 
                         text='Email'
                         checked={emailChecked}
                         setChecked={setEmailChecked}
                        />

                        <CheckBox 
                        text='In-App'
                        checked={appChecked}
                         setChecked={setAppChecked}
                        />
                    </div>
                
            </div>
        </div>
    );
};


export default function Notifications() {
    const [changes, setChanges] = useState(false);
    return (
        <div className="px-6 -mt-8">

        <div className="bg-gradient-to-r from-[#100E24] to-[#161233] border border-[#1D1B3D] rounded-[8px] max-w-[650px] p-6 flex flex-col gap-12">
           <div className="flex flex-col gap-6">
                    <h1 className="text-[20px]">Notification Preferences</h1>
                    <p className="text-white/50 text-sm">Control the types of alerts you receive.</p>
            </div> 



            <div className="border-b py-4 border-[#1D1B3D]">
               <p className="text-white font-semibold">Notifications Type</p> 
            </div>



            <div className="flex flex-col gap-6">
                <TextAndCheckBox 
                 label='Trade Alerts'
                 text='Email'
                />

                <TextAndCheckBox 
                 label='Connection Warnings'
                />

                <TextAndCheckBox 
                 label='Profit Milestones'
                />

                <TextAndCheckBox 
                 label='Educational Tips'
                />
            </div>

             <button className="text-white bg-[#3B3C9A] w-fit px-8 py-3 rounded-[12px] mt-[15rem] hover:opacity-70"
                    >
                        Save changes
             </button>
        </div>
        </div>
    );
};