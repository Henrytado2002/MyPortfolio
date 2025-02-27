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
            root.style.setProperty('--mid-color', '#6b966e');
            root.style.setProperty('--drawer-button-color', '#dbffdf')
            dispatch(changeImage('./H-black.png')); 
        }else{
            root.style.setProperty('--background-color', '#ECEBDE');
            root.style.setProperty('--highlight-text-color', '#A59D84');
            root.style.setProperty('--main-text-color', '#6a5b49');
            root.style.setProperty('--accent-color', '#A59D84');
            root.style.setProperty('--link-color', '#a17540');
            root.style.setProperty('--mid-color', '#635a44');
            root.style.setProperty('--drawer-button-color', '#86755e')
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
                onChange={toggleState}
                />
            </div>
            </label>
        </div>
      );      
  }
  