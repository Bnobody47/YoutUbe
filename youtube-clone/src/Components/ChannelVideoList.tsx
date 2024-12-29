import React from 'react'
import ChannelVideocard from './ChannelVideocard'
import { HomeVideoCardType } from '../utils/Types'

function ChannelVideoList({channelVideoList}:{channelVideoList?: HomeVideoCardType[]}) {
  return (
        <div className="row row-cols-4 gap-y-4">
            {channelVideoList &&
                channelVideoList.map((item: HomeVideoCardType, ind) =>
                        <ChannelVideocard key={ind} item={item}/>
                )
            }
        </div>
  )
}

export default ChannelVideoList