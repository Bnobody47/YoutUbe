import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ChannelInfoType } from '../utils/Types'
import { usechannel } from '../Hooks/useChannel'


function Channel() {
    const { channelId } = useParams()
    const {channelInfo,fetchChannelInfo} = usechannel()
    
    useEffect(()=> {
        fetchChannelInfo(channelId!)
    }, [])

  return (
    <div className='w-[95%] mx-auto mt-8'>
        <div className="row row-cols-2">
            {/* image */}
            <div className="col-4">
                <img src={channelInfo?.thumbnails} className="w-52 aspect-[1/1] object-cover rounded-full mx-auto" alt={channelInfo?.title || 'Channel Thumbnail'}
/>            </div>
            {/* detail */}
            <div className="col-8">
                <h1 className='text-4xl font-semibolde'>{channelInfo?.title}</h1>
                <div className="flex gap-4 text-lg text-neutral-400 mt-2">
                    <h2>{channelInfo?.customUrl}</h2>
                    <h2>{channelInfo?.subCount} Subscribers</h2>
                    <h2>{channelInfo?.videoCount} Videos</h2>
                </div>
                <div className="">
                    <p className='w-[600px] line-clamp-3 text-neutral-400 whitespace-pre-line'>{channelInfo?.description}</p>
                    <button className='font-semibold'>more</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Channel