import React, { useEffect, useState } from 'react';
import MOVIE_URL from '../APIS/MovieAPI';
import axios from 'axios';
import MovieCards from './MovieCards';
import { Button, Col, Row } from 'reactstrap';
import MovieAddModal from './AddMovieModal';



function MovieList() {
const [movies, setMovies] = useState([])
const [isModalOpen, setIsModalOpen] = useState(false);



  useEffect(() => {
    const getMovies = async () => {
     let data = await axios.get(MOVIE_URL)
     setMovies(data.data)
    }
    getMovies();
  }, [])





  const onDeleteMovie = (movieId) => {
    const updatedMovies = movies.filter((movie) => movie.id !== movieId);
    setMovies(updatedMovies);
  };


  const showMovieCards = movies.map((movie, index) => (
    <Col key={index}  lg="3"> 
      <MovieCards movie={movie} onDeleteMovie={onDeleteMovie}/>
    </Col>
  ));

//------------------------------------------------------//

//Modal section

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleMovieAdded = (newMovie) => {
    // Add the newly created movie to the current list of movies
    setMovies([...movies, newMovie]);
  };

  return (
    <div className='movie-list-container'>
      <h2 className='text-center'>Movie List</h2>
      <Col lg="3">
          <Button color="primary" onClick={toggleModal}>ADD YOUR FAV MOVIE!!!</Button>
      </Col>
      <Row>
        {showMovieCards}
      </Row>
      <MovieAddModal isOpen={isModalOpen} toggle={toggleModal} onAddMovie={handleMovieAdded} />
    </div>


  );
}

export default MovieList;