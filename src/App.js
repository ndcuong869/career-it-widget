import "./App.css";
import LoginPage from "./pages/login";
import { Switch, Route } from "react-router-dom";
import RegisterPage from "./pages/register";
import LoginSuccessPage from "./pages/login_success";
import WebchatPage from "./pages/webchat";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/register">
          <RegisterPage />
        </Route>

        <Route path="/login_success">
          <LoginSuccessPage />
        </Route>

        <Route path="/webchat">
          <WebchatPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
