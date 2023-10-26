import { React, useState } from 'react';
import Header from './Header';
import Graph from './Graph';
import Question from './Question';
import Statistics from './Statistics';
import Syllabus from './Syllabus';
import HTMLLogo from '../../assets/html_logo.png'
import { Modal, Box } from "@mui/material";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: "12px",
    bgcolor: 'white',
    outline: 0,
    margin: "20px 0px 20px 0px"
};

export default function MainSection() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rank, setRank] = useState(12890);
    const [percentile, setPercentile] = useState(37);
    const [score, setScore] = useState(7);

    const [temp, setTemp] = useState({
        rank: 12890, percentile: 37, score: 7,
    })

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    function onChangeDetails(e){
        e.preventDefault();
        setTemp({ ...temp, [e.target.name]: e.target.value })
    }

    function onSaveClick() {
        setRank(temp.rank);
        setPercentile(temp.percentile);
        setScore(temp.score);
    }



    return (
        <div className='flex flex-row'>

            <>
                <Modal open={isModalOpen} onClose={handleCancel} aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description" >

                    <Box sx={{ ...style, width: { xs: "100vw", sm: "50%" } }}>

                        <div className=" p-10">

                            <div className='flex pb-8 justify-between items-center border-b-[2px] border-borderCol'>

                                <p className='text-[#222F3E] font-bold text-4xl tracking-[-0.72px]'>Update Scores</p>

                                <img src={HTMLLogo} alt="HTML" className='object-contain' />

                            </div>

                            <div className='py-8 flex flex-1 flex-col gap-8 border-b-[2px] border-borderCol '>

                                <div className='flex items-center justify-between'>
                                    <div className='flex gap-3'>
                                        <div className='bg-buttonCol rounded-full h-[25px] w-[25px] '>
                                            <p className='text-white text-center'>1</p>
                                        </div>

                                        <p className=' text-lg text-sideBarText font-normal'>Update your <span className=' font-bold'>rank</span></p>
                                    </div>
                                    <input type='number' value={temp.rank} name="rank" onChange={onChangeDetails} className='text-base text-buttonCol font-bold tracking-[-0.32px] p-2 min-w-[150px] border-[1px] border-buttonCol rounded-md outline-none Input text-center' />
                                </div>

                                <div className='flex items-center justify-between'>
                                    <div className='flex gap-3'>
                                        <div className='bg-buttonCol rounded-full h-[25px] w-[25px] '>
                                            <p className='text-white text-center'>1</p>
                                        </div>

                                        <p className=' text-lg text-sideBarText font-normal'>Update your <span className=' font-bold'>percentile</span></p>
                                    </div>

                                    <input type='number' value={temp.percentile} name="percentile" onChange={onChangeDetails} className='text-base text-buttonCol font-bold tracking-[-0.32px] p-2 min-w-[150px] border-[1px] border-buttonCol rounded-md outline-none Input text-center' />
                                </div>

                                <div className='flex items-center justify-between'>

                                    <div className='flex gap-3'>
                                        <div className='bg-buttonCol rounded-full h-[25px] w-[25px] '>
                                            <p className='text-white text-center'>1</p>
                                        </div>

                                        <p className=' text-lg text-sideBarText font-normal'>Update your <span className=' font-bold'>current score &#40;out of 15&#41;</span></p>

                                    </div>
                                    <input type='number' value={temp.score} name="score" onChange={onChangeDetails} className='text-base text-buttonCol font-bold tracking-[-0.32px] p-2 min-w-[150px] border-[1px] border-buttonCol rounded-md outline-none Input text-center' />
                                </div>

                            </div>

                            <div className='pt-8 flex justify-end gap-4 w-full'>


                                <button className='rounded-md border-[1px] border-buttonCol p-2 text-buttonCol text-sm font-bold tracking-[-0.28px] w-[100px] h-[44px] text-center' onClick={() => { setIsModalOpen(false) }}>Cancel</button>


                                <button className='rounded-md p-2 bg-buttonCol text-white text-sm font-bold tracking-[-0.28px] w-[100px] h-[44px] text-center'
                                    onClick={() => { onSaveClick(); setIsModalOpen(false) }}>Save &nbsp; &#8594;</button>


                            </div>
                        </div>
                    </Box>
                </Modal>
            </>

            <div className=' flex flex-col p-8 gap-8'>
                <p className=' font-normal text-xs text-mainSectonText'>Skill Test</p>
                <Header setIsModalOpen={setIsModalOpen} />
                <Statistics rank={rank} percentile={percentile} score={score} />
                <Graph />

            </div>

            <div className=' flex flex-col p-8 gap-8 mt-12'>
                <Syllabus />
                <Question score={score} />

            </div>


        </div>
    )
}
