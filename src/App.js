import logo from './logo.svg';
import './App.css';
import Headerr from './components/Headerr';
import Homecontainer from './components/Homecontainer';
import Cardsection from './components/Cardsection';
import Trackcalories from './components/Coaches';
import Coaches from './components/Coaches';
import ProfilePage from './components/pages/ProfilePage';

import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
     <Headerr/>
     <Routes>
      <Route path='/Profile'element={<ProfilePage/>}/>
     </Routes>
      <Homecontainer/>
      <Cardsection/>
      <Coaches/>
       
      
      
    </div>
  );
}

export default App;
