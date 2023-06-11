import React from "react";
import {Link} from "react-router-dom";
import {cartActions,} from "../store/cartSlice";
import {useDispatch} from "react-redux";

const Product:React.FC = ({id, title, slug, description, image, price, created_at, updated_at, categories})  => {
    const dispatch = useDispatch();

    const onAddProductToCart = () => {
        dispatch(cartActions.addProductToCart({
            id,
            title,
            slug,
            description,
            image,
            price,
            created_at,
            updated_at,
            categories
        }));
    };

    return (
        <>
            <div  className="max-w-[700px] rounded">
                <img src={image} alt="product alt title" className="h-[250px] w-full object-cover"/>
                <div className="flex-1 border border-gray-200 border-t-none">
                    <div className="px-5 py-4">
                        <div className="flex gap-2  mb-4">
                            {categories?.length > 0 && categories.map(category => (
                                <div key={category.id} className="h-[30px] max-h-[30px]">
                                    <span className="bg-yellow-400 h-full px-2 py-0.5 text-xs text-gray-700 inline-flex items-center justify-center whitespace-nowrap">
                                        {category.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <h2 className="text-slate-800 text-xl md:text-lg 2xl:text-xl mb-2 h-[25px] max-h-[25px] overflow-hidden">
                            <Link to={{pathname: `/products/${slug}`}}>
                                {title}
                            </Link>
                        </h2>
                        <p className="text-slate-500 text-sm 2xl:text-md min-h-[50px] max-h-[60px] overflow-hidden">
                            {description?.substr(0, 120)}...
                        </p>
                        <p className="mb-4 text-gray-600 text-xl 2xl:text-2xl">${(price / 100)}</p>
                        <div className="flex justify-center self-end">
                            <button onClick={() => onAddProductToCart()} type="button" className="tracking-tight w-full p-2 px-5 outline outline-transparent border-2 border-transparent font-[400] text-gray-700 font-medium rounded-md bg-yellow-400 hover:scale-105 transition shadow-sm">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;
