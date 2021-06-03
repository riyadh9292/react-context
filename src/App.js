import logo from './logo.svg';
import './App.css';
import Component3 from './components/Component3';
import Component1 from './components/Component1';
import { AppProvider } from './Context';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Component1/>
      </div>
    </AppProvider>
    
  );
}

export default App;
