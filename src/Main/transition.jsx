import { motion } from "framer-motion";
import "./transition.css"
import "./index.css";
import { useSelector } from "react-redux";

const transition = (Cmp) => {

  
  
  return () => (
    <>
      <Cmp />

      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {" "}
        <img src={useSelector((state) => state.image.imageSrc)} className="H" />{" "}
      </motion.div>

      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {" "}
        <img src={useSelector((state) => state.image.imageSrc)} className="H" />
      </motion.div>
    </>
  );
};

export default transition;
