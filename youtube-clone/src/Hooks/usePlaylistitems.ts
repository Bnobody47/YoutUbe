import { useState } from "react"
import { PlayListVideoType } from "../utils/Types"
import { getPlaylisVideos } from "../utils/api"

interface PlaylistItemsState{
    videos: PlayListVideoType[],
    nextPageToken: string | null
}

export const usePlaylistItems = () => {
    const [playlistItems, setPlaylistItems] = useState<PlaylistItemsState>({videos: [], nextPageToken: null})

    const fetchPlaylistVideos = async (playlistId: string)=>{
            const playlistVideosResponse = await getPlaylisVideos(playlistId!)
            
            const playlistVideosData = playlistVideosResponse.items.map((item:any)=>({
                id: item.snippet.resourceId.videoId,
                title: item.snippet.title,
                thumbnail: item.snippet.thumbnails.standard?.url || item.snippet.thumbnails.high.url
            }))
            // console.log("playlistVideosData", playlistVideosData)
    
            setPlaylistItems(prev => ({
                videos: [...prev.videos, ...playlistVideosData],
                nextPageToken: playlistVideosResponse.nextPageToken
            }))
        }

        return {playlistItems, fetchPlaylistVideos}
}