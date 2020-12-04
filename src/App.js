import './App.css';
import Characters from './components/characters/Characters';
import Header from './components/header/Header';
import Episodes from './components/episodes/Episodes';
import Locations from './components/locations/Locations';
import {BrowserRouter, Route,} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
    <div className="header">
      <Header/>
    </div>
    <div className="intro-wrapper">
    <Route path="/Characters">
        <Characters />
    </Route> 
    <Route path="/Episodes">
        <Episodes />
    </Route> 
    <Route path="/Locations">
        <Locations />
    </Route>
      </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
