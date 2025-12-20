import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contextApi/useAuth.jsx";
import UseGetMessage from "./contextApi/useGetMessage.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <UseGetMessage>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UseGetMessage>
  </AuthProvider>
);
