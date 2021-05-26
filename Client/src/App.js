import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./component/Pages/Login/Login";
import Manager from "./component/Pages/Manager/Manager";
import Mechanic from "./component/Pages/Mechanic/Mechanic";
function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/Mechanic" component={Mechanic} />
        <Route exact path="/Manager" component={Manager} />
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
