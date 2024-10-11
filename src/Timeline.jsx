import "./timeline.css";
import { motion} from "framer-motion";

function timeline(){
    return(<>
        <div className="timeline">
            <div className="events">
                <motion.div
                initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.5}}
                className="event">
                    <svg className="marker" xmlns="http://www.w3.org/2000/svg" width="15" height="12"> <circle cx="6" cy="6" r="6"></circle> </svg>
                    <div className="content">
                        <time>2018 - 2020</time>
                        <div className="text">
                            <h2>High School Course of Science and Technology</h2>
                            <p><a href="https://aeseverim.pt/">Severim de Faria's High School</a> - Évora </p>
                        </div>
                    </div>   
                </motion.div>  
                
                <motion.div
                initial={{opacity:0, y: 50}} 
                whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
                viewport={{once:false, amount:.5}} 
                className="event">
                    <svg className="marker" xmlns="http://www.w3.org/2000/svg" width="15" height="12"> <circle cx="6" cy="6" r="6"></circle> </svg>
                    <div className="content">
                        <time>2021 – 2024</time>
                        <div className="text">
                            <h2>Bachelors Degree in Computer Science Engineering</h2>
                            <p><a href="https://www.uevora.pt/en">University of Évora </a> - Évora </p>
                        </div>
                    </div>   
                </motion.div> 
                <motion.div
                initial={{opacity:0, y: 50}} 
                whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
                viewport={{once:false, amount:.5}} 
                className="event">
                    <svg className="marker" xmlns="http://www.w3.org/2000/svg" width="15" height="12"> <circle cx="6" cy="6" r="6"></circle> </svg>
                    <div className="content">
                        <time>CURRENTLY</time>
                        <div className="text">
                            <h2>Masters Degree in Comunication and Web Development</h2>
                            <p><a href="https://www.ua.pt/">University of Aveiro</a> - Évora </p>
                        </div>
                    </div>   
                </motion.div>
                
            </div>
        </div>
    </>)
}

export default timeline;