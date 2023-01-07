import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
