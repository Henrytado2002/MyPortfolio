import { useNavigate } from "react-router-dom";
import './navbar.css'


function NavBar(){

    const navigate = useNavigate();

    return(<>
        <div className="navbar">
        <div className="button-collection">
          <button onClick={()=>navigate("/")}>Home</button>
          <button onClick={()=>navigate("/about")}>About</button>
          <button onClick={()=>navigate("/skills")}>Skills</button>
          <button onClick={()=>navigate("/contacts")}>Contacts</button>
          </div>
        </div>
    </>)
}

export default NavBar
