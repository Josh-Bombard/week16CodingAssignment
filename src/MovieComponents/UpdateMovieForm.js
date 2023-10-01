import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import axios from 'axios';
import MOVIE_URL from '../APIS/MovieAPI';

function UpdateMovieModal({ isOpen, toggle, movieId, onUpdateSuccess }) {
  const [formData, setFormData] = useState({});
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(`${MOVIE_URL}/${movieId}`);
        setMovie(response.data);
        setFormData({
          name: response.data.name,
          description: response.data.description,
          rating: response.data.rating,
          image: response.data.image,
          wideImage: response.data.wideImage
        });
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    if (isOpen) {
      getMovie();
    }
  }, [isOpen, movieId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${MOVIE_URL}/${movieId}`, formData);
      onUpdateSuccess(); // Notify the parent component about the update
      toggle(); // Close the modal after a successful update
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Movie</ModalHeader>
      <form onSubmit={handleSubmit}>
        <ModalBody>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name || ''}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              value={formData.description || ''}
              onChange={handleChange}
              className="form-control"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              name="rating"
              value={formData.rating || ''}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <textarea
              name="image"
              value={formData.image || '' }
              onChange={handleChange}
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="wideImage">Wide Image</label>
            <textarea
              name="wideImage"
              value={formData.wideImage || '' }
              onChange={handleChange}
              className="form-control"
            ></textarea>
          </div>
          {/* Add more form fields for other movie properties */}
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary">
            Update Movie
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
}

export default UpdateMovieModal;

