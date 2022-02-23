import './App.css';
import Parent from './components/Parent';

function App() {
  return (
    <div className="App">
      <header className="App-header" data-testid="app-header">
        <Parent />
      </header>
    </div>
  );
}

export default App;
