import Trending from './components/trending';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-heading-title">Trending</h2>
        <p className="App-heading-subtitle">See what the Github community is most excited about today</p>
      </header>
      <Trending />
    </div>
  );
}

export default App;
