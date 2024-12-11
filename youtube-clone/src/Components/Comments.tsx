import React, { useEffect, useState } from 'react'
import CommentBody from './CommentBody'
import axios from 'axios'
import { CommentBodyType } from '../utils/Types'

const API_KEY = import.meta.env.VITE_API_KEY

function Comments({videoId}:{videoId?: string}) {
  const [commentList, setCommentlist] = useState<CommentBodyType[]>()

  const fetchComments =async () => {
    try {
        const commentResponse = await axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&part=snippet,replies&videoId=${videoId}`)
        console.log(commentResponse)
        const items = commentResponse.data.items

        const commentsData = items.map((comment:any)=>({
          commentId: comment.id,
          authorChannelId: comment.snippet.topLevelComment.snippet.authorChannelId?.value || "",
          authorProfile: comment.snippet.topLevelComment.snippet.authorProfileImageUrl || "",
          authorName: comment.snippet.topLevelComment.snippet.authorDisplayName || "Anonymous",
          commentText: comment.snippet.topLevelComment.snippet.textOriginal || "",
          commentLikes: comment.snippet.topLevelComment.snippet.likeCount || 0,
        }))
        console.log(commentsData)

        setCommentlist(commentsData)


    } catch (error){
      console.error("Error fetching the comments")
    }
  }

  useEffect(() => {
    fetchComments()
  }, [videoId])

  return (
    <div className='mt-3 flex-col gap-2'>
        <h1 className='text-2xl font-semibold px-4'>Comments</h1>
        {
            commentList?.map((item:any)=>
                <CommentBody item={item}/>
            )
        }
    </div>
  )
}

export default Comments