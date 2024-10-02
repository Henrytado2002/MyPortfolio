import "./home.css";
import "./scrollbar.css";
import Transition from "./transition";

function Home() {
  return (
    <>
      <div className="home-container">
        <h1 className="henrique"> HENRIQUE ROSA</h1>
        <h1 className="henrique2"> HENRIQUE ROSA</h1>
        <div className="main-home-container">
          <div className="home-info-container">
            <p className="home-info"> Web Developer & Software Engineer </p>
            <p className="home-message">
              <i>
                "If you have to do something, you might as well do it right."
              </i>
            </p>
          </div>
          <div className="home-logo-container">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/henrique-rosa-a55578274/"
            >
              <img
                className="logo"
                src="src\assets\linkedin.svg"
                alt="LinkedIn"
              />
            </a>
            <a target="_blank" href="https://github.com/Henrytado2002">
              <img className="logo" src="src\assets\github.svg" alt="GitHub" />
            </a>
            <a target="_blank" href="https://www.instagram.com/henrytado02/">
              <img
                className="logo"
                src="src\assets\instagram.svg"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transition(Home);
