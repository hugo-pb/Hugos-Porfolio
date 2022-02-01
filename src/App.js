import "./App.css";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Greating from "./components/Greating";
import Name from "./components/Name"
import Experience from "./components/Experience";
function App() {
  return (
    <div className="App container">
      <div className="Background section">
       <Greating />
        <Contact />
        <Background />
        <Name/>
      </div>
      <div className="section">
        <Projects />
        <Experience />
      </div>
      <Footer />
    </div>
  );
}

export default App;
