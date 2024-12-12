import { BsStars } from "react-icons/bs";
import { BsCalendar2Date } from "react-icons/bs";
export default function WatchedMovie({ Title, Year, Poster, imdbRating, userRating  , imdbID , deletWatchedMovie}) {
    return (
        <>
        <div className="flex p-2 ">
            <img src={Poster} alt={`${Title} poster`} className="w-20" />
            <div className="pl-5 flex flex-col gap-3">
            <h3 className="text-white font-bold text-xl">{Title}</h3>
                <div className="flex gap-2 items-center">
                    <BsCalendar2Date className="text-gray-200" />
                    <span className="text-gray-200">{Year}</span>
                </div>
                <span className="gap-2  text-teal-200 border border-teal-300 text-sm bg-teal-600/30 rounded-3xl w-20 hover:shadow-2xl hover:bg-teal-300/20  font-medium flex items-center justify-center">

                <BsStars className="text-yellow-300 " />

                <p className="text-white">{userRating}</p>
                </span>
            </div>
        </div>
        </>
    )
}
