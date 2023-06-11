import React, {useState} from 'react';
import {Link, Outlet, useLocation} from 'react-router-dom'
import TopBar from "../admin/TopBar";
import {ReactComponent as Bars} from "../../assets/bars.svg";
import {ReactComponent as ArrowDown} from '../../assets/arrow-down.svg';
import NavbarDropdown from "../admin/NavbarDropdown";

import navigation, {Navigation} from "../../navigation";

const AdminLayout: React.FC = () => {
  const [isNavToggled, setIsNavToggled] = useState<boolean>(true);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavToggled(!isNavToggled);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 antialiased flex tracking-wide">
      <div
        className={`w-[300px] fixed z-[3] ${isNavToggled ? ' left-0 md:w-[300px]' : 'md:w-[90px] left-[-300px]'} md:left-0 transition-all h-screen border-r border-gray-200 bg-white shadow-[6px_70px_30px_0px_rgba(0,0,0,0.1)]`}>
        <div
          className={`h-[60px] w-full flex gap-2 items-center border-b border-gray-200 px-4 ${!isNavToggled ? 'md:justify-center' : ''}`}>
          <button onClick={toggleNav} className="p-2 rounded-full hover:bg-gray-50 focus:bg-amber-50">
            <Bars className="w-[25px] h-[25px] fill-amber-400 cursor-pointer"/>
          </button>
          <a href="#"
             className={`text-slate-800 font-semibold text-xl italic truncate ${!isNavToggled ? 'md:hidden' : ''}`}>Admin
            Area</a>
        </div>
        <div className="h-full overflow-y-auto py-6">
          {navigation.map((navigationItem: Navigation, index: number) => (
            !navigationItem.children.length ? (<div key={navigationItem.label + '-' + index}>
                <div className="px-3">
                <div className="flex items-center justify-between">
                  <Link to={navigationItem.path} className={`flex gap-3 rounded-lg w-full py-1.5 px-3 cursor-pointer ${!isNavToggled ? 'justify-center' : ''} ${location.pathname === navigationItem.path ? 'bg-amber-400 text-white hover:bg-amber-500' : 'hover:bg-gray-100 text-black'}`}>
                    <navigationItem.icon className={`w-[25px] h-[25px] ${location.pathname === navigationItem.path ? 'fill-white' : 'fill-gray-700'}`}/>
                    <span
                      className={`font-bold  text-[.9rem] truncate ${!isNavToggled ? 'hidden' : ''}`}>
                      {navigationItem.label}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="pl-6">
                <div className="h-[1px] w-full bg-gray-200 my-4"></div>
              </div>
            </div>)
              : (<div key={navigationItem.label + '-' + index}>
                <div className="px-3">
                  <NavbarDropdown isNavToggled={isNavToggled} button={<><div
                    className={`flex gap-3 ${!isNavToggled ? 'justify-center ' : ''}`}>
                <span
                  className={`text-black font-bold text-[.9rem] select-none select-none truncate ${!isNavToggled ? 'hidden' : ''}`}>{navigationItem.label}</span>
                  </div>
                    <ArrowDown className={`w-[20px] fill-gray-700`} /></>} content={<>
                      {navigationItem.children.map((navigationItemChild: Navigation) => (
                        <div key={navigationItemChild.label} className={`flex items-center rounded-lg justify-between w-full cursor-pointer ${location.pathname === navigationItemChild.path ? 'bg-amber-400 text-white hover:bg-amber-500' : 'hover:bg-gray-100  text-black'}`}>
                          <Link to={navigationItemChild.path}
                             className={`w-full h-full py-1.5 px-3 flex gap-3 ${!isNavToggled ? 'justify-center' : ''}`}>
                            <navigationItemChild.icon className={`w-[25px] h-[25px] ${location.pathname === navigationItemChild.path ? 'fill-white' : 'fill-gray-700'}`}/>
                            <span
                              className={`font-bold  text-[.9rem] truncate select-none ${!isNavToggled ? 'hidden' : ''}`}>
                              {navigationItemChild.label}
                            </span>
                          </Link>
                        </div>
                      ))}
                  </>}/>
                </div>
                <div className="pl-6">
                  <div className="h-[1px] w-full bg-gray-200 my-4"></div>
                </div>
              </div>)
          ))}

        </div>
      </div>

      <div className={`relative w-full ${isNavToggled ? 'md:pl-[300px]' : 'md:pl-[90px]'} transition-all`}>
        <TopBar toggleNav={toggleNav} isNavToggled={isNavToggled}/>
        <main className="pt-12 px-6 md:px-0 w-full md:w-9/12 mx-auto mt-[70px]">
          <Outlet/>
        </main>
      </div>

    </div>
  )
}

export default AdminLayout

