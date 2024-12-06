import React from 'react'
import { BiLike } from 'react-icons/bi'

function CommentBody() {
  return (
    <div className="flex gap-3">
        <div className="bg-red-300 w-10 h-fit aspect-[1/1] rounded-full"></div>
            <div className="">
                <h1 className='text-md'>channel name</h1>
                <h2 className='text-neutral-300 whitespace-pre-line'>comment</h2>
                <div className="flex item-center text-neutral-400 gap-1 cursor-pointer">
                    <BiLike />
                     likecount
                </div>
             </div>
        </div>
  )
}

export default CommentBody