import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App({setCallback}) {
  
  useEffect(() => {
    window.onGoogleLoad = () => {
      
      alert(window.gapi);
      
    }
    
    //entrypoint method of Google API
    window.onSignIn = (googleUser) => {
      
    }
    
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
