import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPlaylistInfo, getPlaylisVideos } from '../utils/api'
import { PlayListInfoType, PlayListVideoType } from '../utils/Types'
import { AiOutlineClose } from 'react-icons/ai'
import { usePlaylistInfo } from '../Hooks/usePlaylistInfo'
import { usePlaylistItems } from '../Hooks/usePlaylistitems'
import Playlistitems from '../Components/Playlistitems'


function Playlist() {
    const{channelId, playlistId} = useParams()
    const {playListInfo, showDesc, setShowDesc, fetchPlaylistInfo} = usePlaylistInfo()
    const {playlistItems, fetchPlaylistVideos} = usePlaylistItems()


    useEffect(() => {
        fetchPlaylistInfo(playlistId!)
        fetchPlaylistVideos(playlistId!)

    }, [])

    return (

        <div className="relative">

            {/* model */}
                    {showDesc && playListInfo?.description &&
                    <div className="absolute overflow-hidden bg-neutral-800 rounded-xl left-1/2 top-1/2 transform -translate-x-1/2">
                        <div className="flex flex-col gap-2 items-end w-[600px] max-h-[500px] p-8 overflow-y-auto">
                            <div className="">
                                <AiOutlineClose 
                                onClick={()=>setShowDesc(false)}
                                className='text-2xl text-neutral-200'/>
                            </div>
                            <p className='text-lg whitespace-pre-line'>{playListInfo?.description}</p>
                        </div>
                    </div>
                    }
            <div className='w-[90%] mx-auto mt-8'>
                    <div className="row row-cols-2 bg-neutral-900 rounded-xl p-5 rounded-xl">
                        {/* image */}
                        <div className="col-4">
                            <img src={playListInfo?.thumbnail} className="aspect-[16/10] object-cover  mx-auto" alt={playListInfo?.title || 'Channel Thumbnail'}/>
                        </div>
                        {/* detail */}
                        <div className="col-8 flex flex-col gap-2">
                            <h1 className='text-4xl font-semibolde'>{playListInfo?.title}</h1>
                            
                            {playListInfo?.description &&
                                <div className="">
                                    <p className='w-[600px] line-clamp-3 text-neutral-400 whitespace-pre-line'>{playListInfo?.description}</p>
                                    <button
                                        onClick={() => setShowDesc(true)}
                                        className='font-semibold'>more</button>
                                </div>
                            }
                        </div>
                    </div>

                    <Playlistitems videos={playlistItems.videos} channelId={channelId!} />
            </div>
        </div>
    )
}

export default Playlist