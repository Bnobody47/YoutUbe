import { HomeVideoCardType } from "./Types"
import axios from "axios"

const API_KEY = import.meta.env.VITE_API_KEY


export const fetchVideosWithChannels = async (items: any[]) => {
        const videoData = items.map((item: any) => ({
            videoId: item.id,
            videoTitle: item.snippet.title,
            videoDescription: item.snippet.description,
            videoThumbnail: item.snippet.thumbnails.standard?.url || item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url,
            videoDuration: item.contentDetails?.duration || 'N/A',
            videoViews: item.statistics?.viewCount || '0',
            videoLikes: item.statistics.likeCount,
            videoAge: item.snippet.publishedAt,
            channelInfo: {
                id: item.snippet.channelId,
                name: item.snippet.channelTitle,
                subCount: item.statistics?.subscriberCount
            }
        }))
        
        const channelIds = videoData.map((video: HomeVideoCardType) => video.channelInfo.id).join(',')
        
        const channelResponse = await axios.get(`https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&part=snippet&id=${channelIds}`)
        
        const channelData: { [key: string]: {image: string, subCount:string} } = {}
        channelResponse.data.items.forEach((channel: any) => {
            channelData[channel.id] = {
                image: channel.snippet.thumbnails.default.url || channel.snippet.thumbnails.medium.url || channel,
                subCount: channel.statistics?.subscriberCount || null
            }
        })

        const videos = videoData.map((video: HomeVideoCardType) => ({
            ...video,
            channelInfo: {
                ...video.channelInfo,
                image: channelData[video.channelInfo.id].image,
                subCount: channelData[video.channelInfo.id].subCount
            }
        }))

        return videos


}
