import "./App.css";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App container">
      <Contact />
      <div className="Background section">
        <h3>Hi, this is</h3>
        <Background />
        <h1>Hugo Palomera</h1>
        <p>Front-end Developer based in Edmonton Canada.</p>
      </div>
      <div className="section">
        <Projects />
      </div>
    </div>
  );
}

export default App;
