
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";

const Browse = () => {

    useNowPlayingMovies();
   
    return (
        <>
            <Header />
            <Maincontainer/>
            <Secondarycontainer/>
        </>
    );
};

export default Browse;
