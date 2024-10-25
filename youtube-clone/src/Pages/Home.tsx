import React from 'react'
import Card from '../Components/Card'

function Home() {
  return (
    <div className='row row-cols-3 w-[95%] mx-auto mt-6 '>
        {[...Array(12)].map(items=>
        <Card />
            )}
    </div>
  )
}

export default Home