import {React, useState, useEffect} from 'react'

export default function Syllabus() {

    const [progress, setProgress] = useState({
        html: 0, tags: 0, tables_1: 0, tables_2: 0
    })

    const updateProgress = () => {
        setProgress((prevProgress) => ({
          ...prevProgress,
          html: 80 ,
          tags: 60 ,
          tables_1: 24 ,
          tables_2: 96 ,
        }));
      };

    useEffect(() => {
        updateProgress();
    }, []);




    return (
        <div className=' border-[1px] border-borderCol rounded-[10px] flex-col p-[30px] min-w-[386px] min-h-[429px]'>

            <p className='text-mainSecHeaderCol text-base font-bold tracking-[-0.32px] mb-4'>Syllabus wise Analysis</p>


            <div className='flex flex-1 flex-col gap-8'>


                <div className='flex flex-col gap-2'>
                    <p className=' text-mainSectonText text-base font-normal tracking-[-0.32px] '>
                        HTML Tools, Forms, History
                    </p>

                    <div className='flex gap-2 items-center justify-between'>
                        <div className="h-[10px] bg-[#E5EDFF] rounded-[50px] min-w-[200px]">
                            <div className=' h-[10px] bg-[#438AF6] rounded-[50px] transition-all duration-1000 ease-linear' style={{ width: `${progress.html}%`}} ></div>
                      
                        </div>

                        <p className='text-base font-bold tracking-[-0.32px] text-[#438AF6]'>
                            80%
                        </p>
                    </div>

                </div>

                <div className='flex flex-col gap-2'>
                    <p className=' text-mainSectonText text-base font-normal tracking-[-0.32px] '>
                        Tags & References in HTML
                    </p>

                    <div className='flex gap-2 items-center justify-between'>
                        <div className="h-[10px] bg-[#FFF2E1] rounded-[50px] min-w-[200px]">
                            <div className=' h-[10px] bg-[#FF9142] rounded-[50px] transition-all duration-1000 ease-linear' style={{ width: `${progress.tags}%`}}></div>
                        </div>

                        <p className='text-base font-bold tracking-[-0.32px] text-[#FF9142]'>
                            60%
                        </p>
                    </div>

                </div>

                <div className='flex flex-col gap-2'>
                    <p className=' text-mainSectonText text-base font-normal tracking-[-0.32px] '>
                        Tables & CSS Basics
                    </p>

                    <div className='flex gap-2 items-center justify-between'>
                        <div className="h-[10px] bg-[#FFE5E5] rounded-[50px] min-w-[200px]">
                            <div className=' h-[10px] bg-[#FB5E5E] rounded-[50px] transition-all duration-1000 ease-linear' style={{ width: `${progress.tables_1}%`}}></div>
                        </div>

                        <p className='text-base font-bold tracking-[-0.32px] text-[#FB5E5E]'>
                            24%
                        </p>
                    </div>

                </div>

                <div className='flex flex-col gap-2'>
                    <p className=' text-mainSectonText text-base font-normal tracking-[-0.32px] '>
                        Tables & CSS Basics
                    </p>

                    <div className='flex gap-2 items-center justify-between'>
                        <div className="h-[10px] bg-[#D0F6E1] rounded-[50px] min-w-[200px]">
                            <div className=' h-[10px] bg-[#2EC971] rounded-[50px] transition-all duration-1000 ease-linear' style={{ width: `${progress.tables_2}%`}}></div>
                        </div>

                        <p className='text-base font-bold tracking-[-0.32px] text-[#2EC971]'>
                            96%
                        </p>
                    </div>

                </div>
            </div>


        </div>
    )
}
