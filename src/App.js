import './App.css';
import { Routes, Route,PrivateRoute } from 'react-router-dom';
import { Authenticate, Error, Home, Login, Register, Rooms } from './pages';
import { Navigation } from './components';
import ProtectedRoute from './utils/ProtectedRouter';


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
        <Route path='/rooms' element={<ProtectedRoute Component={Rooms}/>}/>
      </Routes>
    </>
  );
}

export default App;
