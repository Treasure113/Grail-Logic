import { useState } from "react";

import { InputField } from "../../ContactPage/LetsTalk";

const CameraIcon = () => {
    return (
       <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.16408 3.80941H3.37426C2.76468 3.80941 2.45966 3.80941 2.22684 3.92804C2.02203 4.0324 1.85564 4.19878 1.75129 4.40359C1.63266 4.63642 1.63266 4.94143 1.63266 5.55101V8.59863C1.63266 9.20821 1.63266 9.51258 1.75129 9.74541C1.85564 9.95021 2.02203 10.1172 2.22684 10.2215C2.45944 10.34 2.76409 10.34 3.37248 10.34H9.68876C10.2972 10.34 10.6014 10.34 10.834 10.2215C11.0388 10.1172 11.2057 9.95021 11.3101 9.74541C11.4286 9.51281 11.4286 9.2086 11.4286 8.60021V5.54923C11.4286 4.94084 11.4286 4.63619 11.3101 4.40359C11.2057 4.19878 11.0388 4.0324 10.834 3.92804C10.6011 3.80941 10.2968 3.80941 9.68719 3.80941H7.89705M5.16408 3.80941H5.19771M5.16408 3.80941C5.17089 3.80941 5.17807 3.80941 5.18562 3.80941L5.19771 3.80941M5.16408 3.80941C5.10632 3.80939 5.07396 3.80909 5.04837 3.80622C4.7286 3.77042 4.50928 3.46605 4.57643 3.15136C4.58268 3.12208 4.59503 3.08503 4.61949 3.01165L4.62054 3.00855C4.64848 2.92475 4.66244 2.88284 4.67787 2.84587C4.83585 2.46731 5.1936 2.20986 5.60269 2.1797C5.64264 2.17676 5.68654 2.17676 5.77488 2.17676H7.28631C7.37465 2.17676 7.41891 2.17676 7.45887 2.1797C7.86796 2.20986 8.22532 2.46731 8.3833 2.84587C8.39873 2.88284 8.41276 2.9247 8.4407 3.0085C8.46585 3.08396 8.47843 3.12171 8.48477 3.15142C8.55193 3.4661 8.33296 3.77042 8.01319 3.80622C7.98759 3.80909 7.95491 3.80939 7.89705 3.80941M5.19771 3.80941H7.86339M7.86339 3.80941H7.89705M7.86339 3.80941L7.87548 3.80941C7.88304 3.80941 7.89022 3.80941 7.89705 3.80941M6.53062 8.70737C5.62893 8.70737 4.89797 7.97641 4.89797 7.07472C4.89797 6.17303 5.62893 5.44206 6.53062 5.44206C7.43231 5.44206 8.16327 6.17303 8.16327 7.07472C8.16327 7.97641 7.43231 8.70737 6.53062 8.70737Z" stroke="#34403B" stroke-width="1.08844" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> 
    );
};

const Correct = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99976 1.04199C14.9472 1.04199 18.9586 5.0526 18.9587 10C18.9587 14.9476 14.9473 18.959 9.99976 18.959C5.05235 18.9588 1.04175 14.9474 1.04175 10C1.04192 5.05271 5.05246 1.04217 9.99976 1.04199ZM13.8962 6.88574C13.557 6.57512 13.0304 6.5985 12.7195 6.9375L8.72339 11.2959L7.25562 9.82812C6.93022 9.50277 6.40331 9.50283 6.07788 9.82812C5.75244 10.1536 5.75244 10.6814 6.07788 11.0068L8.16089 13.0898C8.3216 13.2505 8.54113 13.3389 8.76831 13.334C8.99544 13.329 9.21048 13.2309 9.36401 13.0635L13.948 8.06348C14.2588 7.7242 14.2354 7.19666 13.8962 6.88574Z" fill="#19CD38"/>
        </svg>
    );
};

export default function Profile() {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const [changes, setChanges] = useState(false);

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
                    <h1 className="text-[20px]">Profile</h1>
                    <p className="text-white/50 text-sm">Manage your account and personal information</p>
                </div>

                    {/* Profile Circle */}

                <div className="relative rounded-full w-fit bg-[#8AB1EA] pt-[26px] pr-[20px] pb-[26px] pl-[20px]">
                    <p className="text-white text-[24px] font-bold">SO</p>
                    {/* Camera Icon */}
                    <div className="absolute bg-white p-1 rounded-full left-14">
                        <CameraIcon />
                    </div>
                </div>


                {/* Input Fields */}
                <div className="flex flex-col gap-6">
                    <div>
                        <InputField 
                            placeholder='example@gmail.com'
                            text='Email Address'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-4 w-full">
                        <div className="w-1/2">
                            <InputField 
                                placeholder='First Name'
                                text='First Name'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>

                        <div className="w-1/2">
                            <InputField 
                            placeholder='Last Name'
                            text='Last Name'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    </div>


                    {/* Button */}

                    <button className="text-white bg-[#3B3C9A] w-fit px-8 py-3 rounded-[12px] mt-[15rem] hover:opacity-70"
                        onClick={handleChanges}
                    >
                        Save changes
                    </button>
                </div>



                
        </div>
    );
};