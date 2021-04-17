import {BrowserRouter as Router, Route} from "react-router-dom"
import {Provider} from "react-redux";
import store from "./store";
import './App.css';
import Navv from "./components/Nav"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Details from "./components/Details";
import All from "./components/All";
import Log from "./Log";


function App() {
  return (
    <Router>
     <Provider store={store}>
     <Navv />
     <Route path="/" exact component={Home} />
     <Route path="/cart" exact component={Cart} />
     <Route path="/details/:id" exact component={Details} />
     <Route path="/All" exact component={All} />
     <Route path="/Log" exact component={Log} />

     </Provider>
    </Router>
  );
}

export default App;
