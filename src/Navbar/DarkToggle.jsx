import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeImage } from "../redux/imageSlice";
import "../Main/index.css"
import "./darkToggle.css"
import { IoMdMoon as MoonIcon } from "react-icons/io";
import { IoSunny as SunIcon} from "react-icons/io5";

export default function DarkToggle() {
    const [isEnabled, setIsEnabled] = useState(false);
    const root = document.documentElement;
    const dispatch = useDispatch();
  
    const toggleState = () => {
        setIsEnabled((prevState) => !prevState);
    };

    useEffect(() => {
        if(!isEnabled){    
            root.style.setProperty('--background-color', 'black');
            root.style.setProperty('--highlight-text-color', '#b5cfb7');
            root.style.setProperty('--main-text-color', '#b5cfb7');
            root.style.setProperty('--accent-color', '#356338');
            root.style.setProperty('--link-color', '#457f4a');
            dispatch(changeImage('./H-black.png')); 
        }else{
            root.style.setProperty('--background-color', '#ECEBDE');
            root.style.setProperty('--highlight-text-color', '#A59D84');
            root.style.setProperty('--main-text-color', '#A59D84');
            root.style.setProperty('--accent-color', '#694f31');
            root.style.setProperty('--link-color', '#786a43');
            dispatch(changeImage('./H-white.png'));
          }
    }, [isEnabled]);
  
    return (
        <div className="toggle-container">
            <label className="toggle-wrapper" htmlFor="toggle">
            <div className={`toggle ${isEnabled ? "enabled" : "disabled"}`}>
                <span className="hidden">
                {isEnabled ? "Enable Light Mode" : "Enable Dark Mode"}
                </span>
                <div className="icons">
                <SunIcon className="icon"/>
                <MoonIcon className="icon"/>
                </div>
                <input
                id="toggle"
                name="toggle"
                type="checkbox"
                checked={isEnabled}
                onClick={toggleState}
                />
            </div>
            </label>
        </div>
      );      
  }
  