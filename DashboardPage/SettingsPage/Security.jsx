import { useState } from "react";
import { Link } from "react-router-dom";

import { InputField } from "../../ContactPage/LetsTalk";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ConnectAccountModal } from "../../HomePage/HeroSection";



const Correct = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99976 1.04199C14.9472 1.04199 18.9586 5.0526 18.9587 10C18.9587 14.9476 14.9473 18.959 9.99976 18.959C5.05235 18.9588 1.04175 14.9474 1.04175 10C1.04192 5.05271 5.05246 1.04217 9.99976 1.04199ZM13.8962 6.88574C13.557 6.57512 13.0304 6.5985 12.7195 6.9375L8.72339 11.2959L7.25562 9.82812C6.93022 9.50277 6.40331 9.50283 6.07788 9.82812C5.75244 10.1536 5.75244 10.6814 6.07788 11.0068L8.16089 13.0898C8.3216 13.2505 8.54113 13.3389 8.76831 13.334C8.99544 13.329 9.21048 13.2309 9.36401 13.0635L13.948 8.06348C14.2588 7.7242 14.2354 7.19666 13.8962 6.88574Z" fill="#19CD38"/>
        </svg>
    );
};

const Delete = () => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 6H22V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7957 2 19 2H13C12.2044 2 11.4413 2.31607 10.8787 2.87868C10.3161 3.44129 10 4.20435 10 5V6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H6V26C6 26.5304 6.21071 27.0391 6.58579 27.4142C6.96086 27.7893 7.46957 28 8 28H24C24.5304 28 25.0391 27.7893 25.4142 27.4142C25.7893 27.0391 26 26.5304 26 26V8H27C27.2652 8 27.5196 7.89464 27.7071 7.70711C27.8946 7.51957 28 7.26522 28 7C28 6.73478 27.8946 6.48043 27.7071 6.29289C27.5196 6.10536 27.2652 6 27 6ZM14 21C14 21.2652 13.8946 21.5196 13.7071 21.7071C13.5196 21.8946 13.2652 22 13 22C12.7348 22 12.4804 21.8946 12.2929 21.7071C12.1054 21.5196 12 21.2652 12 21V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12C13.2652 12 13.5196 12.1054 13.7071 12.2929C13.8946 12.4804 14 12.7348 14 13V21ZM20 21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22C18.7348 22 18.4804 21.8946 18.2929 21.7071C18.1054 21.5196 18 21.2652 18 21V13C18 12.7348 18.1054 12.4804 18.2929 12.2929C18.4804 12.1054 18.7348 12 19 12C19.2652 12 19.5196 12.1054 19.7071 12.2929C19.8946 12.4804 20 12.7348 20 13V21ZM20 6H12V5C12 4.73478 12.1054 4.48043 12.2929 4.29289C12.4804 4.10536 12.7348 4 13 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V6Z" fill="#F04438"/>
        </svg>
    );
};

export default function Security() {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [changes, setChanges] = useState(false);
    const [checked, setChecked] = useState(false);
    const [modal, setModal] = useState(false);
    const [deletedAccount, setDeletedAccount] = useState(false);
    const [userName, setUserName] = useState("")


    const handleChanges = (e) => {
    e.preventDefault();

    if (!email.trim() || !firstName.trim() || !lastName.trim()) {
        return;
    }

    setChanges(true);

    setTimeout(() => {
        setChanges(false);
    }, 3000);
};


    return (
        <div className="px-6 -mt-8">

                {changes && (
                    <div className="fixed top-6 translate-x-3/4 z-50 bg-[#E8F8ED] border border-[#19CD38] rounded-lg px-4 py-3 shadow-lg flex items-center gap-2">
                        <Correct />
                        <p className="text-[#131313] text-sm">
                            Your changes have been saved successfully.
                        </p>
                    </div>
                )}


            <div className="bg-gradient-to-r from-[#100E24] to-[#161233] border border-[#1D1B3D] rounded-[8px] max-w-[650px] p-6 flex flex-col gap-12">
                <div className="flex flex-col gap-6">
                    <h1 className="text-[20px]">Security</h1>
                    <p className="text-white/50 text-sm">Manage your password and account settings to keep your data secure.</p>
                </div>
                
                <div className="border-b py-6 border-[#1D1B3D]">
                    <h1>Change Password</h1>
                </div>

                {/* Input Fields */}
                <div className="flex flex-col gap-6">
                    <div>
                        <InputField 
                            placeholder='Enter your current password'
                            text='Current Password'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="">
                            <InputField 
                                placeholder='Create a new password'
                                text='New Password'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                    </div>

                    <div className="">
                            <InputField 
                            placeholder='Re-enter new password'
                            text='Confirm New Password'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            />
                    </div>
                </div>


                    {/* Buttons And CheckBox */}

                    <button className="text-white bg-[#7C7CBB] w-fit px-8 py-3 rounded-[12px] hover:opacity-70"
                        onClick={handleChanges}
                    >
                        Update password
                    </button>


                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <h1 className="">Delete Account</h1>
                            <p className="text-white/50 text-sm">Deleting your account is permanent. You will lose all your data.</p>
                        </div>


                        <div className="flex flex-col gap-6">
                            <div className='flex items-center'>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                checked={checked}
                                                onChange={(e) => setChecked(e.target.checked)}
                                                sx={{
                                                    color: 'white', // unchecked color
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
                                                <p className='text-[14px] text-white tracking-wider translate-y-1'>I understand that deleting my account cannot be undone.</p>
                                            }
                                        />
                            </div>


                            <button className={`text-white w-fit px-8 py-3 rounded-[12px] hover:opacity-70 transition duration-300 
                                    ${checked ? 'bg-[#F04438]': 'bg-[#EEA2A9]'}
                                    `}
                                onClick={() => setModal(true)}  
                            >
                                Delete my account
                            </button>


                            {modal && (
                                <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md bg-[#0D0B1DE5]">
                                    <div className="relative flex flex-col gap-4 w-[500px] bg-gradient-to-r from-[#100E24] to-[#18143B] border border-[#3B3C9A] rounded-[8px] p-8">
                                        <Delete />

                                        <div className="flex flex-col gap-6">
                                            <div className="flex flex-col gap-2">
                                                <h1 className="text-[24px]">Delete Account</h1>
                                                <p className="text-white/70 text-sm">Are you sure you want to delete your account? This action is irreversible.</p>
                                            </div>

                                            {/* Buttons */}
                                            <div className="flex gap-4">
                                                <button className={`text-[#3B3C9A] text-sm w-1/2 px-8 py-3 rounded-[12px] bg-white hover:opacity-70 transition duration-300`}  
                                                 onClick={() => setModal(false)}
                                                >
                                                    Cancel
                                                </button>

                                                <button className={`text-white text-sm w-1/2 bg-[#F04438] px-8 py-3 rounded-[12px] hover:opacity-70 transition duration-300`}  
                                                 onClick={() => setDeletedAccount(true)}
                                                >
                                                    Delete my account
                                                </button>
                                            </div>



                                            {deletedAccount && (
                                                <>
                                                <ConnectAccountModal 
                                                    modal={deletedAccount}
                                                    setModal={setDeletedAccount}
                                                    userName={userName}
                                                    setUserName={setUserName}
                                                    isClosed={false}
                                                />
                                               <div className="fixed top-6 left-80 lg:translate-x-7/6 z-[10000] bg-[#E8F8ED] border border-[#19CD38] rounded-lg px-4 py-3 shadow-lg flex items-center gap-2">
                                                <Correct />
                                                <p className="text-[#131313] text-sm">
                                                    Your account has been deleted successfully.
                                                </p>
                                            </div>
                                            </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>



                
        </div>
    );
};