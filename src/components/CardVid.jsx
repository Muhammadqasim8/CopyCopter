import React from 'react'

const CardVid = ({ videoSrc, description }) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className="max-w-[190px] max-h-[334px]">
        <video
          className="border-[1px] border-[#5B21B6] hover:scale-105 z-10 rounded-lg object-cover"
          autoPlay
          muted
          loop
          src={videoSrc}
        ></video>
      </div>
      <p className='text-sm font-light text-[#444240]'>{description}</p>
      
    </div>
  )
}

export default CardVid
