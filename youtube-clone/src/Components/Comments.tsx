import React from 'react'
import CommentBody from './CommentBody'


function Comments() {
  return (
    <div className='mt-3 flex-col gap-2'>
        <h1 className='text-2xl font-semibold px-4'>Comments</h1>
        {
            [...Array(10)].map((item:any)=>
                <CommentBody />
            )
        }
    </div>
  )
}

export default Comments