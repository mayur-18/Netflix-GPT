import { useEffect } from "react";
import { options } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopular = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", options);
            const json = await data.json();
            console.log(json.results)
            dispatch(addPopularMovies(json.results));  // Dispatch the movie data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getPopular();  // Trigger the movie fetch
        console.log("Popular movies fetched");
    }, [dispatch]);  // Adding dispatch as a dependency is a good practice

    // return null;  // As it's a custom hook, returning null is okay if it doesn’t need to return anything
};

export default usePopularMovies;
