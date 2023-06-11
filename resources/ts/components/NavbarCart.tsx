import React from "react";
import {ReactComponent as Bin} from "../assets/bin.svg";
import {ReactComponent as Close} from "../assets/close.svg";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../store/cartSlice";

interface Props {
    isNavCartVisible: any,
    setIsNavCartVisible: any,
}

const NavbarCart: React.FC = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const toggleNavCart = () => {
        dispatch(cartActions.setShowCart(!cart.showCart));
    };

    const removeAllProductsFromCart = () => {
        dispatch(cartActions.removeAllProductsFromCart());
    };

    const removeProductFromCart = (product) => {
        dispatch(cartActions.removeProductFromCart(product))
    };

    return (
        <>
            <div
                onClick={toggleNavCart}
                className={`${cart.showCart ? 'fixed' : 'hidden'} top-0 bottom-0 right-0 left-0 bg-black opacity-25 cursor-pointer z-[50]`}></div>
            <div
                className={`fixed h-screen ${cart.showCart ? ' right-0' : 'right-[-90%] md:right-[-400px] 2xl:right-[-500px]'} bg-white z-[10] w-[90%] md:w-[400px] 2xl:w-[500px] top-0 bottom-0 transition-right duration-500 z-[60]`}>
                <div className="w-full h-full flex flex-col justify-between">
                    <div
                        className="w-full flex items-center justify-between py-5 2xl:py-7 px-8 border-b border-gray-200">
                        <h3 className="text-xl font-medium text-slate-700">Shopping Cart</h3>
                        <button type="button" className="flex gap-4 items-center text-slate-400">
                            {cart.products.length > 0 && <span onClick={() => removeAllProductsFromCart()} className="flex items-center gap-1 group">
                <Bin className="w-4 h-4 2xl:w-5 2xl:h-5 fill-slate-400 group-hover:fill-slate-500"/>
                <span className="group-hover:text-slate-500">Clear all</span>
              </span>}
                            <Close onClick={toggleNavCart}
                                   className="w-4 h-4 2xl:w-5 2xl:h-5 text-slate-200 fill-slate-200 cursor-pointer"/>
                        </button>
                    </div>
                    <div className="w-full flex-1 h-[100%] py-3 px-8 overflow-y-auto">
                        {cart.products && cart.products.map((product) => (
                            <div key={product.id} className="flex flex-col">
                                <div className="flex py-7 gap-6 border-b border-gray-200">
                                    <div className="relative cursor-pointer group">
                                        <div
                                            className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-0 transition duration-500 group-hover:opacity-25"></div>
                                        <div
                                            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:opacity-100 opacity-0 w-[25px] h-[25px] bg-white flex rounded-full items-center justify-center cursor-pointer scale-0 group-hover:scale-100">
                                            <Close onClick={() => removeProductFromCart(product)} className="w-4 h-4 fill-white text-white"/>
                                        </div>
                                        <img src={product.image} alt="product alt title"
                                             className="bg-cover max-h-[70px]"/>
                                    </div>
                                    <div>
                                        <h3 className="mb-1 text-slate-800">{product.title}</h3>
                                        <div className=" h-[25px] max-h-[25px] mb-2">
                            <span
                                className="bg-yellow-400 h-full px-2 py-0.5 text-xs text-gray-700 inline-flex items-center justify-center whitespace-nowrap">PHP</span>
                                        </div>
                                    </div>
                                    <span className="font-semibold text-slate-800 text-lg ml-auto">${product.price / 100}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full py-7 px-8 border-t border-gray-200">
                        <div className="flex justify-between items-center mb-3">
                            <h4 className="font-semibold text-slate-800 text-lg">Subtotal</h4>
                            <span className="font-semibold text-slate-800 text-lg">${cart.total ? cart.total / 100 : 0}</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-slate-500 text-xs 2xl:text-md">Final price and discounts will be
                                determined at the time of payment
                                processing.</p>
                            <button type="button"
                                    className="tracking-tight w-full p-3 px-5 outline outline-transparent border-2 border-transparent font-[400] text-gray-700 font-medium rounded-md bg-yellow-400 hover:scale-105 transition shadow-sm">
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarCart;
