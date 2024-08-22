import { createRoot } from "react-dom/client";
import App from "../components/App";

const rootElem = document.getElementById("root");
const root = createRoot(rootElem as HTMLElement);

root.render(<App />);
