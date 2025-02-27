import transition from "../Main/transition";

import WorkItem from "./WorkItem";

import { FaJsSquare } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { BiLogoRedux } from "react-icons/bi";
import { SiFirebase } from "react-icons/si";

import "../Main/scrollbar.css";
import "./Work.css";
import "../Main/index.css";

const info_pokeplay = "An app Developed on my Masters in the University of Aveiro and themed arround Pokémon, where you can play two Pokémon games. Consumes the ´´PokéAPI`` API "
const tech_pokeplay=[ { logo:<RiReactjsLine />, name:"React"},
                      { logo:<FaJsSquare />, name:"JavaScript"},
                      { logo:<IoLogoGithub />, name:"CI/CD"},
                      { logo:<BiLogoRedux />, name:"RTK"},
                      { logo:<SiFirebase />, name:"FireBase"}
]


function Skills() {
  return (
    
    <div className="skills-container">
      
      <h1 className="skills-title">My work</h1>
        <div className="work-list-container">
          <WorkItem name="PokéPlay!" image='./pokeplay_screen.png' tech={tech_pokeplay} info={info_pokeplay} link_app={"https://pokeplay-tdw.netlify.app/"} link_code={"https://github.com/Henrytado2002/pokeplay"}  />
          <WorkItem name="banga" image="" tech={tech_pokeplay}/>
        </div>
    </div>
  );
}

export default transition(Skills);
