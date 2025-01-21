import React from 'react'
import { PlayListVideoType } from '../utils/Types'

function PlaylistItemsCard({item, ind}:{item: PlayListVideoType, ind: number}) {
  return (
    <div className='col flex flex-col'>
            {/* thumbnail */}
            <div className="relative">
            <div className="absolute flex gap-2 items-center bg-[#0c0c0cd0] px-2 py-0.5 h-full w-[100px]">
                <h3 className='text-center w-full text-xl text-neutral-400'>{ind + 1}</h3>
            </div>
                <img src={item.thumbnail} className="bg-red-300 object-cover aspect-[16/9] rounded" alt="" />
            </div>
            {/* title */}
            <div className="flex flex-col gap-1 mt-1">
                <h1 className='text-md line-clamp-1'>{item.title}</h1>
            </div>
        </div>
  )
}

export default PlaylistItemsCard