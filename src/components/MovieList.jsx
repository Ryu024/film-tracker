import { useEffect, useState } from "react";
import Movie from "./Movie";
import Loading from "./Loading";


const KEY = "de8b3b5"
export default function MovieList({ query, selectedId, setSelectedId, movie, setMovie , setLoading , loading}) {

    const [errorMessage, setErrorMessage] = useState("");

    useEffect(function () {
        const controller = new AbortController();
        const signal = controller.signal;
        async function fetchData() {
            try {
                setLoading(true);
                const result = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`, { signal });
                if (!result.ok) {
                    throw new Error("Something went wrong");

                }
                const data = await result.json();
                if (data.Response === "False") {
                    throw new Error("Movie not found")
                }
                else {
                    setLoading(false)
                }

                setMovie(data.Search);
                setErrorMessage("");
            }
            catch (error) {
                if (error.name !== "AbortError") {

                    setErrorMessage(error.message);
                }
            }
            finally {
                // setLoading(false);
            }
        }
        if (query.length < 3) {
            setMovie([]);
            setErrorMessage("");
            return;
        }
        fetchData();
        return () => {
            controller.abort();
            console.log("aborted");
        }
    }, [query])

    return (
        <div>
            <div className="border border-purple-200/30 p-5 min-h-[800px] max-h-[800px]   scroll-smooth  overflow-y-scroll rounded-xl bg-teal-900/20 " >
                {
                    loading && <Loading />
                }
                {
                    !loading && !errorMessage && movie.map((movie, index) => (
                        <div key={index}
                            className="flex bg-purple-950 hover:bg-purple-900 border-gray-600 mb-5 rounded-xl hover:shadow-xl hover:shadow-purple-900/40"
                        >
                            <Movie key={movie.imdbID} {...movie} errorMessage={errorMessage} setSelectedId={setSelectedId} selectedId={selectedId} />
                        </div>

                    ))
                }
                {
                    errorMessage && <ErrorMessage errorMessage={errorMessage} />
                }
            </div>
        </div>
    )
}

function ErrorMessage({ errorMessage }) {
    return (

        <div className="text-white text-3xl flex items-center justify-center flex-col h-full">
            {errorMessage}

        </div>
    )
}
