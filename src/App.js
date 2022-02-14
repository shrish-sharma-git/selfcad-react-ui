import ProjectCard from "./components/ProjectCard";
import Jumbotron from "./components/Jumbotron";
import './app.css'

function App() {
  return (
    <div>
      <Jumbotron />
      <div className="project-section">
        <ProjectCard />
        
      </div>
    </div>
  );
}

export default App;
