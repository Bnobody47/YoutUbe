import React from 'react'
import { BiLike } from 'react-icons/bi'
import {CommentBodyType } from '../utils/Types'

function CommentBody({item}:{item: CommentBodyType}) {
  return (
    <div className="flex gap-3">
        
        <img src={item.authorProfile} className="bg-red-300 w-10 h-fit aspect-[1/1] rounded-full" alt="" />
            <div className="">
                <h1 className='text-md'>{item.authorName}</h1>
                <h2 className='text-neutral-300 whitespace-pre-line'>{item.commentText}</h2>
                <div className="flex item-center text-neutral-400 gap-1 cursor-pointer">
                    <BiLike />
                     {item.commentLikes}
                </div>
             </div>
        </div>
  )
}

export default CommentBody