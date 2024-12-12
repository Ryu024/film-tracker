import Navbar from './components/NavBar'
import MovieList from './components/MovieList'
import  WatchedMovieList from './components/WatchedMovieList'
import { useEffect, useState } from 'react'
import { FaDesktop } from "react-icons/fa";

function App() {
    const [loading, setLoading] = useState(false);
    const [query , setQuery] = useState("");
    const [movie , setMovie] = useState([]);
    const [selectedId , setSelectedId] = useState("");
    const [watched , setWatched] = useState(function () {
        const storedData = localStorage.getItem("watched");
        return storedData ? JSON.parse(storedData) : [];
    });
    function addWatchedMovie(movie) {
        setWatched((w) => [...w , movie]);
    }
    function deletWatchedMovie(id) {
        setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
    }
    useEffect(function () {
        localStorage.setItem("watched" , JSON.stringify(watched))

    } , [watched])
    useEffect(function () {
        const storedWatchedMovies = localStorage.getItem("watched");
        if (storedWatchedMovies) {
            setWatched(JSON.parse(storedWatchedMovies));
        }
    }, [])
    return (
        <>
            <div className="absolute h-screen w-full  -z-10">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className='relative z-10 md:block hidden'>
                <Navbar query={query} setQuery={setQuery} movie={movie} />

            </div>
            <div>
                <div className='flex  flex-col items-center justify-center text-white text-2xl md:hidden h-screen text-gray-400'>
                    Please open it on Desktop
                    <div><FaDesktop className='text-3xl ml-2'/></div>
                </div>
            </div>
            <div className="container md:block hidden">
                <div className='relative z-10'>
                    <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8  '>


                    <MovieList query={query} selectedId={selectedId} setSelectedId={setSelectedId}  movie={movie} setMovie={setMovie} loading={loading} setLoading={setLoading}/>
                    <WatchedMovieList selectedId={selectedId} setSelectedId={setSelectedId} watched={watched} setWatched={setWatched}  addWatchedMovie={addWatchedMovie} deletWatchedMovie={deletWatchedMovie} loading={loading} setLoading={setLoading}/>
                    </div>
                    </div>
                </div>
            </div>
            </div>

        </>

    )
}
export default App
