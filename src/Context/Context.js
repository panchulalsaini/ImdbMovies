
import { createContext, useContext, useEffect, useState } from "react";

const MyMovieContext = createContext()

export const Api_Url = "https://www.omdbapi.com/?apikey=25bdd068"


function MyMovieDataProvider({ children }) {
    const [movie, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('titanic');
    const [isError, setIsError] = useState({ show: "false", msg: "" })

    const getMovies = async (url) => {
        setIsLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data.Search)

            if (data.Response === "True") {
                setMovie(data.Search);
                setIsLoading(false)
                setIsError({
                    show: false,
                    msg: "data.Error"
                })
            } else {
                setIsError({
                    show: true,
                    msg: data.Error
                })
                setIsLoading(false)
            }

        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        var timeOut = setTimeout(() => {
            getMovies(`${Api_Url}&s=${query}`);
        }, 800)
        return () => clearTimeout(timeOut)
    }, [query])

    return (
        <>
            <MyMovieContext.Provider value={{ movie, isLoading, query, setQuery, isError, setIsError }}>
                {children}
            </MyMovieContext.Provider>
        </>
    )

}
const useGlobalContext = () => {

    return (useContext(MyMovieContext))
}
export { useGlobalContext, MyMovieContext, MyMovieDataProvider }