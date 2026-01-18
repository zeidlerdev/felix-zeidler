import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import FrontendModule from "../modules/FrontendModule.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FrontendModule />
  </StrictMode>
);
