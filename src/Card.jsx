import "./cards.css"

function Card({info, description, icon_path, font_size}){

    if(font_size == undefined){
        font_size = "2em"
    }

    return(
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img className="contact-icon" src={icon_path} alt="" />
                </div>
                <div class="flip-card-back">
                    <p>{description}</p>
                    <h1 style={{fontSize: font_size}}>{info}</h1>
                </div>
            </div>
        </div>
    );
}

export default Card