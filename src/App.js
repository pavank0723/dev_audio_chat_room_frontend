import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Activate, Authenticate, Error, Home, Rooms } from './pages';
import { Navigation } from './components';
import { GuestRoute } from './routes';


function App() {
  return (

    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} /> */}
        <Route path='/*' element={<Error />} />
        <Route path='/authenticate' element={<Authenticate />} />
        <Route path='/activate' element={<Activate />} />
        <Route path='/rooms' element={<GuestRoute Component={Rooms} />} />
      </Routes>
    </>
  );
}

export default App;
