import { useState } from "react";

export default function ProjectList({
  projects,
  deleteProject,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-500">
        Projects
      </h2>

      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-black"
      />

      {filteredProjects.length === 0 ? (
        <p className="text-gray-500">
          No projects found.
        </p>
      ) : (
        <div className="space-y-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-500">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {project.description}
                  </p>
                </div>
                <button
                  onClick={() => deleteProject(project.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition font-bold"
                >
                  x
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}