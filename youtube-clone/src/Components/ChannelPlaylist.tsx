import React from 'react'
import ChannelPlaylistCard from './ChannelPlaylistCard'
import { ChannelPlaylistType } from '../utils/Types'

function ChannelPlaylist({channelPlayLists}:{channelPlayLists: ChannelPlaylistType[]}) {
  return (
    <div className="row row-cols-4 gap-y-4">
            {
                channelPlayLists.map((item: ChannelPlaylistType) =>
                        <ChannelPlaylistCard key={item.id} item={item}/>
                )
            }
        </div>
  )
}

export default ChannelPlaylist