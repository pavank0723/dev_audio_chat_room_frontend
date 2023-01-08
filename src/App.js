import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import NotFound from './pages/Error/NotFound';
import Navigation from './components/shared/navigation/Navigation';

function App() {
  return (
    <>
    <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
