import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { TbMusic } from "react-icons/tb";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { BiMoviePlay } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa6";
import { TbHanger } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";

const mainLink =[{
    icon:<MdHomeFilled className="text-xl"/>,
    name:"Home",
    filterTag:"home"
}]

const categoriesLink =[
    {
    icon:<TbMusic className="text-xl"/>,
    name:"Music",
    filterTag:"music"
    },
    {
    icon:<MdOutlineSportsBasketball className="text-xl"/>,
    name:"Sports",
    filterTag:"sports"
    },
    {
    icon:<TbDeviceGamepad2 className="text-xl"/>,
    name:"Gaming",
    filterTag:"gaming"
    },
    {
    icon:<BiMoviePlay className="text-xl"/>,
    name:"Movies",
    filterTag:"movies"
    },
    {
    icon:<FaRegNewspaper className="text-xl"/>,
    name:"News",
    filterTag:"news"
    },
    {
    icon:<TbHanger className="text-xl"/>,
    name:"Fashion",
    filterTag:"fashion"
    },
    {
    icon:<HiOutlineLightBulb className="text-xl"/>,
    name:"Courses",
    filterTag:"courses"
    },
    
]

function Sidebar() {
  return (
    <div data-bs-toggle="offcanvas" className="w-full h-full text-white bg-[#0c0c0c] ">
        <div className="flex items-center gap-8 w-[85%] mx-auto h-14">
          <a className="" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <RxHamburgerMenu className="text-xl"/>
          </a>
          <div className="flex items-center gap-1">
            <FaYoutube className="text-3xl text-red-600"/>
            <span className="text-xl">Youtube</span>
          </div>
        </div>
        <div className="">
          <ul className="border-b-[1px] border-zinc-700">
            {mainLink.map(({icon,name,filterTag})=>
                <li
                key={name}
                className="pl-6 py-3 hover:bg-neutral-800"
                >

                  <h1 className="flex items-center gap-5">
                    {icon}
                    <span className="text-sm">{name}</span>
                  </h1>
                </li>
            )}
            </ul>
          <ul className="border-b-[1px] border-zinc-700">
            {categoriesLink.map(({icon,name,filterTag})=>
                <li
                key={name}
                className="pl-6 py-3 hover:bg-neutral-800"
                >

                  <h1 className="flex items-center gap-5">
                    {icon}
                    <span className="text-sm">{name}</span>
                  </h1>
                </li>
            )}
            </ul>
        </div>
    </div>
  )
}

export default Sidebar