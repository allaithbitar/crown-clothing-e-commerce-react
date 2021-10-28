import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route, Switch } from "react-router";

const HatsPage = () => (
  <div>
    <h1>Hats PAGE</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
