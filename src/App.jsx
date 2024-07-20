import './App.css';
import PersonDetails from './components/PersonDetails';
import StarWars from './components/star-wars';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes >
        <Route path='/' element={<StarWars/>}/>
        <Route path='/person/:id' element={<PersonDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
