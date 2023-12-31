import React, {useEffect, useRef} from "react";
import {ReactComponent as Close} from "../assets/close.svg";
import {login} from "../store/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {errorActions} from "../store/errorSlice";

interface Props {
    isNavLoginVisible: any,
    setIsNavLoginVisible: any,
}

const NavbarLogin: React.FC = ({isNavLoginVisible, setIsNavLoginVisible}) => {
    const toggleNavLogin = () => {
        setIsNavLoginVisible(!isNavLoginVisible);
    };

    const dispatch = useDispatch();
    const errors = useSelector(state => state.error.errors);
    const isLoggedIn = useSelector((state) => state.user.jwtToken);
    const emailRef = useRef();
    const passwordRef = useRef();

    const onSubmit = (ev) => {
        ev.preventDefault();

        dispatch(login({
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }));
    };

    useEffect(() => {
        dispatch(errorActions.setErrors(null))
    }, [isNavLoginVisible])

    useEffect(() => {
        if (isLoggedIn) {
            toggleNavLogin();
        }
    }, [isLoggedIn])

    return (
        <div
            className={`fixed ${isNavLoginVisible ? 'visible' : 'invisible'} flex h-screen w-full justify-center z-[50]`}>
            <div onClick={toggleNavLogin}
                 className={`${isNavLoginVisible ? 'fixed' : 'hidden'} top-0 bottom-0 right-0 left-0 bg-black opacity-25 cursor-pointer z-[50]`}></div>
            <div
                className={`${isNavLoginVisible ? 'fixed scale-100 opacity-100' : 'scale-[120%] opacity-0'} transition duration-300 w-[100%] sm:w-[500px] sm:max-w-[500px] z-[50] px-4`}>
                <div className="bg-white rounded-md px-10 py-6">
                    <div className="text-center mb-4">
                        <h2 className="text-2xl 2xl:text-4xl font-semibold text-slate-800 mb-3">Welcome back!</h2>
                        <p className="text-md text-slate-500">Don't have an account? &nbsp;<a href="#"
                                                                                              className="text-yellow-400 font-semibold">Create
                            Account</a></p>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-500">Email Address</label>
                                <input ref={emailRef} type="email"
                                       className={`border px-2 py-2.5 border-gray-300 rounded outline-none ${errors?.email ? 'border-pink-500' : ''}`}
                                       placeholder="Email"/>
                                {errors?.email && <span className="text-pink-500 text-sm">
                                    {errors.email[0]}
                                </span>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-500">Password</label>
                                <input ref={passwordRef} type="password"
                                       className={`border px-2 py-2.5 border-gray-300 rounded outline-none ${errors?.password ? 'border-pink-500' : ''}`}
                                       placeholder="Password"/>
                                {errors?.password && <span className="text-pink-500 text-sm">
                                    {errors.password[0]}
                                </span>}
                            </div>
                            <button type="submit"
                                    className="tracking-tight w-full mt-2 p-2 px-5 outline outline-transparent border-2 border-transparent font-[400] text-gray-700 font-medium rounded-md bg-yellow-400 hover:scale-105 transition shadow-sm">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NavbarLogin;
