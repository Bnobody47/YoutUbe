import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

function Navbar() {
  return (
    <div className='w-full bg-[#0c0c0c]'>
      <div className="flex h-14 w-[95%] mx-auto">
        <div className="flex items-center gap-8">
          <RxHamburgerMenu className="text-xl"/>
          <div className="flex items-center gap-1">
            <FaYoutube className="text-3xl text-red-600"/>
            <span className="text-xl">Youtube</span>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  )
}

export default Navbar