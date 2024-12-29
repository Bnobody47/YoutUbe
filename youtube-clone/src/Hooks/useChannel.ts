import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ChannelInfoType, HomeVideoCardType } from '../utils/Types'
import { getActivities, getChannelInfo } from '../utils/api'
import { getActivitiesVideos } from '../utils/api'
import { fetchVideosWithChannels } from '../utils/VideoDetailsHelper'


const API_KEY = import.meta.env.VITE_API_KEY

export const usechannel= () => {
    const [channelInfo,setChannelInfo] = useState<ChannelInfoType | null>(null)
    const [channelVideoList, setChannelVideoList] = useState<HomeVideoCardType[]>()

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

    const fetchChanneldata =async (channelId: string) => {
        const channelVideosResponse = await getActivities(channelId)
        // console.log("channelVideosResponse", channelVideosResponse)
        const videoIds: string[] = []

        channelVideosResponse.forEach(
            (item:{
              contentDetails:{
                upload?:{ videoId:string },
                playlistItem?:{ resourceId: {videoId: string}}
              }
            }) => {
              if(item.contentDetails.upload){
                videoIds.push(item.contentDetails.upload.videoId)
              }else if(item.contentDetails.playlistItem){
                videoIds.push(item.contentDetails.playlistItem.resourceId.videoId)
              }
            }
          )
    
          const vidResponse = await getActivitiesVideos(videoIds!)
          // console.log("vidResponse", vidResponse)
    
          const videosArray = await fetchVideosWithChannels(vidResponse.items)
        //   console.log("videosArray", videosArray)
          setChannelVideoList(videosArray)
    }

    return{channelInfo, fetchChannelInfo,channelVideoList,fetchChanneldata}


}