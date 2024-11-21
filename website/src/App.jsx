import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <section id="projects">
        <ProjectCard
          title="Project 1: Sloth Clothing Store"
          description="A fun online store for sloth-themed clothing."
          link="https://your-project-link.com"
        />
        <ProjectCard
          title="Project 2: Mountain Bike App"
          description="An app that provides information on the hottest bike trails of the day."
          link="https://your-project-link.com"
        />
        <ProjectCard
          title="Project 3: AI Music Visualizer"
          description="A real-time music visualizer powered by AI."
          link="https://your-project-link.com"
        />
      </section>
    </>
  );
}

export default App;
