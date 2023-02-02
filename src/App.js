import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import Tooglemg from './Components/Tooglemg';
import ClickCounter from './Components/ClickCounter';
import Nav from './Components/Nav';
import dashboard from './CRUD/Dashboard'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>WELCOME YOU ALL IN  REACT SESSION</h1>
      <Nav></Nav>
      <BrowserRouter>
      <Routes>
          <Route path='/dashboard'element={<dashboard></dashboard>}></Route>
          <Route path="/togglemg" element={<Tooglemg></Tooglemg>}></Route>
          <Route path="/clickcounter" element={<ClickCounter></ClickCounter>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
