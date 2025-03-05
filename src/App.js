import logo from './logo.svg';
import './App.css';
import Headerr from './components/Headerr';
import Homecontainer from './components/Homecontainer';
import Cardsection from './components/Cardsection';
import Trackcalories from './components/Coaches';
import Coaches from './components/Coaches';

function App() {
  return (
    <div>
      <Headerr/>
      <Homecontainer/>
      <Cardsection/>
      <Coaches/>
    </div>
  );
}

export default App;
