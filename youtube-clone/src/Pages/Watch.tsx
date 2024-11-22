import React from 'react'
import VideoDetails from '../Components/VideoDetails'
import MiniCard from '../Components/MiniCard'

function Watch() {
  return (
    <div className='w-[95%] mx-auto mt-6 mb-12'>
        <div className="row">
            <div className="col-8 ">
                <div className="w-full aspect-[16/9] bg-red-400"></div>
                <VideoDetails />
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