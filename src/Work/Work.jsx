import transition from "../Main/transition";

import WorkItem from "./WorkItem";

import "../Main/scrollbar.css";
import "./Work.css";
import "../Main/index.css";


function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-title">My work</h1>
        <div className="work-list-container">
          <WorkItem name="PokéPlay!" image='./pokeplay_screen.png' tech={["javascript", "React JS"]} />
          <WorkItem name="banga" image="" tech={["javascript", "React JS"]}/>
        </div>
    </div>
  );
}

export default transition(Skills);
