import Sidenav from "./components/Sidenav";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  return (
    <div>
    <Sidenav />
    <Home/>
    <Experience/>
    <Projects/>
    <Contact/>
    </div>

  );
}

export default App
