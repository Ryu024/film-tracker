import { useEffect } from "react";
import StarRating from "./StarRating";
import { useState } from "react";
import Tag from "./Tag";
import { BsCalendar2Date } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import Loading from "./Loading";
const KEY = "de8b3b5";
export default function MovieDetails({ selectedId , setSelectedId , addWatchedMovie , watched  }) {
    const [userRating , setUserRating] = useState("");
    const [movie , setMovie] = useState([])
    useEffect(function () {
        async function fetchMovieDetails() {
            const result = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
            const data = await result.json();
            setMovie(data);
        }
        fetchMovieDetails();
    }, [selectedId])
    function handleAdd() {
        const newWatchedMovie = {
            imdbID,
            Title: movie.Title,
            Year: movie.Year,
            Poster: movie.Poster,
            imdbRating: movie.imdbRating,
            userRating,

        }
        addWatchedMovie(newWatchedMovie)
        onClose();
    }
    function onClose() {
        setSelectedId(null)
    }
    const { Title: title, Released: released, Year: year, Poster: poster, imdbRating: imdbRating, Runtime: runtime, Genre: genre, Plot: plot, Actors: actors, Director: director, BoxOffice: boxoffice , imdbID} = movie
    const isWatched = watched.map((movies) => movies.imdbID ).includes(selectedId)
    const watchedUserRating = watched.find((movies) => movies.imdbID === selectedId)?.userRating
    useEffect(function () {
        document.title = `${title} | FilmTracker`;
        return function () {
            document.title = "FilmTracker";
        }
    }, [title])
    return (<>
         <div className=" rounded-xl transition-all ease-linear">
            <div className="flex gap-10 bg-purple-700/40 rounded-t-2xl relative">
            <div className="absolute top-4 right-4">
            <button  onClick={onClose} className=" flex items-center justify-center text-white text-2xl bg-red-500 rounded-full w-7 h-7 hover:ring-4 hover:ring-red-400 transition-all ease-linear">&times;</button>

            </div>


                <img src={poster} alt="" className="xl:w-52 md:w-28 h-auto rounded-xl" />
                <div className="text-white flex flex-col gap-2 pt-3">

                    <p className="lg:text-3xl md:text-xl font-bold">{title}</p>
                    <p className="lg:text-lg text-gray-300 font-medium flex items-center md:text-sm md:gap-1 lg:gap-2">
                        <span><BsCalendar2Date className="text-gray-300" /></span>{released}</p>

                    <p className="lg:text-lg text-gray-300 font-medium flex items-center md:gap-1  md:text-sm lg:gap-2">
                       <span>
                       <BiCameraMovie className="text-gray-300" />
                       </span>

                        {genre}

                        </p>
                        <div className="flex gap-2">
                    <p className="mt-2 flex items-center"><Tag>
                     <FaStar className="text-yellow-300" />   {imdbRating}</Tag></p>
                     <p className="mt-2 flex items-center "><Tag >
                     <MdAccessTime className="text-teal-300 " />   {runtime}</Tag></p>
                     </div>

                </div>

            </div>
            <div className="h-full bg-purple-600/50 text-white px-8 rounded-b-2xl">
                <div className="py-5">
                    <div className="flex items-center justify-center bg-purple-950 p-5 rounded-xl flex-col">
                    {  !isWatched ?  <StarRating size={30} maxRating={10} onSetRating={setUserRating} />
                    : <div className="flex items-center gap-3">You gave {watchedUserRating}<span className="text-yellow-300"><FaStar /></span> to this movie</div>}

                     {   userRating > 0 && <div>
                            <button onClick={handleAdd}className="bg-purple-600 px-4 py-2 rounded-xl mt-3 hover:ring-1 hover:ring-purple-300 hover:ring-offset-2 hover:shadow-xl shadow-purple-950 shadow-md hover:shadow-purple-500">Add To List</button>
                        </div>}
                    </div>
                </div>
                <p className="text-xl text-gray-300 mb-2">{plot}</p>
                <p className="text-lg text-gray-300 mb-2 "><span className="font-bold">Cast : </span> {actors}</p>
            <p className="text-lg text-gray-300 mb-2"> <span className="font-bold">Directed by :</span>{director}</p>
                <p className="text-lg text-gray-300 pb-10"><span className="font-bold">Box Office : </span>{boxoffice}</p>
            </div>
        </div>
</>)
}
