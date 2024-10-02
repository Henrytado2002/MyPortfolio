import Transition from "./transition";
import Card from "./Card";
import "./scrollbar.css";
import "./contacts.css";
function Contacts() {
  return (
    <>
      <div className="card-container">
        <Card
          description="My Number"
          info="964219944"
          icon_path="src\assets\phone.svg"
        />
        <Card
          className="email-card"
          description="My Email"
          info="henrique.d.rosa2002@gmail.com"
          icon_path="src\assets\email.svg"
          font_size="1.5em"
        />
        <Card
          description="My Discord"
          info="henryy._."
          icon_path="src\assets\discord.svg"
        />
      </div>
    </>
  );
}

export default Transition(Contacts);
