import React from 'react'
import {Link} from 'react-router-dom'
import { HomeVideoCardType } from '../utils/Types'

function Card({ data }: {data: HomeVideoCardType}) {
  return (
    <div className='flex flex-col gap-3 pb-3'>
      {/*Tumbnail*/}
      <div className="relative">
        <Link to={`/watch/${data.videoId}/${data.channelInfo.id}`}>
          <img src={data.videoThumbnail} className="aspect-[16/9] object-cover rounded-xl bg-red-300 " alt="" />
        </Link>
        <span className='absolute bottom-3 right-3 text-sm bg-[#0c0c0cd0] px-2 py-0.5 rounded'>{data.videoDuration}</span>
      </div>
      {/*details*/}
      <div className="flex gap-2">
        <Link to={`/channel/${data.channelInfo.id}`}>
          <img src={data.channelInfo.image} className="bg-red-300 aspect-[1/1] rounded-full h-12" alt="" />
        </Link>
        <div className='flex flex-col'>
          <h3 className='text-lg line-clamp-2'>{data.videoTitle}</h3>
          <div className="text-md">
            <h4>{data.channelInfo.name}</h4>
            <div className="flex gap-1">
              <span>{data.videoViews}</span>
              <span>.</span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Card