import { create } from 'zustand'
import { Movie } from "../components/Home/Home"

interface state {
    movies: Movie[]
    filters: {
        genre: string,
        year: string,
        rating: string
    }
    getMovies: () => void,
    changeFilterValues: (which:string, value:string) => void
}

export const useMoviesStore = create<state>((set) => {
    return{
        movies: [],
        filters: {
            genre: 'all',
            year: '2020',
            rating: '0'
        },
        changeFilterValues: (which, value) => {
            set((state) => ({
                ...state,
                filters: {
                    ...state.filters,
                    [which]: value
                }
            }))
        },
        getMovies: () => {
            set((state) => ({
                ...state,
                movies: [
                    ...state.movies,
                    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
                    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
                    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
                    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
                    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
                    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
                    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
                    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
                    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
                    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
                    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
                    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4}
                ]
            }))
        }
    }
})
