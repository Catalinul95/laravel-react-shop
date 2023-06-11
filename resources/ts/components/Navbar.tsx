import React, {useState} from "react";

import {ReactComponent as Search} from '../assets/search.svg';
import {ReactComponent as User} from '../assets/user.svg';
import {ReactComponent as EmptyBag} from '../assets/empty-bag.svg';

import NavbarCart from "./NavbarCart";
import NavbarLogin from "./NavbarLogin";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../store/cartSlice";


const Navbar: React.FC = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

  const [isNavSearchVisible, setIsNavSearchVisible] = useState<boolean>(false);
  const [isNavLoginVisible, setIsNavLoginVisible] = useState<boolean>(false);

  const toggleNavSearch = () => {
    setIsNavSearchVisible(!isNavSearchVisible);
  };

  const toggleNavCart = () => {
    dispatch(cartActions.setShowCart(!cart.showCart));
  };

  const toggleNavLogin = () => {
    setIsNavLoginVisible(!isNavLoginVisible);
  };

  return (
    <>
      <header className="fixed w-full bg-white border-b border-gray-100 fixed top-0 px-4 z-[10]">
        <div className="w-full xl:w-11/12 mx-auto h-[80px] flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-1 bg-sky-100">
              <span className="font-bold font-sans text-sky-400 uppercase text-xl px-4 py-1.5">Brand</span>
            </a>
          </div>
          <div className="hidden md:flex w-[65%] lg:w-[50%] 2xl:w-[50%] max-w-[700px]">
            <div className={`w-full relative rounded ${isNavSearchVisible ? 'z-[30] bg-white' : ''}`}>
              <input onClick={toggleNavSearch} type="text"
                     className={`w-full rounded py-3 2xl:py-3.5 px-5 border-none bg-slate-100 text-slate-500 text-[1.5rem] sm:text-sm xl:text-md 2xl:text-[1rem]  placeholder-slate-400 outline-none ring-none focus:outline-transparent focus:border-transparent focus:ring-transparent`}
                     placeholder="What are you looking for?"/>
              <Search className="w-6 h-6 fill-slate-400 absolute right-5 top-[50%] transform translate-y-[-50%]" />
            </div>

            <div
              onClick={toggleNavSearch}
              className={`${isNavSearchVisible ? 'fixed' : 'hidden'} top-0 bottom-0 left-0 right-0 bg-black opacity-25 cursor-pointer`}></div>
          </div>
          <nav className="flex items-center gap-6">
            <button onClick={() => toggleNavCart()} type="button" className="flex items-center gap-2 text-slate-600 hover:text-slate-500">
              <EmptyBag className="w-4 h-4 2xl:w-5 2xl:h-5"/>
              <span>Cart</span>
            </button>
            <button onClick={toggleNavLogin} type="button" className="flex items-center gap-2 text-slate-600 hover:text-slate-500">
              <User className="w-4 h-4 2xl:w-5 2xl:h-5"/>
              <span>Sign In</span>
            </button>
          </nav>
        </div>
      </header>
      <NavbarCart/>
      <NavbarLogin isNavLoginVisible={isNavLoginVisible} setIsNavLoginVisible={setIsNavLoginVisible}/>
    </>
  )
}

export default Navbar;
