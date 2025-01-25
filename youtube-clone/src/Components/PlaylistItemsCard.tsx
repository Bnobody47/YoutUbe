import { PlaylistVideotype } from '../utils/Types'
import { Link } from 'react-router-dom'

function PlaylistItemsCard({item, ind}:{item: PlaylistVideotype, ind: number}) {
  return (
    <Link to={`/watch/${item.id}/${item.id}`} className='flex gap-3'>
        <div className='col flex flex-col hover:scale-[101%] duration-200 easy-in-out'>
                {/* thumbnail */}
                <div className="relative">
                <div className="absolute flex gap-2 items-center bg-[#0c0c0cd0] px-2 py-0.5 h-full sm:w-[100px] w-[60px">
                    <h3 className='text-center w-full text-xl text-neutral-400'>{ind + 1}</h3>
                </div>
                    <img src={item.thumbnail} className="bg-red-300 object-cover aspect-[16/9] rounded" alt="" />
                </div>
                {/* title */}
                <div className="flex flex-col gap-1 mt-1">
                    <h1 className='sm:text-md text-sm line-clamp-1'>{item.title}</h1>
                </div>
            </div>
    </Link>
  )
}

export default PlaylistItemsCard