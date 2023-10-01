import React, { useEffect, useState } from 'react';
import MOVIE_URL from '../APIS/MovieAPI';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UpdateMovieModal from './UpdateMovieForm';
import { Button,  Table } from 'reactstrap';




function Movie() {
  const { id } = useParams(); 
  const [movie, setMovie] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
     let data = await axios.get(MOVIE_URL + `/${id}`)
     console.log(data.data)
     setMovie(data.data)
    }
    getMovie();
  }, [id, updateSuccess])

  const handleUpdateSuccess = () => {
    setUpdateSuccess(true);
    toggleModal();
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };



  return ( 
  <Table dark>
    <thead>
      <tr>
        <th>Update</th>
        <th>Poster</th>
        <th>Movie Name</th>
        <th>Description</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
        <Button onClick={toggleModal}>Update Movie</Button>
        </td>
        <td>
          <img 
            className='movieImage' 
            src={movie.image} 
            alt='Movie poster'/></td>
        <td className='pretty'>
          {movie.name}
        </td>
        <td className='pretty'>
          {movie.description}
        </td>
        <td className='pretty'>
          {movie.rating}
        </td>
      </tr>
      </tbody>
      <UpdateMovieModal 
        isOpen={isModalOpen}
        toggle={toggleModal}
        movieId={id}
        onUpdateSuccess={handleUpdateSuccess}/>
  </Table>

  );
}

export default Movie;