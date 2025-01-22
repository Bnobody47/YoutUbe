import React from 'react'
import { PlayListVideoType } from '../utils/Types'
import PlaylistItemsCard from './PlaylistItemsCard'

function Playlistitems({videos, channelId}: {videos: PlayListVideoType[], channelId: string}) {
  return (
    <div className="row row-cols-md-4 row-cols-sm-3 row-cols-2 gap-y-4 mt-4">
        {
            videos.map((item: PlayListVideoType, ind)=>
                <PlaylistItemsCard key={item.id} item={item} ind={ind} channelId={channelId}/>
            )
        }
     </div>
  )
}

export default Playlistitems