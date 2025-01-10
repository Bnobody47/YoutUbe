import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ChannelInfoType, ChannelPlaylistType, HomeVideoCardType } from '../utils/Types'
import { getActivities, getChannelInfo } from '../utils/api'
import { getActivitiesVideos, getChannelPlaylists } from '../utils/api'
import { fetchVideosWithChannels } from '../utils/VideoDetailsHelper'


const API_KEY = import.meta.env.VITE_API_KEY

interface ChannelVideoListState{
  videos:HomeVideoCardType[],
  nextPageToken:string | null
}
interface ChannelPlayListState{
  playlists:ChannelPlaylistType[],
  nextPageToken:string | null
}

export const usechannel= () => {
  const [category, setCategory] = useState("videos")
    const [channelInfo,setChannelInfo] = useState<ChannelInfoType | null>(null)
    const [channelVideoList, setChannelVideoList] = useState<ChannelVideoListState>({videos:[],nextPageToken: null})
    const [channelPlayList, setChannelPlaylists] = useState<ChannelPlayListState>({playlists:[],nextPageToken: null})

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

    

    const fetchChanneldata =async (channelId: string,pageToken?: string) => {
      if (category == "videos") {
          const channelVideosResponse = await getActivities(channelId, pageToken)
          // console.log("channelVideosResponse", channelVideosResponse)
          const videoIds: string[] = []

          channelVideosResponse.items.forEach(
              (item:{
                contentDetails:{
                  upload?:{ videoId:string },
                  playlistItem?:{ resourceId: {videoId: string}}
                }
              }) => {
                if(item.contentDetails.upload){
                  videoIds.push(item.contentDetails.upload.videoId)
                }
                // else if(item.contentDetails.playlistItem){
                //   videoIds.push(item.contentDetails.playlistItem.resourceId.videoId)
                // }
              }
            )
      
            const vidResponse = await getActivitiesVideos(videoIds!)
            // console.log("vidResponse", vidResponse)
      
            const videosArray = await fetchVideosWithChannels(vidResponse.items)
            setChannelVideoList(prev=>({
              videos: [...prev.videos,...videosArray],
              nextPageToken:channelVideosResponse.nextPageToken
            }))
              console.log("videosArray", videosArray)
        } else {    
            const channelplaylistsResponse = await getChannelPlaylists(channelId!)
            
            const channelPlaylistsData = channelplaylistsResponse.items.map((item: any) => ({
                id: item.id,
                title: item.snippet.title,
                thumbnail: item.snippet.thumbnails.standard?.url || item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url,
                videoCount: item.contentDetails.itemCount,
              }))
              console.log("channelPlaylistsData", channelPlaylistsData)
            

            setChannelPlaylists(prev=>({
              playlists: [...prev.playlists,...channelPlaylistsData],
              nextPageToken:channelplaylistsResponse.nextPageToken
            }))
    
    
        }
    }

    return{category, setCategory, channelInfo, fetchChannelInfo,channelVideoList, channelPlayList,fetchChanneldata}


}