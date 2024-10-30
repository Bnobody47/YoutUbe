import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { HomeVideoCardType } from '../utils/Types'

const API_KEY = import.meta.env.VITE_API_KEY

function Home() {
    const [homeVideos, setHomeVideos] = useState<HomeVideoCardType[]>([])

    const fetchHomeVideos = async () => {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=20`)
        
        const videoData = response.data.items.map((item: any) => ({
            videoId: item.id,
            videoTitle: item.snippet.title,
            videoThumbnail: item.snippet.thumbnails.standard.url,
            videoDuration: item.contentDetails.duration,
            videoViews: item.statistics.viewCount,
            videoAge: item.snippet.publishedAt,
            channelInfo: {
                id: item.snippet.channelId,
                name: item.snippet.channelTitle,
            }
        }))

        const channelIds = videoData.map((video: HomeVideoCardType) => video.channelInfo.id).join(',')

        const channelResponse = await axios.get(`https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&part=snippet&id=${channelIds}`)

        const channelData: { [key: string]: string  } = {}

        channelResponse.data.items.forEach((channel: any) => {
            channelData[channel.id] = channel.snippet.thumbnails.default.url
            
        })

        const videos = videoData.map((video:HomeVideoCardType) => ({
            ...video,
            channelInfo: {
                ...video.channelInfo,
                image: channelData[video.channelInfo.id]
            }
        }))

        setHomeVideos(videos)
    }

    useEffect(() => {
        fetchHomeVideos()
    }, [])

    useEffect(() => {
        console.log(homeVideos)
    }, [homeVideos])

    return (
        <div className='row row-cols-3 w-[95%] mx-auto mt-6 '>
            {homeVideos?.map((item) =>
                <Card data={item} />
            )}
        </div>
    )
}

export default Home
