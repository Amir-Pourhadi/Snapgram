import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "@/App.tsx";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
root.render(
  <Router>
    <App />
  </Router>
);
