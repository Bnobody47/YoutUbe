import React, { useEffect, useState } from 'react'
import CommentBody from './CommentBody'
import axios from 'axios'
import { CommentBodyType } from '../utils/Types'
import CommentCard from './CommentCard'
import { getVideoComments } from '../utils/api'
import { parseComments } from '../utils/parseData'

const API_KEY = import.meta.env.VITE_API_KEY

interface CommentState {
  comments:CommentBodyType[],
  nextPageToken: string | null
}

function Comments({videoId}:{videoId?: string}) {
  const [commentList, setCommentlist] = useState<CommentState>({comments: [], nextPageToken: null})

  const fetchComments =async () => {
    try {
        const commentResponse = await getVideoComments(videoId!, commentList!.nextPageToken!)
        console.log(commentResponse.data)
        const items = commentResponse.items

        const commentsData = parseComments(items)
        console.log(commentsData)

        setCommentlist(prev=>({
          comments: [...prev.comments, ...commentsData],
          nextPageToken: commentResponse.nextPageToken
        }))


    } catch (error){
      console.error("Error fetching the comments")
    }
  }

  useEffect(() => {
    if(videoId){
      fetchComments()
    }
  }, [videoId])

  return (
    <div className='mt-3 flex-col gap-2'>
        <h1 className='md:text-2xl sm:text-xl text-lg font-semibold px-4'>Comments</h1>
        {
            commentList?.comments?.map((comment: any, ind) =>
              <CommentCard key={ind} comment={comment} />
            )
        }
        <button className='text-gray-400 hover:underline' onClick={()=> fetchComments()}>Show more...</button>
    </div>
  )
}

export default Comments