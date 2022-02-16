import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
    <div>
    <Header/>
    <Switch>
      <Route exact path='/'><Home/></Route>
      <Route  path='/About'><About/> </Route>
      <Route  path='/Contact'><Contact/></Route>
    </Switch>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
