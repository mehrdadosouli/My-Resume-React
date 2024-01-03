import React from 'react'
import img from '../../../photos/image-1.jpg'
export default function DigitalDesign() {
  return (
    <div className='container md:flex md:flex-row flex flex-col my-5'>
        <div className='md:w-1/2 w-full h-96 bg-center mb-10 bg-[url("../../../photos/image-1.jpg")] bg-cover shadow-right'>
        </div>
        <div className='text-left md:w-1/2 w-full flex flex-col justify-center gap-10'>
            <h3 className='font-black text-5xl'>Digital Design</h3>
            <p className='text-3xl'>Praesent vitae lacinia lacus, rutrum pellentesque dolor. Suspendisse posuere congue odio congue condimentum. In hac habitasse platea dictumst. Fusce feugiat dolor et lorem porta malesuada. Nulla suscipit, erat vel.</p>
            <div className='ltr-dir flex justify-between items-center mx-10 text-3xl font-black'>
                    <div className='cicrle_self60 flex justify-center items-center'>60%</div>
                    <div className='cicrle_self90 flex justify-center items-center'>90%</div>
                    <div className='cicrle_self60 flex justify-center items-center'>60%</div>
            </div>
        </div>
    </div>
  )
}
