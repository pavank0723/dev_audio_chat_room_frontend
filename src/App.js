import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Activate, Authenticate, Error, Home, Rooms } from './pages';
import { Navigation } from './components';
import { GuestRoute, ProtectedRoute, SemiProtectedRoute } from './routes';


function App() {
  return (

    <>
      <Navigation />
      <Routes>
        <Route element={<GuestRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/authenticate' element={<Authenticate />} />
        </Route>

        {/* <Route path='/' element={<GuestRoute Component={Home}/>} /> */}

        <Route path='/*' element={<Error />} />

        {/* <Route path='/activate' element={<Activate />} /> */}

        {/* <SemiProtectedRoute path='/activate' Component={Activate}/> */}
        <Route element={<SemiProtectedRoute />}>
          <Route path='/activate' element={<Activate />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/rooms' element={<Rooms />} />
          </Route>

        </Route>


      </Routes>
    </>
  );
}

export default App;
