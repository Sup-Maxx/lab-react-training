import logo from './logo.svg';
import './App.css';
import IdCard from "./components/IdCard"
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';

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

        <Greetings lang = "it"> Bambina </Greetings>
      </div>

      {/* Iteration 3 */}
      {/* <div>
        <Random minNumber={1} maxNumber={45}/>
      </div> */}

      {/* Iteration 4 */}
      {/* <div>
        <BoxColor red={0} green={255} blue={10}/>
      </div> */}

      {/* iteration 5 */}
      {/* <div>
        <CreditCard 
          type="Visa"
          number="0123456789010995"
          month={3}
          year={2021}
          bank = "N26"
          owner = "Maxeen Bouret"
          bgColor = "darkblue"
          color="white"
        />
      </div> */}

      {/* Iteration 6 */}
      <div>
        <Rating>3.6</Rating>
        
      </div>

    </div>
  );
}

export default App;
