import "./timeline.css";
import { motion} from "framer-motion";

function timeline2(){
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
                        <time>01/07/2023 – 31/07/2023 </time>
                        <div className="text">
                            <h2>Summer Internship</h2>
                            <p>Integration on KPMG's Technology Consulting department, with work
                            pertaining to the development of software solutions with OutSystems</p>
                            <p>Évora | <a href="https://kpmg.com/pt/pt/home.html" target="_blank">KPMG</a> | <a href="./KPMG_estagio.pdf" target="_blank">Certificate of Completion</a></p>
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
                        <time>06/03/2024 – 22/05/2024</time>
                        <div className="text">
                            <h2>Curricular Intership</h2>
                            <p>Curricular internship, belonging to the curriculum of my bachelors degree in
                                Computer Science Engineering. Work in the Development of an AI solutions
                                for the automation of business processes with the ServiceNow platform.
                                Construction of documentation for the guided implementation of said
                                solution</p>
                            <p>Évora | <a href="https://kpmg.com/pt/pt/home.html" target="_blank">KPMG</a></p>
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
                            <h2>Looking for oportunities!</h2>
                            
                        </div>
                    </div>   
                </motion.div>
                
                
            </div>
        </div>
    </>)
}

export default timeline2;