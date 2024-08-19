import React from 'react'
import CardVid from './CardVid'
import cardvid1 from '../images/cardvid1.mp4'
import cardvid2 from '../images/vid.mp4'
import cardvid3 from '../images/cardvid3.mp4'
import cardvid4 from '../images/cardvid4.mp4'
import cardvid5 from '../images/cardvid5.mp4'
import cardvid6 from '../images/cardvid6.mp4'
import Button from './Button'



const Usecase = () => {
  
  const cardData = [
    { id: 1, videoSrc: cardvid1, description: 'News Visualisation' },
    { id: 2, videoSrc: cardvid2, description: 'True Story' },
    { id: 3, videoSrc: cardvid3, description: 'Book Review' },
    { id: 4, videoSrc: cardvid4, description: 'Bed Time Story' },
    { id: 5, videoSrc: cardvid5, description: 'Religion' },
    { id: 6, videoSrc: cardvid6, description: 'Imaginary Story' },
  ]

  return (
    <div className='mt-16 container mx-auto pb-24'>
      <div className='text-center flex flex-col gap-2 text-[#444240]'>
        <p className='text-sm font-light'>Use Cases</p>
        <h3 className='text-3xl font-bold px-4'>
          Create <span className='text-3xl font-normal text-[#444240]'> unique</span> faceless videos for every niche
        </h3>
        <p className='text-sm font-light px-4'>
          CopyCopter is versatile and can be used for a wide range of content types. Find your niche and master it.
        </p>
      </div>
      <div className='grid md:grid-cols-6 grid-cols-3 px-6 gap-4 my-8'>
        {cardData.map((card) => (
          <CardVid key={card.id} videoSrc={card.videoSrc} description={card.description} />
        ))}
      </div>
      <div className='flex justify-center text-base font-light text-[#444240] pt-12 px-4 text-center'>
        <p>And <span className='font-bold'>many many more!</span>  Find your own niche and master it.</p>
      </div>
      <div className='flex flex-col items-center gap-3 pt-20 text-[#444240]'>
        <h1 className='font-bold text-2xl sm:text-3xl text-[#444240]'>Want to make yours?</h1>
        <p className='font-light text-sm'>Create your first AI Video</p>
        <Button className="text-white group relative max-w-[200px] items-center justify-center whitespace-nowrap text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground px-4 py-2 flex  flex-grow gap-2 rounded-full bg-blue-600 hover:bg-blue-500 sm:w-5/12 overflow-hidden">
              Start Now
            </Button>
      </div>
    </div>
  )
}

export default Usecase
