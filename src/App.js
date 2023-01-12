
import './App.css';
import {Route,Routes} from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header';
import Error from './Error';
import SingleMovie from './Components/SingleMovie';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/ImdbMovies'element={<Home />} />
      <Route path='/ImdbMovies/movie/:id'element={<SingleMovie />} />
      <Route path='*' element ={<Error/>} />
    </Routes>
  
    </>
  );
}

export default App;
