import React, { useState } from 'react'
import { BiLike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { useSearchParams } from 'react-router-dom';

function VideoDetails() {
    const [showDescription, setShowDescription] = useState(false)
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
        <div className="text-lg bg-neutral-700 px-3 py-2 rounded-xl">
            <p className={`${showDescription?"": "line-clamp-3"}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur impedit non odio? Autem quo facere dolore cumque omnis vitae alias sapiente sunt, voluptates eos fuga doloribus, hic accusamus suscipit porro!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident culpa repellat consequuntur atque, libero ab vitae quia recusandae veniam aliquam, porro tenetur, sint natus vero iusto autem inventore officiis.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa sunt repellat recusandae similique est eum quasi aspernatur? Accusamus, praesentium. Optio placeat itaque provident quas quisquam at architecto cum commodi nobis.
            </p>
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