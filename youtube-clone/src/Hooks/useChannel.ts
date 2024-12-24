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
            id: channelInfoResponse[0].id,
            thumbnails:
                channelInfoResponse[0].snippet.thumbnails?.high?.url ||
                channelInfoResponse[0].snippet.thumbnails?.medium?.url ||
                channelInfoResponse[0].snippet.thumbnails?.default?.url ||
                '',
            title: channelInfoResponse[0].snippet.title,
            customUrl:channelInfoResponse[0].snippet.customUrl,
            description: channelInfoResponse[0].snippet.description,
            viewCount: channelInfoResponse[0].statistics.viewCount,
            subCount: channelInfoResponse[0].statistics.subscriberCount,
            videoCount: channelInfoResponse[0].statistics.videoCount

        }

        // console.log("channelInfoData", channelInfoData)
        setChannelInfo(channelInfoData)
    }

    return{channelInfo, fetchChannelInfo}


}