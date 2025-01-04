import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Experiences from "./pages/Experiences";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: (
      <div className="text-center text-4xl text-orange-600">
        Oops Page Not found
      </div>
    ),
  },
  {
    path: "experience",
    element: <Experiences></Experiences>,
  },
  {
    path: "/projects/:projectId",
    element: <ProjectDetails></ProjectDetails>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
