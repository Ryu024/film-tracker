import { IoSearchCircleSharp } from "react-icons/io5";
import SearchBar from './SearchBar';
export default function NavBar( {query , setQuery , movie} ) {

    return (
        <nav className='bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] border-b border-zinc-500/60'>

            <div className='flex items-center justify-between py-0 lg:py-4 px-2 container'>
                <p className='font-extrabold text-xl lg:text-3xl bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent'>FilmTracker</p>
                <SearchBar  query={query} setQuery={setQuery}/>

                <div className='flex items-center gap-4 bg-teal-600/50 p-1 px-2 rounded-full'>
                    <IoSearchCircleSharp className='text-white text-2xl' />
                    <p className='text-white font-mono text-lg font-bold'>Found {movie?.length} results</p>
                </div>

            </div>
        </nav>
    )
}
