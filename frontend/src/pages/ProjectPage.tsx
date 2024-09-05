import React, { useEffect, useState } from 'react';

const ProjectPage: React.FC = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Buscar projetos da API
  }, []);

  return (
    <div className="projects-container">
      <h2>Seus Projetos</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {project.name}
            {/* Botões de ação */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
