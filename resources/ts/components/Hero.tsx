import React from "react";

const Hero:React.FC = ()  => {
    return (
        <>
            <div className="w-full bg-gray-100 h-[300px] rounded-lg mb-12 uppercase px-10 flex gap-4 flex-col justify-center items-center text-center">
                <h1 className="text-3xl md:text-5xl text-slate-700 font-bold">Some awesome title</h1>
                <p className="text-xl md:text-3xl text-slate-500">Some awesome subtitle that this application.</p>
            </div>
        </>
    )
}

export default Hero;