import Transition from "./transition";
import Card from "./Card";
import "./contacts.css"
function Contacts(){
    return(
        <>
            <h1 className="contacts-title">My contacts</h1>
            <Card></Card>
            
        </>
    )
}

export default Transition(Contacts);