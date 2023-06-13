import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Notification from "./Notification";


const Notifications: React.FC = () => {
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.notification);

    return (
        <>
            {notification.items.length && notification.items.map((notification, index) => (
                <Notification key={notification.id} index={index} notification={notification}/>
            ))}
        </>
    )
}

export default Notifications;
