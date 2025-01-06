
import {  useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieid }) => {
    
useMovieTrailer(movieid)
    const trailerVideo = useSelector((store) => store.movie?.trailerVideo);


    // Check if trailerVideo is available before rendering
    if (!trailerVideo) {
        return <p>Loading video...</p>; // Show loading message until trailer is fetched
    }

    return (
        <div >
         
         
         
         <iframe
    className=" object-cover w-screen aspect-video"
    src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
></iframe>


        </div>
    );
};

export default VideoBackground;
