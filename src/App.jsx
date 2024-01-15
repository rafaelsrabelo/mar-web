import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { Router } from "./routes";
import AuthContext from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContext.Provider
        value={{
          name: "Rafael Rabelo",
          email: "teste@gmail.com",
          token: "12312312312312312",
        }}
      >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthContext.Provider>
      <GlobalStyle />
    </>
  );
}

export default App;
