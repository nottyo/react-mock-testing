import './App.css';
import Parent from './components/Parent';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header" data-testid="app-header">
        <Parent />
        <UserProfile />
      </header>
    </div>
  );
}

export default App;
