import { BsCalendar2Date } from "react-icons/bs";
export default function Movie({ Poster, Title, Year , Type , errorMessage ,imdbID , selectedId , setSelectedId , } ) {
    function handleclick(id) {
        setSelectedId(id);
    }
    return (
     <li className="flex w-full p-1 " onClick={() => handleclick(imdbID)}>
            <img src={Poster} alt={`${Title} poster`} className="w-24 text-white rounded-xl shadow-2xl " />
            <div className="pl-4 flex flex-col gap-2">
            <h3 className="text-white  font-bold text-2xl">{Title}</h3>
                <div className="flex gap-2 items-center">
                    <span>
                        <BsCalendar2Date className="bg-gray-300" />
                    </span>
                    <span className="text-gray-300">{Year}</span>
                </div>

                <span className="text-teal-200 border border-teal-300 text-sm bg-teal-600/20 rounded-3xl w-20 hover:shadow-2xl hover:shadow-slate-800  font-medium flex items-center justify-center capitalize">{Type}</span>
            </div>
        </li>
    )
}
