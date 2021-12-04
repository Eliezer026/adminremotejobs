import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Pages/login";
import Profiles from "./Pages/Profiles";
import Authenticated from "./Components/Authenticated";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Authenticated>
          <Profiles />
        </Authenticated>
      </Route>
      <Route exact path="/login">
        <Authenticated nonAuthenticated={true}>
          <Login />
        </Authenticated>
      </Route>

      <Route path="*" render={() => "404 Not Found"} />
    </Switch>
  );
}

export default App;
