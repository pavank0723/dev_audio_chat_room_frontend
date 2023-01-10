import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Error, Home, Login, Register } from './pages';
import { Navigation } from './components';


function App() {
  return (
    <>
    <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
