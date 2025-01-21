import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";


function Navbar({search, setSearch}:{search: string, setSearch: (q: string) => void}) {
  const navigate = useNavigate()


  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      e.preventDefault()
      if(search.trim()){
        navigate(`/search?query=${search}`)
      }else{
        navigate(`/`)
      }
    }
  }

  return (
    <div className='w-full bg-[#0c0c0c]'>
      <div className="flex justify-between h-14 w-[95%] mx-auto">
        <div className="flex items-center gap-8 cursor-pointer">
          <a className="" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <RxHamburgerMenu className="text-xl"/>
          </a>
          <div className="flex items-center gap-1"
            onClick={()=> navigate(`/`)}
          >
            <FaYoutube className="text-3xl text-red-600"/>
            <span className="text-xl">Youtube</span>
          </div>
        </div>
        <div className="flex items-center">
          <form>
            <div className="flex item-center sm:h-10 h-9 border-[0.6px] border-neutral-700 rounded-full overflow-hidden">
              <div className="flex items-center pr-5">
                <input
                   value={search}
                  type="text"
                  placeholder="Search" 
                  className="w-96 px-3 text-lg text-zinc-300 placeholder-neutral-500 bg-[#0c0c0c] focus:outline-none"
                  onChange={(e)=> setSearch(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                <AiOutlineClose
                onClick={()=> setSearch("")}
                className={`text-lg cursor-pointer text-neutral-400 ${!search ? `invisible`: "visible"} `}/>

              </div>
              <button className="w-16 flex items-center justify-center border-l-[1px] border-neutral-700">
                <CiSearch className="text-2xl text-neutral-200"/>
              </button>
            </div>
          </form>
        </div>
        <div className="">
          {/*empty*/}
        </div>
      </div>
    </div>
  )
}

export default Navbar