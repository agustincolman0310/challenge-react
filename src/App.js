// import logo from './logo.svg';
import './App.css';

import SideBar from './components/SideBar';
import {BrowserRouter as Router} from "react-router-dom";
 

function App() {
  return (
    <div className="App card-body">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='btn-danger'>
          Hello <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </header> */}
      {/* <Meal/> */}
      <Router>
      <SideBar/>
      </Router>
    </div>
  );
}

export default App;
