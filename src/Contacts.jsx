import Transition from "./transition";
import Card from "./Card";
import "./contacts.css"
function Contacts(){
    return(
        <>
            
            <div className="card-container">
                <Card description="My Number" info="964219944" />
                <Card className="email-card" description="My Email" info="henrique.d.rosa2002@gmail.com" />
                <Card description="My Discord" info="henryy._." />
            </div>
            
            
        </>
    )
}

export default Transition(Contacts);