import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import useProjects from "./hooks/useProjects";

export default function App() {
  const { projects, addProject, deleteProject } = useProjects();

return (
  <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
      <Header />
      <ProjectForm addProject={addProject} />
      <ProjectList projects={projects} deleteProject={deleteProject} />
    </div>
  </div>
);
}