import React, { useEffect, useState } from 'react'
import CommentBody from './CommentBody'
import axios from 'axios'
import { CommentBodyType } from '../utils/Types'
import CommentCard from './CommentCard'

const API_KEY = import.meta.env.VITE_API_KEY

interface CommentState {
  comments:CommentBodyType[],
  nextPageToken: string | null
}

function Comments({videoId}:{videoId?: string}) {
  const [commentList, setCommentlist] = useState<CommentState>({comments: [], nextPageToken: null})

  const fetchComments =async () => {
    try {
        const commentResponse = await axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&part=snippet,replies&videoId=${videoId}&${commentList.nextPageToken ?`&pageToken=${commentList.nextPageToken}`:``}`)
        console.log(commentResponse.data)
        const items = commentResponse.data.items

        const commentsData = items.map((comment:any)=>({
          commentId: comment.id,
          authorChannelId: comment.snippet.topLevelComment.snippet.authorChannelId?.value || "",
          authorProfile: comment.snippet.topLevelComment.snippet.authorProfileImageUrl || "",
          authorName: comment.snippet.topLevelComment.snippet.authorDisplayName || "Anonymous",
          commentText: comment.snippet.topLevelComment.snippet.textOriginal || "",
          commentLikes: comment.snippet.topLevelComment.snippet.likeCount || 0,
          commentRepliesCount: comment.snippet.topLevelComment.totalReplyCount
        }))
        console.log(commentsData)

        setCommentlist(prev=>({
          comments: [...prev.comments, ...commentsData],
          nextPageToken: commentResponse.data.nextPageToken
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
        <h1 className='text-2xl font-semibold px-4'>Comments</h1>
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