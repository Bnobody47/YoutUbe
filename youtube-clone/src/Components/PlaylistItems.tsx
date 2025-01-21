import React from 'react'
import { PlayListVideoType } from '../utils/Types'
import PlaylistItemsCard from './PlaylistItemsCard'

function Playlistitems({videos}: {videos: PlayListVideoType[]}) {
  return (
    <div className="row row-cols-4 gap-y-4 mt-4">
        {
            videos.map((item: PlayListVideoType, ind)=>
                <PlaylistItemsCard key={item.id} item={item} ind={ind}/>
            )
        }
     </div>
  )
}

export default Playlistitems