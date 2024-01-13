import GlobalStyle from "./styles/global";
import SignIn from "./pages/SingIn/index";
import SignUp from "./pages/SingUp/index";

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Mar + Saúde</h1> */}
      <SignUp />
      <GlobalStyle />
    </>
  );
}

export default App;