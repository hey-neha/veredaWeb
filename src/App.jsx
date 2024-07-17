import "./App.css";
import Companies from "./components/Companies";
import Company from "./components/Company";
import DevelopmentProc from "./components/DevelopmentProc";
import Footer from "./components/Footer";
import Fueling from "./components/Fueling";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Number from "./components/Number";
import ProjectIdea from "./components/ProjectIdea";
import ProjectideaLast from "./components/ProjectideaLast";
import SelectProject from "./components/SelectProject";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero/> */}
      <Hero />
      <Number />
      <Companies />
      <Company />
      <DevelopmentProc />
      <Fueling />
      <ProjectIdea />
      <SelectProject />
      <ProjectideaLast />
      <Footer />
    </>
  );
}

export default App;
