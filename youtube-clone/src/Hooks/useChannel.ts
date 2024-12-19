import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ChannelInfoType } from '../utils/Types'

const API_KEY = import.meta.env.VITE_API_KEY

export const usechannel= () => {
    const [channelInfo,setChannelInfo] = useState<ChannelInfoType | null>(null)

    const fetchChannelInfo = async (channelId: string) => {
        const channelInfoResponse = await axios.get(`https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&part=snippet,contentDetails,statistics&id=${channelId}`)        
        // console.log("channelInfoResponse", channelInfoResponse.data)
        const items= channelInfoResponse.data.items

        const channelInfoData = items.map((item:any)=>({
            id: item.id,
            thumbnails:
                item.snippet.thumbnails?.high?.url ||
                item.snippet.thumbnails?.medium?.url ||
                item.snippet.thumbnails?.default?.url ||
                '',
            title: item.snippet.title,
            customUrl:item.snippet.customUrl,
            description: item.snippet.description,
            viewCount: item.statistics.viewCount,
            subCount: item.statistics.subscriberCount,
            videoCount: item.statistics.videoCount

        }))

        // console.log("channelInfoData", channelInfoData)
        setChannelInfo(channelInfoData[0])
    }

    return{channelInfo, fetchChannelInfo}


}