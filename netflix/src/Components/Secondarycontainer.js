import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  // const movi = useSelector((store) => store.movie?.popularMovies);


  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-72 pl-4 md:pl-12 relative z-20 hover:bg-opacity-50">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRated} />

          <MovieList title={"Popular"} movies={movies.popularMovies} />

          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upcoming}
          />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;