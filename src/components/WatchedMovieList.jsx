import WatchedMovie from "./WatchedMovie";
import { TbMovie } from "react-icons/tb";
import MovieDetails from "./MovieDetails";



export default function WatchedMovieList( {deletWatchedMovie ,selectedId , setSelectedId , watched , addWatchedMovie, loading , setLoading} ) {

    return (
        <div>

            <div className="border border-gray-600 p-5 min-h-[800px] max-h-[800px] scroll-smooth  overflow-y-scroll rounded-xl bg-teal-600/20 ">
                {!selectedId &&  <div className="mb-5">
                    <div className="flex items-center bg-purple-600/50 py-1 gap-2 justify-center rounded-xl">
                        <TbMovie className="text-white text-lg" />
                        <p className="text-white text-xl font-bold"> Movie Watched {watched.length}</p>
                    </div>
                </div>}
                {
                    selectedId ? <MovieDetails selectedId={selectedId} setSelectedId={setSelectedId} addWatchedMovie={addWatchedMovie} watched={watched} loading={loading} setLoading={setLoading}/> : watched.map((movies) => (
                        <div key={movies.imdbID}
                            className="flex bg-purple-950 hover:bg-purple-900 border-gray-600 mb-5 rounded-xl shadow-xl relative  hover:shadow-purple-900/40"

                        >
                            <button className="absolute text-white text-xl right-2 top-2 bg-red-600 w-6 h-6 rounded-full flex text-center justify-center items-center p-2" onClick={() => deletWatchedMovie(movies.imdbID)}> &times;</button>
                            <WatchedMovie {...movies}  key={movies.imdbID} deletWatchedMovie={deletWatchedMovie}/>
                        </div>))}
            </div>
        </div>
    )
}
