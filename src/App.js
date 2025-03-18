import './App.css';
import Headerr from './components/Headerr';
import Homecontainer from './components/Homecontainer';
import Cardsection from './components/Cardsection';
import Coaches from './components/Coaches';
import ProfilePage from './components/pages/ProfilePage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Only show Header, Homecontainer, Cardsection, and Coaches when not on '/Profile' */}
      <Routes>
        <Route
          path="/Profile"
          element={
            <>
            <Headerr/>
          <ProfilePage />
            </>
          } // Only render ProfilePage without other layout components
        />
        <Route
          path="/"
          element={
            <>
              <Headerr />
              <Homecontainer />
              <Cardsection />
              <Coaches />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
