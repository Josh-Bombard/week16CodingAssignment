import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import MovieList from './MovieComponents/MovieList';
import MovieCard from './MovieComponents/Movie';
import NavBar from './Components/ImprovedNavBar';
// import Users from './Components/UserList';




function App() {
  return (
    <div>
      
      <NavBar />

      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/movie-list' element={<MovieList />}/>
          {/* <Route path='/users' element={<Users />}/> */}
          <Route path='/movie-card/:id' element={<MovieCard />} />
        </Routes>

    </div> 

  </div>
  
  );
}

export default App;
