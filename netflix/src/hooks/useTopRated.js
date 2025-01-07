import { useEffect } from "react";
import { options } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies, addTopRated } from "../Utils/movieSlice";

const useTopRated = () => {
    const dispatch = useDispatch();

    const ggetTopRated = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", options);
            const json = await data.json();
            console.log(json.results)
            dispatch(addTopRated(json.results));  // Dispatch the movie data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        ggetTopRated();  // Trigger the movie fetch
        console.log("Popular movies fetched");
    }, [dispatch]);  // Adding dispatch as a dependency is a good practice

    // return null;  // As it's a custom hook, returning null is okay if it doesn’t need to return anything
};

export default useTopRated;
