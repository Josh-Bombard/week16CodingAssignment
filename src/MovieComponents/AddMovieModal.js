import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import MOVIE_URL from '../APIS/MovieAPI';

function MovieAddModal({ isOpen, toggle, onAddMovie }) {
  //make state an empty object with the matching props as the data that we're grabbing
  const [newMovie, setNewMovie] = useState({
    name: '',
    description: '',
    rating: 0,
    image: '',
  });

  const handleNewMovieChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: value,
    });
  };

  const handleAddMovie = async () => {
    try {
      // Send a POST request to add the new movie
      const response = await axios.post(MOVIE_URL, newMovie);
      // Notify the parent component that a new movie has been added
      onAddMovie(response.data);
      // Clear the form fields
      setNewMovie({
        name: '',
        description: '',
        rating: 0,
        image: '',
      });
      toggle()
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add a New Movie</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" value={newMovie.name} onChange={handleNewMovieChange} />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="text" name="description" id="description" value={newMovie.description} onChange={handleNewMovieChange} />
          </FormGroup>
          <FormGroup>
            <Label for="rating">Rating</Label>
            <Input type="number" name="rating" id="rating" value={newMovie.rating} onChange={handleNewMovieChange} />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image URL</Label>
            <Input type="text" name="image" id="image" value={newMovie.image} onChange={handleNewMovieChange} />
            <Label for="wideImage" >Wide Image URL</Label>
            <Input type='text' name='wideImage' value={newMovie.wideImage} onChange={handleNewMovieChange}/>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={handleAddMovie}>Add Movie</Button>{' '}
        <Button color="warning" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

//Use to add new movie
//Spider-Man 
//"Spider-Man" (2002) tells the story of Peter Parker, played by Tobey Maguire, who gains superpowers after a spider bite. He becomes Spider-Man and battles the villainous Green Goblin while navigating his personal life and feelings for Mary Jane Watson.
//https://image.tmdb.org/t/p/original/wZGlaMxBAjCIYLzyDWvocaoNooZ.jpg
//https://wallup.net/wp-content/uploads/2019/09/748832-spider-man-superhero-marvel-spider-man-action-spiderman.jpg

export default MovieAddModal;