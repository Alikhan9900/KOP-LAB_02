import React from "react";
import ReactDOM from "react-dom/client"; // Замість react-dom
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Використовується createRoot
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
