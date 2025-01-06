import { useEffect } from 'react';
import { options } from '../Utils/constant';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from "../Utils/movieSlice";

const useMovieTrailer = (movieid) => {
    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`, options);
            const json = await data.json();
         
            const filterdata = json.results.filter((video) => video.type === "Trailer");
            const trailer = filterdata.length ? filterdata[0] : json.results[0];
           
            dispatch(addTrailerVideo(trailer));
        } catch (error) {
            console.error("Error fetching movie video:", error);
        }
    };

    useEffect(() => {
        if (movieid) {
            getMovieVideo();
        }
    }, [movieid]); // Add movieid as a dependency

};

export default useMovieTrailer;
