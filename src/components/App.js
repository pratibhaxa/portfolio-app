import { Navigate, Route, Routes } from "react-router";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path='/projects' element = {<Projects />}></Route>
      <Route path='/about' element = {<About />}></Route>
      <Route path='/contact' element = {<Contact />}></Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    // <Home />
  );
}

export default App;
