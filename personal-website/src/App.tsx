import Sidenav from "./components/Sidenav";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  return (
    <div>
    <Sidenav />
    <Home/>
    <AboutMe/>
    <Projects/>
    <Contact/>
    </div>

  );
}

export default App
