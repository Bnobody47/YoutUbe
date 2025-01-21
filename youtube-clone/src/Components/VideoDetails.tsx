import React, { useState } from 'react'
import { BiLike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { useSearchParams } from 'react-router-dom';
import { HomeVideoCardType } from '../utils/Types';
import { Link } from 'react-router-dom';

function VideoDetails({details}: {details?: HomeVideoCardType}) {
    const [showDescription, setShowDescription] = useState(false)
  return (
    <div className='flex flex-col gap-2 mt-2 mx-1'>
        {/* VideoTitle */}
        <h1 className='text-2xl font-semibold'>{details?.videoTitle}</h1>
        <div className="flex justify-between">
            {/* channel info */}
            <div className="flex gap-3">
                <Link to={`/channel/${details?.channelInfo.id}`}>
                    <img src={details?.channelInfo.image} className="w-12 aspect-[1/1] rounded-full object-fit hover:scale-[108%] duration-200 easy-in-out" alt="" />
                </Link>
                <div className="flex flex-col text-lg">
                    <h2 className='font-semibold'>{details?.channelInfo.name}</h2>
                    <h2>{details?.channelInfo.subCount} subscribers</h2>
                </div>
            </div>
                {/* btns */}
                <div className="flex gap-3 text-lg cursor-pointer">
                    <div className="flex items-center gap-2 bg-neutral-800 px-3 rounded-full">
                        <BiLike />
                        <span className='h-6 border'></span>
                        <span>{details?.videoLikes}</span>
                    </div>

                    <div className="flex items-center gap-2 bg-neutral-800 px-3 rounded-full">
                        <FaShare />
                        <span>share</span>
                    </div>

                </div>
        </div>
        {/* description */}
        <div className="text-lg bg-neutral-700 px-3 py-2 rounded-xl">
            <p className={`whitespace-pre-line ${showDescription?"": "line-clamp-3"}`}>{details?.videoDescription}</p>
            {!showDescription ?
                <button onClick={() => setShowDescription(true)}>....more</button>
                :
                <button onClick={() => setShowDescription(false)}>....less</button>
            }
        </div>
    </div>
  )
}

export default VideoDetails