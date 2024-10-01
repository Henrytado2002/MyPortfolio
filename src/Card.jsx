import "./cards.css"

function Card({info, description, icon_path}){

    return(
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    </div>
                    <div class="flip-card-back">
                        <p>{description}</p>
                        <h1>{info}</h1>
                    </div>
            </div>
        </div>
    );
}

export default Card