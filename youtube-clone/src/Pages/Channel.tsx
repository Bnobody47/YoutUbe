import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ChannelInfoType } from '../utils/Types'
import { usechannel } from '../Hooks/useChannel'
import { AiOutlineClose } from "react-icons/ai";
import ChannelVideoList from '../Components/ChannelVideoList'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from '../Components/Loading'
import ChannelPlaylist from '../Components/ChannelPlaylist'
import { getChannelPlaylists } from '../utils/api'




function Channel() {
    const { channelId } = useParams()
    const {category, setCategory, channelInfo, fetchChannelInfo, channelVideoList, channelPlayList, fetchChanneldata} = usechannel()
    const [showDesc, setShowDesc] = useState(false)


    const fetchMoreChanneldata = () => {
        fetchChanneldata(channelId!, channelVideoList!.nextPageToken!)
    }

    
    useEffect(()=> {
        fetchChannelInfo(channelId!)
        fetchChanneldata(channelId!)
    }, [category])

  return (
    <div className="relative">
        {/* model */}
        {showDesc && channelInfo?.description &&
        <div className="absolute overflow-hidden bg-neutral-800 rounded-xl left-1/2 top-1/2 transform -translate-x-1/2">
            <div className="flex flex-col gap-2 items-end w-[600px] max-h-[500px] p-8 overflow-y-auto">
                <div className="">
                    <AiOutlineClose 
                    onClick={()=>setShowDesc(false)}
                    className='text-2xl text-neutral-200'/>
                </div>
                <p className='text-lg whitespace-pre-line'>{channelInfo?.description}</p>
            </div>
        </div>
        }

        
        <InfiniteScroll 
                    next={ ()=> fetchMoreChanneldata()}
                    hasMore={true}
                    dataLength={channelVideoList.videos.length}
                    loader={<Loading /> }
                >
            <div className='w-[95%] mx-auto mt-8'>
                <div className="row row-cols-2">
                    {/* image */}
                    <div className="col-4">
                        <img src={channelInfo?.thumbnails} className="w-52 aspect-[1/1] object-cover rounded-full mx-auto" alt={channelInfo?.title || 'Channel Thumbnail'}
        />            </div>
                    {/* detail */}
                    <div className="col-8">
                        <h1 className='text-4xl font-semibolde'>{channelInfo?.title}</h1>
                        <div className="flex gap-4 text-lg text-neutral-400 mt-2">
                            <h2>{channelInfo?.customUrl}</h2>
                            <h2>{channelInfo?.subCount} Subscribers</h2>
                            <h2>{channelInfo?.videoCount} Videos</h2>
                        </div>
                        {channelInfo?.description &&
                            <div className="">
                            <p className='w-[600px] line-clamp-3 text-neutral-400 whitespace-pre-line'>{channelInfo?.description}</p>
                            <button
                                onClick={() => setShowDesc(true)}
                                className='font-semibold'>more</button>
                        </div>
                        }
                    </div>
                </div>

                <div className="my-3">
                    <button 
                        onClick={() => setCategory("videos")}
                        className={`w-44 text-xl py-2 font-semibold ${category == "videos" ? "border-b" : ""} `}>Videos</button>
                    <button 
                    onClick={() => setCategory("playlists")}
                    className={`w-44 text-xl py-2 font-semibold ${category == "playlists" ? "border-b" : ""} `}>Playlists</button>
                    <hr className='h-1' />
                </div>
                    {category == "videos"
                        ?<ChannelVideoList channelVideos={channelVideoList!.videos}/>
                        :<ChannelPlaylist channelPlayLists={channelPlayList!.playlists} />
                    }

                    <button
                    onClick={()=> fetchMoreChanneldata()} 
                    className='my-3 text-xl border p-2'>Load more</button>
            </div>
        </InfiniteScroll>     
    </div>
  )
}

export default Channel