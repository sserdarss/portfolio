import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        </Routes>
        <Footer />
 
    </>
  );
}

export default App;
