import Transition from "./transition";
import Card from "./Card";
import "./scrollbar.css";
import "./contacts.css";
import { useEffect } from "react";

function Contacts() {  
  let PX = screen.width>484 ? "1.5em" : "1.0em";
  let H1 = screen.width>484 ? "Hover above the cards" : "Touch the cards";
  return (
    <>
      <div className="card-container">
        <h1 className="contacts-title">{H1}</h1>
        <Card
          description="My Number"
          info="964219944"
          icon_path="./phone.svg"
          num="card1"
        />
        <Card
          className="email-card"
          description="My Email"
          info="henrique.d.rosa2002@gmail.com"
          icon_path="./email.svg"
          font_size={PX}
          num="card2"
        />
        <Card
          description="My Discord"
          info="henryy._."
          icon_path="./discord.svg"
          num="card3"
        />
      </div>

    </>
  );
}

export default Transition(Contacts);
