import {React} from 'react'
import graph from '../../assets/graph.png';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function Graph() {

    const dataValues = [12, 19, 3, 5, 2, 3]; // Sample data values

    const data = {
        labels: ['0%', '20%', '40%', '60%', '80%', '100%'],
        datasets: [
            {
                label: 'Percentile graph',
                data: dataValues,
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: '#C8D6E5',
                cubicInterpolationMode: 'monotone',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: false,
            },
           
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
                beginAtZero: true,
            },
        },
    };


    return (
        <div className=' border-[1px] border-borderCol rounded-[10px] flex-col p-[30px]  min-w-[717px] min-h-[107px]'>

            <div className='flex flex-1 justify-between'>

                <p className='text-mainSecHeaderCol text-base font-bold tracking-[-0.32px]'>Comparison Graph</p>

                <div className='p-[14px] rounded-full bg-sideBarHoverCol border-[1px] border-borderCol mt-[8px]'>
                    <img src={graph} alt="HTML" className='object-contain' />
                </div>

            </div>


            <div className=' text-sideBarText text-sm tracking-[-0.28px]'>
                <div>
                    <span className='font-bold leading-normal'>You scored 37% percentile</span> which is lower than the
                </div>
                <p className=' font-normal leading-normal'>
                    average percentile 72% of all the engineers who took this assessment
                </p>
            </div>

            <div className='mt-4'>

                <Line data={data} options={options} />
            </div>


        </div>
    )
}
