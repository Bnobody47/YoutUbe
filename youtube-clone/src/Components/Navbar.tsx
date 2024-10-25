import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";


function Navbar() {
  return (
    <div className='w-full bg-[#0c0c0c]'>
      <div className="flex justify-between h-14 w-[95%] mx-auto">
        <div className="flex items-center gap-8">
          <a className="" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <RxHamburgerMenu className="text-xl"/>
          </a>
          <div className="flex items-center gap-1">
            <FaYoutube className="text-3xl text-red-600"/>
            <span className="text-xl">Youtube</span>
          </div>
        </div>
        <div className="flex items-center">
          <form>
            <div className="flex item-center sm:h-10 h-9 border-[0.6px] border-neutral-700 rounded-full overflow-hidden">
              <div className="flex items-center pr-5">
                <input 
                  type="text"
                  placeholder="Search" 
                  className="w-96 px-3 text-lg text-zinc-300 placeholder-neutral-500 bg-[#0c0c0c] focus:outline-none"
                
                />
                <AiOutlineClose className="text-lg cursor-pointer text-neutral-400"/>

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