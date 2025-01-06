import { useEffect } from "react";
import { options ,url } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/movieSlice";

const useNowPlayingMovies = ()=>{

    const dispatch = useDispatch()
    const getting = async () => {
        try {
            const data = await fetch(url, options);
            const json = await data.json();
          
            dispatch(addNowPlayingMovies(json.results))
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    

    useEffect(() => {
        getting();
        console.log("it is called")
    },[]);


}
export default useNowPlayingMovies;