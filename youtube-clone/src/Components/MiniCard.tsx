import React from 'react'

function MiniCard() {
  return (
    <div className='flex gap-3'>
        <div className="relative">
            <span className='absolute bottom-1 right-1 bg-[#0c0c0cd0] px-2 py-0.5 rounded'>duration</span>
            <div className="bg-red-200 w-40 aspect-[16/9] rounded"></div>
        </div>
        <div className="">
            <h1 className='text-md'>video title</h1>
            <div className="text-sm text-gray-400">
                <h2>channel name</h2>
                <div className="flex gap-1 items-center">
                    <h2>views</h2>
                    <span className='w-[4px] h-[4px] bg-gray-400'></span>
                    <h2>age</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MiniCard