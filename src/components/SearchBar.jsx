import { BsSearchHeart } from "react-icons/bs";


export default function SearchBar( {query , setQuery}) {

    return (
        <div>
            <div className="flex rounded-full focus-within:border-purple-500 focus-within:border border-teal-600 border py-2 px-4 gap-4 focus-within:text-purple-500 text-teal-500">
                <BsSearchHeart className=" text-xl  transition-colors" />
                <input type="text" placeholder="Enter movie name..."
                className="bg-transparent focus:outline-none  placdeholder:text-teal-500 font-semibold text-white"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />
            </div>
        </div>
    )
}
