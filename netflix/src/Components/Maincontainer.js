import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const Maincontainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movies) return null;

  const mainmovies = movies[4
  ];
  const { original_title, overview, id } = mainmovies;

  return (
    <>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieid={id} />
    </>
  );
};

export default Maincontainer;
