import React, { useState } from 'react';
import '../css/Projects.css'; // Import CSS for Projects

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null); // State to manage selected project for modal

  const projects = [
    {
      id: 1,
      title: "Hospital Management System",
      img: "hospi.jpg",
      link: "https://github.com/kishan0725/Hospital-Management-System",
      screenshots: ["screenshot (471).png", "screenshot (472).png", "screenshot (473).png","screenshot (474).png","screenshot (476).png"] // Add multiple screenshots
    },
    {
      id: 2,
      title: "HealthCare Management System",
      img: "strokei.jpg",
      link: "https://github.com/vlasov01/StrokeCareAIAssistant/",
      screenshots: ["screenshot (477).png", "screenshot (478).png", "screenshot (479).png","screenshot (480).png" ,"screenshot (481).png"]
    },
    {
      id: 3,
      title: "Restaurant Management System ",
      img: "restau.jpg",
      link: "https://github.com/harismuneer/Restaurant-Management-System",
      screenshots: ["screenshot (482).png", "screenshot (483).png", "screenshot (484).png","screenshot (485).png","screenshot (486).png"]
    },
    // Add more projects as needed
  ];

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-gallery">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <div className="buttons">
              {/* Button for viewing the screenshots */}
              <button className="btn view-btn" onClick={() => openProject(project)}>
                View
              </button>
              {/* Button for GitHub navigation */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn github-btn"
              >
                View My Project on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying project screenshots */}
      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedProject.title}</h2>
            <div className="screenshot-gallery">
              {selectedProject.screenshots.map((screenshot, index) => (
                <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} className="screenshot-img" />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
