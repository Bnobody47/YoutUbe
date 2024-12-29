import React from 'react'
import { HomeVideoCardType } from '../utils/Types'

function ChannelVideocard({item}:{item: HomeVideoCardType}) {
  return (
    <div className='col flex flex-col'>
        {/* thumbnail */}
        <div className="relative">
            <div className="absolute bottom-2 right-2 bg-[#0c0c0cd0] px-2 py-0.5 rounded">{item.videoDuration}</div>
            <img src={item.videoThumbnail} className="bg-red-300 object-cover aspect-[16/9] rounded" alt="" />
        </div>
        {/* title */}
        <div className="flex flex-col gap-1 mt-1">
            <h1 className='text-md line-clamp-1'>{item.videoTitle}</h1>
            <div className="flex gap-3 text-sm text-gray-400">
                <h2>{item.videoViews}</h2>
                <h2>{item.videoAge}</h2>
            </div>
        </div>
    </div>
  )
}

export default ChannelVideocard