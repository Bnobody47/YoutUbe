import {useEffect, useState} from 'react'
import { CommentBodyType } from '../utils/Types'
import CommentBody from './CommentBody'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY

function CommentCard( {comment} : {comment: CommentBodyType}) {

    const [replies,setReplies] = useState<CommentBodyType[]>([])

    const fetchreplies =async () => {
        try {
            if(comment.commentRepliesCount) {
                const repliesResponse =await axios.get(`https://www.googleapis.com/youtube/v3/comments?key=${API_KEY}&part=snippet&parentId=${comment.conmmentId}`)
                
                const items = repliesResponse.data.items

                const repliesData = items.map((item:any)=> ({
                    commentId: item.id,
                    authorChannelId: item.snippet.authorChannelId?.value || '',
                    authorProfile: item.snippet.authorProfileImageUrl || '',
                    authorName: item.snippet.authorDisplayName || 'Anonymous',
                    commentText: item.snippet.textOriginal || '',
                    commentLikes: item.snippet.likeCount || 0, 
                })) 

                setReplies(repliesData)
            }
        } catch (error) {
            console.error(`Error fetching the comment replies`)
        }
    }

    useEffect(()=> {
        fetchreplies()
    }, [])

  return (
    <div className='flex flex-col gap-2'>
        <CommentBody item={comment}/>
        <div className="px-14">
            {replies?.map((item:any, ind)=>
                <CommentBody key={ind} item={item}/>
            )}

        </div>
    </div>
  )
}

export default CommentCard