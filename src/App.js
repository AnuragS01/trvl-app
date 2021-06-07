import Navbar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/home";
import "./App.css";
import Services from "./components/pages/services";
import Products from "./components/pages/product";
import SignUp from "./components/pages/sign-up";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
