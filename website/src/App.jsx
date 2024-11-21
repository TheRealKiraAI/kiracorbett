import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import kira from "./assets/kira.jpeg";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <section id="info">
        <div className="left-col">
          <h1>Also known as "The Real Kira AI."</h1>
          <h3>
            Kira Corbett is a software engineer, curriculum developer, and
            instructor. As a software engineer, she has focused on robotics,
            simulation, drone data services, and full-stack development at
            Oregon State University, Autodesk, and Aerial Data Labs. Kira is a
            Founding Engineer for 2 startups - one of which integrates 3D
            photogrammetry work. Today, Kira continues to fuse the exploration
            in AI and human-computer interactions within education sectors
            through development.
          </h3>
          <a
            href="https://github.com/TheRealKiraAI"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kira-corbett/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/TheRealKiraAI"
            target="_blank"
            rel="noopener noreferrer"
          >
            Social
          </a>
          <a
            href="https://ir.library.oregonstate.edu/concern/honors_college_theses/3t945z87r"
            target="_blank"
            rel="noopener noreferrer"
          >
            Publication
          </a>
        </div>
        <div className="right-col">
          <img src={kira} alt="Kira Corbett Profile Image" />
        </div>
      </section>
      {/* <section id="projects">
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
      </section> */}
    </>
  );
}

export default App;
