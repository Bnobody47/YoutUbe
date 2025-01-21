import { useState } from "react"
import { PlayListInfoType } from "../utils/Types"
import { getPlaylistInfo } from "../utils/api"
import { parsePlaylistInfo } from "../utils/parseData"

export const usePlaylistInfo=()=>{
    const [playListInfo, setPlayListInfo] = useState<PlayListInfoType | null>()
    const [showDesc, setShowDesc] = useState(false)

    const fetchPlaylistInfo = async (playlistId: string) => {
            const playlistInfoResponse = await getPlaylistInfo(playlistId)
    
            const PlaylistInfoData = parsePlaylistInfo(playlistInfoResponse)
    
            // console.log("playlilstInfoData",PlaylistInfoData)
            setPlayListInfo(PlaylistInfoData)
        }

        return {playListInfo, showDesc, setShowDesc, fetchPlaylistInfo}
}