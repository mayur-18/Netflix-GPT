import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return <p className="text-white">No movies available.</p>; // Handle empty movies case
  }

  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-none scroll-smooth">
        {/* Movie list container */}
        <div className="flex space-x-4"> {/* Added space between movie cards */}
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
