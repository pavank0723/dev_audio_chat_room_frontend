import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Activate, Authenticate, Error, Home, Room, Rooms } from './pages';
import { Loader, Navigation } from './components';
import { GuestRoute, ProtectedRoute, SemiProtectedRoute } from './routes';
import { useLoadingWithRefresh } from './hooks';
// import { useSelector } from 'react-redux';


function App() {
  // return <Loader message="Loading, please wait"/>

  //Call Refresh Endpoint
  const { loading } = useLoadingWithRefresh()
  
  return loading 
  ? (
    <Loader message="Loading, please wait" />
  ) 
  : (
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
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path='/rooms' element={<Rooms />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path='/room/:id' element={<Room />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
