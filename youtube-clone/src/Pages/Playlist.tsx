import React from 'react'
import { useParams } from 'react-router-dom'

function Playlist() {
    // const{channelId, playlistId} = useParams()


    return (
        <div className='w-[90%] mx-auto mt-8'>
                <div className="row row-cols-2 bg-neutral-900 rounded-xl p-5 rounded-xl">
                    {/* image */}
                    <div className="col-4">
                        {/* <img src={channelInfo?.thumbnails} className="w-52 aspect-[1/1] object-cover rounded-full mx-auto" alt={channelInfo?.title || 'Channel Thumbnail'}/> */}
                        <div className=" aspect-[16/9] object-cover  mx-auto bg-red-400"></div>
                    </div>
                    {/* detail */}
                    <div className="col-8">
                        <h1 className='text-4xl font-semibolde'>channel title</h1>
                        
                        {/* {channelInfo?.description && */}
                            <div className="">
                            <p className='w-[600px] line-clamp-3 text-neutral-400 whitespace-pre-line'>channel description</p>
                            <button
                                // onClick={() => setShowDesc(true)}
                                className='font-semibold'>more</button>
                        </div>
                        {/* } */}
                    </div>
                </div>
        </div>
    )
}

export default Playlist