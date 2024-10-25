import React from 'react'

function Card() {
  return (
    <div className='flex flex-col gap-3 pb-3'>
      {/*Tumbnail*/}
      <div className="relative">
        <div className="aspect-[16/9] rounded-xl bg-red-300 "></div>
        <span className='absolute bottom-3 right-3 text-sm bg-[#0c0c0cd0] px-2 py-0.5 rounded'>duration</span>
      </div>
      {/*details*/}
      <div className="flex gap-2">
        <div className="bg-red-300 aspect-[1/1] rounded-full h-12"></div>
        <div className='flex flex-col'>
          <h3 className='text-lg'>Videotitle</h3>
          <div className="text-md">
            <h4>channel name</h4>
            <div className="flex gap-1">
              <span>views</span>
              <span>.</span>
              <span>videoAge</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Card