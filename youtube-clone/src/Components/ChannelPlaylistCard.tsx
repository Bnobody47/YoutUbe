import React from 'react'
import { FaList } from "react-icons/fa6";
import { ChannelPlaylistType } from '../utils/Types';
import { Link } from 'react-router-dom';

function ChannelPlaylistCard({item, channelId}:{item: ChannelPlaylistType, channelId: string }) {
  return (
    <Link to={`/playlist/${channelId}/${item.id}`}>
      <div className='col flex flex-col hover:scale-[101%] duration-200 easy-in-out'>
          {/* thumbnail */}
          <div className="relative">
              <div className="absolute flex gap-2 items-center bottom-2 right-2 bg-[#0c0c0cd0] px-2 py-0.5 rounded">
                  <FaList /> 
                  <h3>{item.videoCount} videos</h3>
              </div>
              <img src={item.thumbnail} className="bg-red-300 object-cover aspect-[16/9] rounded" alt="" />
          </div>
          {/* title */}
          <div className="flex flex-col gap-1 mt-1">
              <h1 className='text-md line-clamp-1'>{item.title}</h1>
          </div>
      </div>
    </Link>
  )
}

export default ChannelPlaylistCard