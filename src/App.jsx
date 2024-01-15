import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { Router } from "./routes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
