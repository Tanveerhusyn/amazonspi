import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Updates from './components/updates/Updates';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
         <Navbar/>
         <Updates/>
        <Routes>
          <Route exact path="/:id"  element={<Updates/>} />
          <Route exact path="/"  element={<Updates/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
