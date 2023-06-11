import React from "react";
import Product from "../components/Product";
import Hero from "../components/Hero";
import {useSelector} from "react-redux";

const Index: React.FC = () => {
    const latestProducts = useSelector((state) => state.products.latestProducts);
    const popularProducts = useSelector((state) => state.products.popularProducts);
    return (<>
            <Hero/>
            <div className="flex flex-col md:flex-row lg:gap-6 mb-12">
                <div className="relative h-inherit rounded-l-lg overflow-hidden lg:w-[450px] lg:max-w-[450px]">
                    <div className="hidden lg:block h-full">
                        <div
                            className="h-full hover:scale-[110%] bg-cover bg-[url(https://megabyte.andevfrontend.com/img/categories/sliders/notebooks.jpg)] transition-all"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 z-[3]"></div>
                        <div
                            className="absolute top-0 bottom-0 w-full h-full flex flex-col justify-center gap-4 px-8 z-[4]">
                            <h2 className="text-white font-bold text-2xl">Latest Products</h2>
                            <button type="button"
                                    className="w-[100px] tracking-tight w-full p-2 px-5 outline outline-transparent border-2 border-transparent font-[400] text-gray-900 font-medium rounded-md bg-yellow-400 hover:scale-105 transition shadow-sm">
                                Explore
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 sm:gap-x-8 gap-y-6">
                        {latestProducts?.length > 0 && latestProducts.map(product => (
                            <Product key={product.id} {...product}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row lg:gap-6 mb-12">
                <div className="relative h-inherit rounded-l-lg overflow-hidden lg:w-[450px] lg:max-w-[450px]">
                    <div className="hidden lg:block h-full">
                        <div
                            className="h-full hover:scale-[110%] bg-cover bg-[url(https://megabyte.andevfrontend.com/img/categories/sliders/notebooks.jpg)] transition-all"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 z-[3]"></div>
                        <div
                            className="absolute top-0 bottom-0 w-full h-full flex flex-col justify-center gap-4 px-8 z-[4]">
                            <h2 className="text-white font-bold text-2xl">Popular Products</h2>
                            <button type="button"
                                    className="w-[100px] tracking-tight w-full p-2 px-5 outline outline-transparent border-2 border-transparent font-[400] text-gray-900 font-medium rounded-md bg-yellow-400 hover:scale-105 transition shadow-sm">
                                Explore
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 sm:gap-x-8 gap-y-6">
                        {popularProducts?.length > 0 && popularProducts.map(product => (
                            <Product key={product.id} {...product}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Index;
