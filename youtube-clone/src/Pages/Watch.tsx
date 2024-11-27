import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import VideoDetails from '../Components/VideoDetails'
import MiniCard from '../Components/MiniCard'
import { HomeVideoCardType } from '../utils/Types'
import { fetchVideosWithChannels } from '../utils/VideoDetailsHelper'

const API_KEY =import.meta.env.VITE_API_KEY

function Watch() {
  const{videoId} = useParams()
  console.log(`Video ID`, videoId)

  const [details,setDetails]= useState<HomeVideoCardType>()

  const fetchDetails= async()=> {
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,contentDetails,statistics&id=${videoId}`)
      console.log(`res`, response.data.items)
      const items = response.data.items

      const VideoDetails = await fetchVideosWithChannels(items)
      setDetails(VideoDetails[0])
    } catch (error) {

    }
  }

  useEffect(()=>{
    console.log(`details`, details)
  }, [details])

  useEffect(() => {
    fetchDetails()
  }, [])

  return (
    <div className='w-[95%] mx-auto mt-6 mb-12'>
        <div className="row">
            <div className="col-8 ">
                {/* <div className="w-full aspect-[16/9] bg-red-400"></div> */}
                <iframe
                  className="w-full aspect-[16/9] bg-red-400"
                  src={`https://www.youtube.com/embed/${details?.videoId}?autoplay=1`}
                  title='Youtube video player'
                  allow='autoplay; picture-inpicture;'
                  allowFullScreen
                  >
                </iframe>
                <VideoDetails details={details} />
                <div className=""></div>
            </div>
            <div className="col-4 flex flex-col gap-3">{
              [...Array(12)].map((item, ind) =>
                  <MiniCard />
                )
            }</div>
        </div>
    </div>
  )
}

export default Watch