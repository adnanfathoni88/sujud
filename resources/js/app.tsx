import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Main from "./src/main";

const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
    const root = createRoot(rootElement);
    root.render(
        <StrictMode>
            <Main />
        </StrictMode>
    );
}
