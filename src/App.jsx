import { BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Skills from "./Skills"
import Contacts from "./Contacts"
import NavBar from "./NavBar"
import { AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"

function App() {
  const location = useLocation();
  return (
    <>
      
        <NavBar/>
        <AnimatePresence  mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
        </AnimatePresence>
      
      
    </>
  )
}

export default App
