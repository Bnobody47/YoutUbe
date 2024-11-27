import { useState } from "react"
import { HomeVideoCardType } from "../utils/Types"
import axios from "axios"
import { fetchVideosWithChannels } from "../utils/VideoDetailsHelper"

const API_KEY = import.meta.env.VITE_API_KEY

export const useHome = () => {
    interface HomeHookPropType {
        videos: HomeVideoCardType[],
        nextPageToken: string | null
    }

    const [homeVideos, setHomeVideos] = useState<Record<string, HomeHookPropType>>({
        home: { videos: [], nextPageToken: null },
        music: { videos: [], nextPageToken: null },
        sports: { videos: [], nextPageToken: null },
        gaming: { videos: [], nextPageToken: null },
        movies: { videos: [], nextPageToken: null },
        news: { videos: [], nextPageToken: null },
        fashion: { videos: [], nextPageToken: null },
        courses: { videos: [], nextPageToken: null }
    })
    
    const [error, setError] = useState<string | null>(null)

    const fetchHomeVideos = async (filter: string, categoryId: string | null, pageToken: string | null) => {
        try {
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,contentDetails,statistics&chart=mostPopular&${categoryId ? `videoCategoryId=${categoryId}` : ``}&${pageToken ? `pageToken=${pageToken}` : ``}&maxResults=20`)
            
            setError(null)  // Clear any previous errors on a successful request

            const videos = await fetchVideosWithChannels(response.data.items,)
            
            setHomeVideos(prev => ({
                ...prev,
                [filter]: {
                    videos: [...prev[filter].videos, ...videos],
                    nextPageToken: response.data.nextPageToken
                }
            }))

        } catch (error) {
            console.error(`Error fetching ${filter} videos: `, error)
            setError(`Error fetching the ${filter} videos, fetch again leter`)
        }
    }

    return { homeVideos, error, fetchHomeVideos }
}
