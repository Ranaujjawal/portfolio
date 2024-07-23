import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import ProjectCard from './components/project';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import Leetcode from './components/leetcode';
import Codechef from './components/codechef';
import Campus from './components/svgicons/campuschatapp.jpeg';
import Law from './components/svgicons/Azure-Log-Analytics-Workspace.webp';
import Tech from './components/svgicons/techfest.PNG';
import Weather from './components/svgicons/weather.PNG';
import pc from './components/svgicons/pfw.PNG'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div id="hero" className="projects-heading"><h2>Projects</h2></div>
      <section id="hero" className="project">
      <ProjectCard 
        title="Chat App"
        description=" This is an anonymous group chatting application without to give freedom to share indeas without being judged
among the college students"
        imageUrl={Campus}
        githubLink="https://github.com/yourusername/your-repo"
        demoLink="https://campusgroupchat-9318.vercel.app/"
      />
      <ProjectCard
        title=".Net C# library"
        description=" This is a robust library built using C#, .Net and Azure resources to enable secure cross-tenant fetching and writing
Logs utilizing subscription-id, resource group name and .pfx certificate to auth to Azure AAD App."
         imageUrl={Law}
        githubLink="https://github.com/yourusername/your-repo"
        demoLink="https://www.nuget.org/packages/UJR_Law.read.write.crosstenant_UJR/"
      />
      <ProjectCard
        title="My Portfolio"
        description="This is a portfolio website built in React utilizes Nodejs deployed api to fetch realtime data from leetCode
        and codeChef"
        imageUrl={pc}
        githubLink="https://github.com/yourusername/your-repo"
        demoLink="https://example.com/demo"
      />
      <ProjectCard
        title="Tech Fest website"
        description="This is a sample responsive tech-fest website"
        imageUrl={Tech}
        githubLink="https://github.com/yourusername/your-repo"
        demoLink="https://ranaujjawal.github.io/techfest/"
      />
      <ProjectCard
        title="Weather App"
        description="This is a weather application built in React utilizing open-weather API"
         imageUrl={Weather}
        githubLink="https://github.com/yourusername/your-repo"
        demoLink="https://63a49e5b771eab029357014d--effortless-twilight-be58fc.netlify.app/"
      />
    </section>
    <div className="projects-heading"><h2>Stats</h2></div>
    <div className="slideshow">
      <div className="slide slide-1">
        <Leetcode />
      </div>
      <div className="slide slide-2">
        <Codechef />
      </div>
    </div>
    <div className="projects-heading"><h2>Skills</h2></div>
      <Skills />
      <div className="projects-heading"><h2>Contact Me</h2></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
