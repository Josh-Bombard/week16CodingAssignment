import React from 'react';
import MovieCarousel from '../MovieComponents/MovieCarousel';


function Home() {
  return ( 
    <div className='pretty'>
      <h1 className='text-center'>Movies</h1>
      <MovieCarousel />
    </div>
   );
}

export default Home;