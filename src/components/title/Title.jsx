import React from 'react'
import ArrowBtn from '../arrowBtn/ArrowBtn'
export default function Title({title,btn}) {
  return (
    <div className='container flex flex-row-reverse items-center my-32'>
      <div className='ltr-dir'>
          <div className='w-[25rem] h-[8rem] bg-black text-white text-6xl font-MorabbaBold flex justify-center items-center'>
              <h2 className=''>{title}</h2>
          </div>
      </div>
      {
        btn=='true' && <ArrowBtn />
      }
    </div>
  )
}
