
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./MainContainer";
import Secondarycontainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies()
    useTopRated()
    useUpcoming()
   
    return (
        <>
           <div> <Header />
            <Maincontainer/>
            <Secondarycontainer/>
            </div>
        </>
    );
};

export default Browse;
