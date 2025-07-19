import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import Skills from "./components/Skills"
import BackgroundVideo from "./components/BackgroundVideo";
import Experience from "./components/Experience";
import ProjectsPage from "./components/ProjectsPage"
import ResumePage from "./components/ResumePage";
import ContactPage from "./components/ContactPage"
import BgAudio from "./components/BgAudio";
function App() {
  return (
    <>
    
    <BackgroundVideo />
    <BgAudio />
      <LandingPage />
      <main>
        <HomePage />
        <AboutPage />
        <Skills />
        <Experience/>
        <ProjectsPage/>
        <ResumePage/>
        <ContactPage/>
      </main>
    </>
  );
}

export default App;
