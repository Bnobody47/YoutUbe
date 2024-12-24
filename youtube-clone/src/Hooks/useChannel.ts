import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ChannelInfoType } from '../utils/Types'
import { getChannelInfo } from '../utils/api'

const API_KEY = import.meta.env.VITE_API_KEY

export const usechannel= () => {
    const [channelInfo,setChannelInfo] = useState<ChannelInfoType | null>(null)

    const fetchChannelInfo = async (channelId: string) => {
        const channelInfoResponse = await getChannelInfo(channelId)

        const channelInfoData = {
            id: channelInfoResponse.id,
            thumbnails:
                channelInfoResponse.snippet.thumbnails?.high?.url ||
                channelInfoResponse.snippet.thumbnails?.medium?.url ||
                channelInfoResponse.snippet.thumbnails?.default?.url ||
                '',
            title: channelInfoResponse.snippet.title,
            customUrl:channelInfoResponse.snippet.customUrl,
            description: channelInfoResponse.snippet.description,
            viewCount: channelInfoResponse.statistics.viewCount,
            subCount: channelInfoResponse.statistics.subscriberCount,
            videoCount: channelInfoResponse.statistics.videoCount

        }

        // console.log("channelInfoData", channelInfoData)
        setChannelInfo(channelInfoData)
    }

    return{channelInfo, fetchChannelInfo}


}