import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import Home from "../Home/Home";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import NavBar from "../Navbar/NavBar";
import Work from "../Work/Work";
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </AnimatePresence>
      </Provider>
    </>
  );
}

export default App;
