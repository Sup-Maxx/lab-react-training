import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';


function App() {
  return (
    <div className="App">
      <IdCard
        firstName="Max"
        lastName="Ko"
        gender="Male"
        height="1.78"
        birthDate="08/09/1998"
        image="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      />
    </div>
  );
}

export default App;
