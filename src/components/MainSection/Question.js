import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
import Accuracy from '../../assets/success.png'

export default function Question({score}) {

    Chart.register(ArcElement);
    console.log("the value of score is", score);
    const data = {
        labels: ['Unscored', 'Scored',],
        datasets: [
            {
                data: [15, score],
                backgroundColor: ['#438AF6', '#E5EDFF'],
                borderWidth: 1,

            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false, // Hide the labels on top of the graph
            },
        },
    };


    return (
        <div className=' border-[1px] border-borderCol rounded-[10px] flex-col p-[30px] min-w-[386px] min-h-[107px]'
        >

            <div className='flex justify-between'>
                <p className='text-mainSecHeaderCol text-base font-bold tracking-[-0.32px] '>Question Analysis</p>

                <p className='text-base font-bold tracking-[-0.32px] text-[#438AF6]'>{score} / 15</p>
            </div>


            <div className=' text-sideBarText text-sm tracking-[-0.28px] mt-4'>
                <div>
                    <span className='font-bold leading-normal'>You scored 7 question correct out of 15.</span> However it
                </div>
                <p className=' font-normal leading-normal'>
                    still needs some improvements
                </p>
            </div>

            <div className='mt-4 flex flex-1 items-center justify-center relative'>

                <img src={Accuracy} alt="HTML" className='object-contain absolute' height={40} width={40}/>

                <Doughnut
                    data={data}
                    options={options}
                    height={100}
                    width={100}
                />

            </div>


        </div>
    )
}
