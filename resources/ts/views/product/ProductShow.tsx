import React, {useEffect} from "react";
import Product from "../../components/Product";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProduct} from "../../store/productsSlice";

let productLoaded = false;
const ProductShow: React.FC = () => {
    const params = useParams();
    const dispatch = useDispatch();

    const product = useSelector((state) => state.products.product);


    useEffect(() => {
        if (productLoaded) {
            productLoaded = false;
            return;
        }
        dispatch(fetchProduct(params.slug));
        productLoaded = true;
    }, [])

    return (
        <>
            {!product && <div>Loading...</div>}
            {product && <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
                    <div>
                        <img src={product.image} alt="product alt title"
                             className="h-[300px] lg:h-[400px] w-full object-cover"/>
                    </div>
                    <div>
                        <div className="mb-6">
                            <h1 className="text-5xl font-bold text-slate-700 mb-3">
                                {product.title}
                            </h1>
                            <div className="flex gap-2  mb-4">
                                {product.categories?.length > 0 && product.categories.map(category => (
                                    <div className="h-[30px] max-h-[30px]">
                                    <span className="bg-yellow-400 h-full px-2 py-0.5 text-xs text-gray-700 inline-flex items-center justify-center whitespace-nowrap">
                                        {category.name}
                                    </span>
                                    </div>
                                ))}
                            </div>
                            <h3 className="mb-4 text-gray-600 text-4xl">${product.price / 100}</h3>
                            <h3 className="text-2xl font-semibold text-slate-600 mt-4">Description</h3>
                            <div className="h-[1px] w-full bg-gray-100 my-2"></div>
                            <p className="text-lg text-slate-500">
                                {product.description}
                            </p>
                        </div>
                        <div className="w-full md:w-[300px]">
                            <button type="button"
                                    className="tracking-tight w-full p-2 px-5 outline outline-transparent border-2 border-transparent font-[400] text-gray-700 font-medium rounded-md bg-yellow-400 hover:scale-105 transition shadow-sm">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <h2 className="text-3xl text-semibold mb-6">You might also like</h2>
                    <div className="h-[1px] w-full bg-gray-100 mb-10"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 sm:gap-x-8 gap-y-6">
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default ProductShow;
