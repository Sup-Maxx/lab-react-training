import logo from './logo.svg';
import './App.css';
import IdCard from "./components/IdCard"
import Greetings from './components/Greetings';

function App() {
  return (
    <div className="App">

      {/* Iteration 1 */}
      {/* <div>
        <IdCard
          firstName="John"
          lastName="Doe"
          gender="Male"
          height="1.78"
          birthDate="14/07/1992"
          image="https://randomuser.me/api/portraits/men/2.jpg"
        />
        <IdCard 
          firstName="Delores"
          lastName="Obrien"
          gender="female"
          height={168}
          birthDate="11/05/1988"
          image="https://randomuser.me/api/portraits/women/10.jpg"
        />
      </div> */}

      {/* Iteration 2 */}
      <div>
        {/* you may choose between german, french, italian, spanish, english, portuguese, and hebrew */}

        <Greetings lang = "es"> Ludwig </Greetings>
      </div>

      {/* Iteration 3 */}
      <div>

      </div>
    </div>
  );
}

export default App;
