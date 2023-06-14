import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {ReactComponent as Success} from '../assets/success.svg';
import {ReactComponent as Error} from '../assets/error.svg';
import {ReactComponent as Close} from "../assets/close.svg";
import {ReactComponent as Warning} from "../assets/warning.svg";

import {notificationActions} from "../store/notificationSlice";

const Notification: React.FC = ({index, notification}) => {
    const dispatch = useDispatch();
    const closeNotification = () => {
        dispatch(notificationActions.removeNotification(notification.id))
    };

    React.useEffect(() => {
        if (notification.hide) {
            const timeoutId = setTimeout(() => {
                dispatch(notificationActions.removeNotification(notification.id))
            },  500);
        }
    }, [notification.hide]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch(notificationActions.hideNotification(notification.id))
        }, 3000);
    }, [])

    return <>
        <div onClick={() => closeNotification()}
             className={`fixed w-full sm:w-auto px-4 z-[9999] h-[70px] notification transition-all duration-500 ${!notification.hide ? 'slide-in-animation' : 'slide-out-animation'}`}
             style={{bottom: ((index) * 80) + 20 + 'px'}}
        >
            <div
                className="relative w-full sm:w-[500px] sm:max-w-[500px] rounded bg-white flex items-center shadow border border-gray-200 h-full">
                <div className="border-r border-gray-200 h-full flex items-center justify-center px-6">
                    {notification.type === 'success' && <Success className="h-7 w-7 text-teal-500"/>}
                    {notification.type === 'error' && <Error className="h-7 w-7 text-pink-500"/>}
                    {notification.type === 'warning' && <Warning className="h-7 w-7 text-orange-500"/>}
                </div>
                <div className="px-6">
                    <h3 className="font-semibold text-slate-900 text-md">
                        {notification.type === 'success' && <span>Action successful</span>}
                        {notification.type === 'error' && <span>Action failed</span>}
                        {notification.type === 'warning' && <span>Action warning</span>}
                    </h3>
                    <p className="text-sm text-gray-700">{notification.message}</p>
                </div>
                <Close onClick={() => closeNotification()}
                       className="w-5 h-5 text-slate-900 hover:text-slate-900 absolute top-[.5rem] right-[1rem] cursor-pointer"/>
            </div>
        </div>
    </>
};

export default Notification;
