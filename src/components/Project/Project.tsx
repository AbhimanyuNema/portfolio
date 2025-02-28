import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        {projects.map((project, index) => (
          <ScrollAnimation key={index} animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noreferrer">
                    </a>
                  )}
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}

const projects = [
  {
    title: "Sage Pass Solution",
    description: "A voice-activated AI assistant for multi-role task management.",
    githubLink: "https://github.com/AbhimanyuNema/SAGE-PASS-SOLUTION-",
    technologies: ["Firebase", "OpenAI API", "Python", "NLP", "Speech Recognition", "Flask/FastAPI"],
  },
  {
    title: "Skin Detection",
    description: "An AI-powered skin analysis tool for detecting skin conditions.",
    githubLink: "https://github.com/AbhimanyuNema/SkinGpt",
    technologies: ["TensorFlow/Keras", "OpenCV", "MySQL"],
  },
  {
    title: "Floor Visualizer",
    description: "A computer vision app to preview different flooring styles.",
    githubLink: "https://github.com/AbhimanyuNema/floor-visualiszer",
    technologies: ["Android Studio (Kotlin)", "Deep Learning for Image Processing", "Firebase"],
  },
  {
    title: "Hate Speech Recognizer",
    description: "An NLP model for detecting hate speech in online conversations.",
    githubLink: "https://github.com/AbhimanyuNema/Hate-speech-s",
    technologies: ["Full Stack", "Scikit-Learn", "Transformer Models", "FastAPI", "Firebase Firestore"],
  },
  {
    title: "Document Classifier",
    description: "An AI model that categorizes and organizes documents automatically.",
    githubLink: "https://github.com/AbhimanyuNema/document-classifier",
    technologies: ["NLP", "Text Classification", "Python", "Pandas", "FastText", "AWS Blob Storage"],
  },
  {
    title: "Fender",
    description: "A cloud-based file-sharing platform with secure storage solutions.",
    githubLink: "",
    liveDemo: "",
    technologies: ["React", "TypeScript", "HTML", "CSS"],
  }
];
