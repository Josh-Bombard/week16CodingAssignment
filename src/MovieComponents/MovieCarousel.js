import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import MOVIE_URL from '../APIS/MovieAPI';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MovieCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      movies: [], // Initialize an empty array for the fetched movies
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount() {
    // Fetch the movie data from the API when the component mounts
    axios.get(MOVIE_URL)
      .then((response) => {
        this.setState({ movies: response.data });
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.movies.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.movies.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex, movies } = this.state;

    const slides = movies.map((movie, index) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}
        > 
        <Link to={`/movie-card/${movie.id}`}>
          <img className='carouselImage' src={movie.wideImage} alt={movie.name} />
        </Link>
          
        </CarouselItem>
      );
    });

    return (
      <Carousel
      className='carousel'
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators className='carousel'  items={movies} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl className='carousel'  direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl className='carousel' direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default MovieCarousel;
