import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col items-center justify-center md:flex-row gap-10 px-10">
        <ProjectCard
          src="/calamity.png"
          title="Natural Calamity Predictor"
          description="Developed a machine learning-based system to predict natural calamities such as hurricanes, earthquakes, and wildfires, leveraging historical data and real-time monitoring."
        />
        
      </div>
    </div>
  );
};

export default Projects;
