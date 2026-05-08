import { useState } from "react";

export default function useProjects() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Building of Roads And Bridges", description: "" },
    { id: 2, title: "Repairing of Potholes", description: "" },
    { id: 3, title: "Construction of Railways", description: "" },
  ]);

  const addProject = (title, description) => {
    const newProject = {
      id: Date.now(),
      title,
      description,
    };

    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  const deleteProject = (id) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== id)
    );
  };

  return {
    projects,
    addProject,
    deleteProject,
  };
}