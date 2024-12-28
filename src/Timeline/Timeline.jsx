import "./timeline.css";
import "../Main/index.css";
import { FaCircle } from "react-icons/fa";
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
                    <FaCircle className="marker"></FaCircle>
                    <div className="content">
                        <time>2018 - 2020</time>
                        <div className="text">
                            <h2 className="timeline-h2">High School Course of Science and Technology</h2>
                            <p>Évora | <a href="https://aeseverim.pt/" target="_blank">Severim de Faria's High School</a> </p>
                        </div>
                    </div>   
                </motion.div>  
                
                <motion.div
                initial={{opacity:0, y: 50}} 
                whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
                viewport={{once:false, amount:.5}} 
                className="event">
                    <FaCircle className="marker"></FaCircle>
                    <div className="content">
                        <time>2021 – 2024</time>
                        <div className="text">
                            <h2 className="timeline-h2">Bachelors Degree in Computer Science Engineering</h2>
                            <p>Évora | <a href="https://www.uevora.pt/en" target="_blank">University of Évora </a> | <a href="./diploma_UE_EI.pdf" target="_blank">Certificate of Completion</a> </p>
                        </div>
                    </div>   
                </motion.div> 
                <motion.div
                initial={{opacity:0, y: 50}} 
                whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
                viewport={{once:false, amount:.5}} 
                className="event">
                    <FaCircle className="marker"></FaCircle>
                    <div className="content">
                        <time>CURRENTLY</time>
                        <div className="text">
                            <h2 className="timeline-h2">Masters Degree in Comunication and Web Development</h2>
                            <p>Aveiro | <a href="https://www.ua.pt/" target="_blank">University of Aveiro</a> | <a href="./Matricula_UA.pdf" target="_blank">Entry Certificate </a> </p>
                        </div>
                    </div>   
                </motion.div>
                
            </div>
        </div>
    </>)
}

export default timeline;