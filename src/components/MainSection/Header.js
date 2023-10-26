import React from 'react';
import HTMLLogo from '../../assets/html_logo.png'

export default function Header({setIsModalOpen}) {
    return (
        <div className=' border-[1px] border-borderCol rounded-[10px] flex p-[30px] items-center justify-between min-w-[717px] min-h-[107px]'>

            <div className='flex flex-row gap-4'>

                <img src={HTMLLogo} alt="HTML" className='object-contain'/>

                <div className='flex flex-col gap-3'>
                    <p className=' text-base font-bold tracking-tight text-[#222F3E]'>
                        HyperText Markup Language
                    </p>

                    <p className='text-mainSectonText font-normal tracking-[-0.24px] text-xs'>
                    Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                    </p>
                </div>

            </div>

            <div>
                <button className='rounded-md p-2 bg-buttonCol text-white text-sm font-bold tracking-[-0.28px] w-[120px] h-[44px] text-center' onClick={() => {setIsModalOpen(true)}}>Update</button>
            </div>

        </div>
    )
}
