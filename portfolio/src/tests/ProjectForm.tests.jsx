import { render, screen } from "@testing-library/react";
import ProjectForm from "../components/ProjectForm";

test("renders Add Project button", () => {
  render(<ProjectForm addProject={() => {}} />);
  expect(screen.getByRole("button", { name: /add project/i })).toBeInTheDocument();
});