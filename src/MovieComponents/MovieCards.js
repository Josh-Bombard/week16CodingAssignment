import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import MOVIE_URL from '../APIS/MovieAPI';
import axios from 'axios';


function MovieCards({ movie, onDeleteMovie }) {

  const handleDeleteClick = () => {
    axios.delete(MOVIE_URL +`/${movie.id}`)
      .then((response) => {
        onDeleteMovie(movie.id);
      })
      .catch((error) => {
        console.error('Error deleting movie:', error);
      });
  };




  return (
  <div>
  <Card className='customCard text-center'>
    <CardBody>
      <CardTitle className='pretty'>{movie.name}</CardTitle>
      <CardSubtitle className='pretty'>Rating: {movie.rating}</CardSubtitle>
    </CardBody>
    <p className='pretty'>Click Here ▼</p>
    <Link to={`/movie-card/${movie.id}`}>
    <img className='cardImage' src={movie.image} alt="Movie card display" />
    </Link>
    <CardBody>
      <CardText className='pretty'>{movie.description}</CardText>
        <Button className='pretty' onClick={handleDeleteClick} color='danger'>Delete</Button>

    </CardBody>
  </Card>
  <br></br>
</div>
    );
}

export default MovieCards;