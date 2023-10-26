import React from 'react';
import awardsIcon from '../../assets/award.png';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className=' border-r-[1px] border-borderCol pt-10 pr-8 h-[100%]'>

            <div className='flex flex-col gap-2'>

                <div className=' flex gap-[10px] items-center hover:bg-sideBarHoverCol pr-[60px] pb-[20px] py-2 pl-10 hover:rounded-r-[100px]  hover:text-sideBarTextHoverCol text-sideBarText cursor-pointer' >


                    <img src={awardsIcon} alt="Profile" className=' w-[16px] h-[16px]' />
                    <p className=' text-base font-medium tracking-tight'>
                        DashBoard
                    </p>

                </div>

                <div className=' flex gap-[10px] items-center hover:bg-sideBarHoverCol pr-[60px] pb-[20px] py-2 pl-10 hover:rounded-r-[100px]  hover:text-sideBarTextHoverCol text-sideBarText cursor-pointer' >


                    <img src={awardsIcon} alt="Profile" className=' w-[16px] h-[16px]' />
                    <p className=' text-base font-medium tracking-tight'>
                        <Link to="/skillstest">Skills Test</Link>
                    </p>

                </div>

                <div className=' flex gap-[10px] items-center hover:bg-sideBarHoverCol pr-[60px] pb-[20px] py-2 pl-10 hover:rounded-r-[100px]  hover:text-sideBarTextHoverCol text-sideBarText cursor-pointer' >


                    <img src={awardsIcon} alt="Profile" className=' w-[16px] h-[16px]' />
                    <p className=' text-base font-medium tracking-tight'>
                        Internships
                    </p>

                </div>

            </div>

        </div>
    )
}
