import React from 'react'

export default function LineDecor() {
  return (
    <>
        <div className='h-1 bg-gray-200 my-10'>
            <div className='container h-1 relative ltr-dir [&>*]:border-gray-400 [&>*]:border [&>*]:rounded-full [&>*]:absolute [&>*]:bottom-0 [&>*]:top-0 [&>*]:my-auto [&>*]:bg-[#eee]'>
                <div className='w-7 h-7 left-0 bg-[#eee]'></div>
                <div className='w-7 h-7 left-1/4 bg-[#eee]'></div>
                <div className='w-7 h-7 left-2/4 bg-[#eee]'></div>
                <div className='w-7 h-7 left-3/4 bg-[#eee]'></div>
            </div>
        </div>
    </>
  )
}
