import React from 'react'
import ChannelVideocard from './ChannelVideocard'
import { HomeVideoCardType } from '../utils/Types'

function ChannelVideoList({channelVideos}:{channelVideos?: HomeVideoCardType[]}) {
  return (
        <div className="row row-cols-4 gap-y-4">
            {channelVideos &&
                channelVideos.map((item: HomeVideoCardType, ind) =>
                        <ChannelVideocard key={item.videoId} item={item}/>
                )
            }
        </div>
  )
}

export default ChannelVideoList