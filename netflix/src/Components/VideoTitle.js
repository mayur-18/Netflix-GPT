import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video  text-white   pt-[15%] px-12 absolute bg-gradient-to-r from-black '>

        <h1 className='font-bold text-3xl p-4'>{title}</h1>
        <p className='p-4  w-3/12 '>{overview}</p>

        <div className='p-4'>
            <button className='bg-white text-black p-3 bg-gray-500 px-8 text-2xl text-bold'>
            ▶  Play
            </button>
            <button className='text-white mx-2 p-3 bg-gray-500 px-6 text-xl'>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle