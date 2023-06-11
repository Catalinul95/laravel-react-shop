import React, {useState} from "react";
import useComponentVisible from "../hooks/useComponentVisible";

interface Props {
  button: any,
  content: any,
}

const Dropdown: React.FC<Props> = ({button, content}) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  const toggleDropdown = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  return (
    <div ref={ref} className="relative">
      <div onClick={toggleDropdown} className="cursor-pointer">
        {button}
      </div>
      <div
        className={`${isComponentVisible ? 'absolute' : 'hidden'} mt-[6px] top-[100%] right-0 bg-white min-w-[230px] rounded-md shadow-sm border border-gray-200 border-t border-t-gray-100`}>
        {content}
      </div>
    </div>
  )
}

export default Dropdown;