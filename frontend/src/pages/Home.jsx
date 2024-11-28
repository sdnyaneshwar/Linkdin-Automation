import React from 'react'
import bgImage from '../assets/bgImage.png'
import { Link } from 'react-router-dom'
const Home = () => {
    const style = {

    }
    return (
        <div className="h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className=" h-full w-full overflow-hidden bg-fixed"
                style={{ background: 'rgba(0, 0, 0, 0)' }} >

                <div className='absolute h-[10vh] w-full text-white  flex items-center justify-end'>
                    <button className='bg-blue-700 font-bold px-4 py-2 mr-7 rounded-lg'>
                        Sign Up
                    </button>
                </div>
                <div className='flex items-center h-screen justify-center  font-bold text-center '>

                    <div className='text-white'>
                        <h1 className='text-3xl my-2 '>Linkdin Automation</h1>
                        <h2 className='bg-transparent py-2 px-3 bg-slate-200 bg-opacity-40 rounded-md font-bold text-lg mx-8'>
                            <Link to={'/dashboard'} >Get Start</Link>
                        </h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home