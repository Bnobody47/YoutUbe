import React from 'react'
import { BiLike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";

function VideoDetails() {
  return (
    <div className='flex flex-col gap-2 mt-2 mx-1'>
        {/* VideoTitle */}
        <h1 className='text-2xl font-semibold'>Video Title</h1>
        <div className="flex justify-between">
            {/* channel info */}
            <div className="flex gap-3">
                <div className="w-12 aspect-[1/1] rounded-full bg-red-200"></div>
                <div className="flex flex-col text-lg">
                    <h2 className='font-semibold'>channel name</h2>
                    <h2>sub count</h2>
                </div>
            </div>
                {/* btns */}
                <div className="flex gap-3 text-lg cursor-pointer">
                    <div className="flex items-center gap-2 bg-neutral-800 px-3 rounded-full">
                        <BiLike />
                        <span className='h-6 border'></span>
                        <span>video likes</span>
                    </div>

                    <div className="flex items-center gap-2 bg-neutral-800 px-3 rounded-full">
                        <FaShare />
                        <span>share</span>
                    </div>

                </div>
        </div>
        {/* description */}
    </div>
  )
}

export default VideoDetails