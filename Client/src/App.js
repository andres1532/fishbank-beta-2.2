import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./component/Login/Login";
import Manager from "./component/Manager/Manager";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Manager" component={Manager} />
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
