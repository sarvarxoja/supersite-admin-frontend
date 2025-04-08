import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:2222"
let token = localStorage.getItem("accessToken");

if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
