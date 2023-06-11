import React, {useEffect, useState} from "react";

interface Props
{
    button: any,
    content: any,
    isNavToggled: any,
}

const NavbarDropdown:React.FC<Props> = ({button, content, isNavToggled}) => {
    const [isDropdownToggled, setIsDropdownToggled] = useState<boolean>(false);


    const toggleDropdown = () => {
        setIsDropdownToggled(!isDropdownToggled);
    };

    useEffect(() => {
      setIsDropdownToggled(true);
    }, [isNavToggled]);

    return (
        <>
            <div onClick={toggleDropdown} className={`flex items-center rounded-lg justify-between hover:bg-gray-100 w-full py-1.5 px-3 cursor-pointer  ${!isNavToggled ? 'hidden' : ''}`}>
                { button }
            </div>
            <div className={`flex-col gap-2 my-[5px] ${isDropdownToggled ? 'flex' : 'hidden'}`}>
                { content }
            </div>
        </>
    )
}

export default NavbarDropdown;