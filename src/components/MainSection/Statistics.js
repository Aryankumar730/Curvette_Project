import React from 'react';
import rankIcon from '../../assets/rank.png';
import tick from '../../assets/tick.png';
import percentileIcon from '../../assets/percentile.png';

export default function Statistics({ rank, percentile, score }) {
    return (
        <div className=' border-[1px] border-borderCol rounded-[10px] flex-col p-[30px]  min-w-[717px] min-h-[107px]'>

            <p className='text-mainSecHeaderCol text-base font-bold tracking-[-0.32px] '>Quick Statistics</p>


            <div className='flex flex-1 flex-row gap-4 mt-4 justify-between'>


                <div className='flex flex-row gap-4'>
                    <div className='p-[14px] rounded-full bg-sideBarHoverCol border-[1px] border-borderCol'>
                        <img src={rankIcon} alt="HTML" className='object-contain' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className=' text-base font-bold tracking-tight text-[#222F3E]'>
                            {Number(rank).toLocaleString("en-IN", {
                                style: "decimal",
                            })}
                        </p>

                        <p className='text-mainSecHeaderSubCol font-normal tracking-[-0.24px] text-xs'>
                            YOUR RANK
                        </p>
                    </div>
                </div>

                {/* vertical line */}
                <div className='w-[1px] min-h-[50px] bg-borderCol'>
                </div>



                <div className='flex flex-row gap-4'>

                    <div className='p-[14px] rounded-full bg-sideBarHoverCol border-[1px] border-borderCol'>
                        <img src={percentileIcon} alt="HTML" className='object-contain' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className=' text-base font-bold tracking-tight text-[#222F3E]'>
                            {percentile}
                        </p>

                        <p className='text-mainSecHeaderSubCol font-normal tracking-[-0.24px] text-xs'>
                            PERCENTILE
                        </p>
                    </div>
                </div>

                {/* vertical line */}
                <div className='w-[1px] min-h-[50px] bg-borderCol'>
                </div>

                <div className='flex flex-row gap-4'>

                    <div className='p-[14px] rounded-full bg-sideBarHoverCol border-[1px] border-borderCol'>
                        <img src={tick} alt="HTML" className='object-contain' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className=' text-base font-bold tracking-tight text-[#222F3E]'>
                            {score}/ 15
                        </p>

                        <p className='text-mainSecHeaderSubCol font-normal tracking-[-0.24px] text-xs'>
                            CORRECT ANSWERS
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}
