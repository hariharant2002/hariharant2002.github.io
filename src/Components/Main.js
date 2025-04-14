import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Publications from "./Publications";
import Projects from "./Projects";
import Education from "./Education";
import Achievements from "./Achievements";
import Footer from "./Footer";
import Contact from "./Contact";

const Main = () => (
  <main id="main">
    <About />
    <Education />
    <Experience />
    <Projects />
    <Skills />
    <Publications/>
    <Achievements />
    <hr />
    <Footer />
  </main>
);

export default Main;
