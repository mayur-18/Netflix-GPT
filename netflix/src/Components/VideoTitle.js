import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video  text-white   pt-[10%] px-12 absolute bg-gradient-to-r from-black '>

        <h1 className='font-bold text-3xl p-4'>{title}</h1>
        <p className='p-4  w-3/12 '>{overview}</p>

        <div className='p-4'>
            <button className='bg-white text-black p-4 px-8  text-xl rounded-lg  hover:bg-opacity-80'>
            ▶  Play
            </button>
            <button className='bg-grey-1000 m-2 text-white p-4 px-8  text-xl rounded-lg  hover:bg-opacity-80'>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle