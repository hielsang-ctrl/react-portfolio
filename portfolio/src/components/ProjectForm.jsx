import { useState } from "react";

export default function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    addProject(title, description);

    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-6 rounded-xl shadow-md mb-6"
    >
      <div className="mb-4">
        <label className="block mb-2 font-medium text-gray-500">
          Add New Project
        </label>

        <input
          type="text"
          placeholder="Enter project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium text-gray-500">
          Description
        </label>

        <textarea
          placeholder="Enter project description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Add Project
      </button>
    </form>
  );
}