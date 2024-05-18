import Main from './src/main'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/style.css';
import 'flatpickr/dist/flatpickr.min.css';
import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
    const root = createRoot(rootElement);
    root.render(
        <StrictMode>
            <Main />
        </StrictMode>
    );
}
