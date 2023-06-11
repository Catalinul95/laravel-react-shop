import React from "react";
import {ReactComponent as Facebook} from "../assets/facebook.svg";
import {ReactComponent as Twitter} from "../assets/twitter.svg";

const Footer:React.FC = ()  => {
    return (
        <>
            <footer className="mt-20 px-4">
                <div className="w-full xl:w-11/12 mx-auto border-t border-gray-200 py-8">
                    <div className="w-full flex items-center justify-between">
                        <nav className="flex gap-6 text-xs md:text-md 2xl:text-sm text-gray-500">
                            <a href="#" className="hover:text-gray-400">Terms & Conditions</a>
                            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                            <a href="#" className="hover:text-gray-400">Cookie</a>
                        </nav>
                        <div className="flex gap-6 items-center justify-between">
                            <a href="#">
                                <Facebook class="w-5 h-5 2xl:w-6 2xl:h-6 fill-gray-600 hover:fill-gray-500"/>
                            </a>
                            <a href="#">
                                <Twitter class="w-5 h-5 2xl:w-6 2xl:h-6 fill-gray-600 hover:fill-gray-500"/>
                            </a>
                        </div>
                    </div>
                    <div className="text-center text-sm text-gray-400 my-4">All rights reserved &copy; 2023</div>
                </div>
            </footer>
        </>
    )
}

export default Footer;