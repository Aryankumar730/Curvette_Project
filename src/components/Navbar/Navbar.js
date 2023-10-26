import React from 'react';
import logo from '../../assets/logo.png';
import profileImg from '../../assets/profile_image.png'

export default function Navbar() {
    return (
        <div className=' px-10 py-7 flex items-center justify-between border-b-[1px] border-borderCol '>

            <div className='cursor-pointer'>
                <img src={logo} alt="Logo" className='w-[120px] h-[30px]' />
            </div>


            <div className=' p-2 mr-[17px] flex items-center gap-[10px] border-[1px] rounded-[10px] border-borderCol cursor-pointer'>

                <img src={profileImg} alt="Profile" className=' w-[26px] h-[26px]' />

                <p className=' font-bold text-base'>
                    Siddhant Jain
                </p>

            </div>

        </div>
    )
}
