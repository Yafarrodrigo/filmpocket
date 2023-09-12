import { create } from 'zustand'
import { Movie } from "../components/Home/Home"

interface state {
    movies: Movie[]
    filteredMovies: Movie[]
    filters: {
        genre: string,
        year: string,
        rating: string
        search: string
    }
    getMovies: () => void,
    resetFilters: () => void
    updateFilteredList: () => void
    changeFilterValues: (which:string, value:string) => void
}

export const useMoviesStore = create<state>((set,get) => {
    return{
        movies: [],
        filteredMovies: [],
        filters: {
            genre: 'all',
            year: '2020',
            rating: '0',
            search: ''
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
        resetFilters: () => {
            set((state) => ({
                ...state,
                filters: {
                    ...state.filters,
                    year: '2020',
                    genre: 'all',
                    rating: '0',
                },
                filteredMovies: [...state.movies]
            }))
        },
        updateFilteredList: () => {
            const year = parseInt(get().filters.year)
            const rating = parseInt(get().filters.rating)
            set((state) => ({
                ...state,
                filteredMovies: state.movies.filter( mov => mov.year <= year && mov.rating >= rating).filter(mov => mov.title.toLowerCase().includes(state.filters.search.toLowerCase()))
            }))
        },
        getMovies: () => {
            set((state) => ({
                ...state,
                movies: [
                    ...state.movies,
                    {title:"Blade Runner52", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4, genre: 'sci-fi'},
                    {title:"Blade Runner23", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1992, rating: 2, genre: 'sci-fi'},
                    {title:"Blade Runner3", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:2000, rating: 1, genre: 'sci-fi'},
                    {title:"Blade Runner23", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:2010, rating: 5, genre: 'sci-fi'},
                    {title:"Blade Runner6", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:2023, rating: 2, genre: 'sci-fi'},
                    {title:"Blade Runner756", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1950, rating: 1, genre: 'sci-fi'},
                    {title:"Blade Runner45", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1962, rating: 1, genre: 'sci-fi'},
                    {title:"Blade Runner24", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1972, rating: 1, genre: 'sci-fi'},
                    {title:"Blade Runner67", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1955, rating: 2, genre: 'sci-fi'},
                    {title:"Blade Runner98", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1920, rating: 4, genre: 'sci-fi'},
                    {title:"Blade Runner872", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1900, rating: 4, genre: 'sci-fi'},
                    {title:"Blade Runner87", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1999, rating: 2, genre: 'sci-fi'}
                ],
                filteredMovies: [
                    ...state.filteredMovies,
                    {title:"Blade Runner52", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4, genre: 'sci-fi'},
                    {title:"Blade Runner23", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1992, rating: 2, genre: 'sci-fi'},
                    {title:"Blade Runner3", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:2000, rating: 1, genre: 'sci-fi'},
                    {title:"Blade Runner23", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:2010, rating: 5, genre: 'sci-fi'},
                    {title:"Blade Runner6", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:2023, rating: 2, genre: 'sci-fi'},
                    {title:"Blade Runner756", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1950, rating: 1, genre: 'sci-fi'},
                    {title:"Blade Runner45", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1962, rating: 1, genre: 'sci-fi'},
                    {title:"Blade Runner24", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1972, rating: 1, genre: 'sci-fi'},
                    {title:"Blade Runner67", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1955, rating: 2, genre: 'sci-fi'},
                    {title:"Blade Runner98", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1920, rating: 4, genre: 'sci-fi'},
                    {title:"Blade Runner872", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1900, rating: 4, genre: 'sci-fi'},
                    {title:"Blade Runner87", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1999, rating: 2, genre: 'sci-fi'}
                ]
            }))
        }
    }
})
