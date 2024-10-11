import Transition from "./transition";
import Timeline from "./timeline";
import "./scrollbar.css";
import "./about.css"
import { motion} from "framer-motion";

function About() {
  return (
    <>
      <div className="CV-container">
        <div className="text-container">
          
          <motion.h1 
              className="main-about-title"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.5}}>ABOUT ME</motion.h1>

          <div className="header-container">
            <motion.img src="./profile.svg"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.5}} className="about-img" />
            <motion.h1 
              className="about-h1"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.5}}> Who I am: </motion.h1>
          </div>
        
          <motion.p
          initial={{opacity:0, y: 50}} 
          whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
          viewport={{once:false, amount:.5}}>
            Hi! My name is Henrique, and I am a Portuguese Web Developer and Computer Sciences Engineer. 
            I live in Aveiro, but I was born and raised in the arid lands of Alentejo. I am currently 
            still developing my knowledge, undertaking a masters degree in the University of Aveiro. 
            I love challenges, and I have a fervorous drive for being the best and excelling at everything 
            I do, and I believe my main traits are my open-mindedness, my great socials skills and ability 
            to work in a team environment, and my desire to excel.
          </motion.p>

          <div className="header-container">
            <motion.img src="./profile.svg"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.5}} className="about-img" />
            <motion.h1 
              className="about-h1"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.5}}> Who I am: </motion.h1>
          </div>
        
          <motion.p
          initial={{opacity:0, y: 50}} 
          whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
          viewport={{once:false, amount:.5}}>
            Hi! My name is Henrique, and I am a Portuguese Web Developer and Computer Sciences Engineer. 
            I live in Aveiro, but I was born and raised in the arid lands of Alentejo. I am currently 
            still developing my knowledge, undertaking a masters degree in the University of Aveiro. 
            I love challenges, and I have a fervorous drive for being the best and excelling at everything 
            I do, and I believe my main traits are my open-mindedness, my great socials skills and ability 
            to work in a team environment, and my desire to excel.
          </motion.p>
          
          <div className="header-container">
            <motion.img src="./book.svg"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.5}} className="about-img" />
            <motion.h1 
              className="about-h1"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.5}}> Academic background: </motion.h1>
          </div>
          <Timeline/>

          <div className="header-container">
            <motion.img src="./profile.svg"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.5}} className="about-img" />
            <motion.h1 
              className="about-h1"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.5}}> Who I am: </motion.h1>
          </div>
        
          <motion.p
          initial={{opacity:0, y: 50}} 
          whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
          viewport={{once:false, amount:.5}}>
            Hi! My name is Henrique, and I am a Portuguese Web Developer and Computer Sciences Engineer. 
            I live in Aveiro, but I was born and raised in the arid lands of Alentejo. I am currently 
            still developing my knowledge, undertaking a masters degree in the University of Aveiro. 
            I love challenges, and I have a fervorous drive for being the best and excelling at everything 
            I do, and I believe my main traits are my open-mindedness, my great socials skills and ability 
            to work in a team environment, and my desire to excel.
          </motion.p>
        
          
        </div>
      </div>
    </>
  );
}

export default Transition(About);
