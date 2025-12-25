import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DemoTest } from "./screens/DemoTest";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DemoTest />
  </StrictMode>,
);
