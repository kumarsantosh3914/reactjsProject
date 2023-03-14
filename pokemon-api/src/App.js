// import logo from './logo.svg';
import './App.css';
import SearchPokemon from './components/SearchPokemon';

function App() {
  return (
    <div className="max-w-xl mx-auto px-4 py-8 bg-blue-600">
      <h1 className="text-4xl font-bold mb-8">Pokémon Search</h1>
      <SearchPokemon />
    </div>
  );
}

export default App;
