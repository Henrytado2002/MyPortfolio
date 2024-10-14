import Transition from "./transition";
import Timeline from "./timeline";
import Timeline2 from "./Timeline2";
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
              viewport={{once:false, amount:.2}}>ABOUT ME</motion.h1>

          <div className="header-container">
            <motion.img src="./profile.svg"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.2}} className="about-img" />
            <motion.h1 
              className="about-h1"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.2}}> Who I am: </motion.h1>
          </div>
        
          <motion.p
          initial={{opacity:0, y: 50}} 
          whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
          viewport={{once:false, amount:.2}}>
            Hi! My name is Henrique, and I am a Portuguese Web Developer and Computer Sciences Engineer. 
            I live in Aveiro, but I was born and raised in the arid lands of Alentejo. I am currently 
            still developing my knowledge, undertaking a masters degree in the University of Aveiro. 
            I love challenges, and I have a fervorous drive for being the best and excelling at everything 
            I do, and I believe my main traits are my open-mindedness, my ease to learn new things, my great socials skills
            and ability to work in a team environment, and my desire to excel.
          </motion.p>

          <div className="header-container">
            <motion.img src="./book.svg"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.2}} className="about-img" />
            <motion.h1 
              className="about-h1"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.2}}> Academic background: </motion.h1>
          </div>
          <Timeline/>

          <div className="header-container">
            <motion.img src="./keyboard.svg"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.2}} className="about-img" />
            <motion.h1 
              className="about-h1"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.2}}> Professional experience </motion.h1>
          </div>
        
          <Timeline2></Timeline2>
        
          <div className="header-container">
            <motion.img src="./convo.svg"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.2}} className="about-img" />
            <motion.h1 
              className="about-h1"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.2}}> Comunication Skills </motion.h1>
          </div>

          <motion.p
          initial={{opacity:0, y: 50}} 
          whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
          viewport={{once:false, amount:.2}}>
            I've always been an expressive person, capable of easily conveying ideas to others, as well as a good, impartial
            and analytical listener. Whether I'm explaining complex concepts, 
            offering feedback, or collaborating on projects, I have a natural ability to engage people and make my 
            points clear and easy to understand. I also tend to tailor my communication style 
            depending on the audience, which I believe shows my awareness and empathy in every interaction. It’s not just 
            about the words I use, but also how I listen and respond thoughtfully, creating a comfortable and 
            open environment for dialogue. I believe that these skills are a huge asset, especially on my line of work as an engineer,
            designer and problem solver, where clear and effective communication is key to driving success and getting the
            best outcome possible.
            In addition, here are the languages I speak, and my proficiency in them:
            <ul>
              <li>Portuguese - Native</li>
              <li>English - Fluent <a href="./english_cert.pdf" target="_blank">(certificate)</a></li>
              <li>Spanish - Advanced</li>
              <li>Italian - Begginer</li>
            </ul>
          </motion.p>

          <div className="header-container">
            <motion.img src="./people.svg"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.2}} className="about-img" />
            <motion.h1 
              className="about-h1"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.2}}> Networks </motion.h1>
          </div>

          <motion.p
          initial={{opacity:0, y: 50}} 
          whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
          viewport={{once:false, amount:.2}}>
          <ul>
            <li>Academical asdsociation of the University of Évora | Vice-Coordinator of the IT sector </li>
            <li>Computer Engineering Sudents Conglomerate | Vice-Coordinator of the IT department</li>
          </ul>  
          </motion.p>

          <div className="header-container">
            <motion.img src="./organization.svg"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.2}} className="about-img" />
            <motion.h1 
              className="about-h1"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.2}}> Organizational Skills </motion.h1>
          </div>

          <motion.p
          initial={{opacity:0, y: 50}} 
          whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
          viewport={{once:false, amount:.2}}>
          Practice in effective and organized time management, paired with robust data management practices and 
          secure data protocols, ensuring a structured and reliable workflow, maintaining at all times a clear 
          vision for setting and tracking goals, along with a well-defined path to achieve them. 
          Additionally, I approach tasks with a quick and analytical understanding, ensuring efficient 
          execution and insightful problem-solving.
          </motion.p>

          <div className="header-container">
            <motion.img src="./bulb.svg"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.2}} className="about-img" />
            <motion.h1 
              className="about-h1"
              initial={{opacity:0, y: 50}} 
              whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
              viewport={{once:false, amount:.2}}> Personal Interests </motion.h1>
          </div>

          <motion.p className="last-asset"
          initial={{opacity:0, y: 50}} 
          whileInView={{opacity:1, y:0 ,transition:{delay:0.2, duration:0.3}}} 
          viewport={{once:false,}}>
            I consider myself a multifaceted person, with lots of interests, like the following:
          <ul>
            <li>Programming</li>
            <li>Drawing</li>
            <li>Playing and writing music</li>
            <li>Singing</li>
            <li>Gaming</li>
            <li>Reading</li>
            <li>Calisthenics</li>
          </ul>
          </motion.p>

        </div>
      </div>
    </>
  );
}

export default Transition(About);
