import { render, screen } from "@testing-library/react";
import ProjectList from "../components/ProjectList";

const mockProjects = [
  { id: 1, title: "Portfolio Website", description: "Personal portfolio" },
];

test("renders projects list", () => {
  render(<ProjectList projects={mockProjects} deleteProject={() => {}} />);
  expect(screen.getByText("Portfolio Website")).toBeInTheDocument();
});

test("shows empty message when no projects", () => {
  render(<ProjectList projects={[]} deleteProject={() => {}} />);
  expect(screen.getByText("No projects found.")).toBeInTheDocument();
});