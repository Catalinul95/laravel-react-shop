import React from "react";

import {ReactComponent as Bars} from '../../assets/bars.svg';
import Dropdown from "../Dropdown";

interface Props {
  toggleNav: () => void;
  isNavToggled: any,
}

const TopBar: React.FC<Props> = (props) => {
  return (
    <div className={`fixed left-0 w-full h-[60px] border-b border-gray-200 bg-white z-[2] ${props.isNavToggled ? 'md:pl-[300px]' : 'md:pl-0'}`}>
      <div className="h-full flex items-center justify-between px-4">
        <button onClick={props.toggleNav} className="inline-block md:hidden p-2 rounded-full hover:bg-gray-50 focus:bg-amber-50">
          <Bars className="w-[25px] h-[25px] fill-orange-500 cursor-pointer"/>
        </button>
        <div className="ml-auto">
          <Dropdown button={<div
            className="rounded-full w-[40px] h-[40px] bg-slate-900 text-white flex items-center justify-center">PC</div>}
                    content={<div className="py-1">
                      <div className="block py-3 px-4 flex flex-col">
                        <span className="text-slate-700 text-sm">Pocsan Catalin</span>
                        <span className="top-[5px] text-black font-medium text-md">pocsanjr@gmail.com</span>
                      </div>
                      <div className="h-[1px] bg-gray-100 w-full"></div>
                      <div className="text-slate-800 text-md mt-1 px-2">
                        <a href="#"
                           className="block rounded-lg py-2 px-2 flex flex-col hover:bg-amber-500 hover:text-white">My
                          Profile</a>
                        <a href="#"
                           className="block rounded-lg py-2 px-2 flex flex-col hover:bg-amber-500 hover:text-white">Sign
                          Out</a>
                      </div>
                    </div>}/>
        </div>
      </div>
    </div>
  )
}

export default TopBar;