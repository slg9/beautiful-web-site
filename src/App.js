import "./App.css";
import { Switch, Route } from "react-router-dom";
import MenuApp from "./components/menu/MenuApp";
import Body from "./components/body/Body";
import Services from "./components/body/pages/Services";
import Footer from "./components/footer/Footer";
import Products from "./components/body/pages/Products";


function App() {
    return (
    <div className="app">
      <MenuApp />
      <Switch>
        <Route path="/Services">
          <Services />
        </Route>
        <Route path="/products">
          <Products/>
        </Route>
        <Route path="/">
          <Body />
        </Route>
      </Switch>

      <Footer /> 
      
    </div>
  );
}

export default App;
