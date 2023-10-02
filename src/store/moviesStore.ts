import { create } from 'zustand'
import simDB from '../movieDB'

type movieSubGenres = 'aliens' |'space' |'timeTravel' |'multiverse' |'futuristic'| 'robots'
type movieTag = 'cyberpunk' | 'dystopic' | 'neo-noir' | 'police' | 'male protagonist' | 'future' | 
                'spacecraft' | 'female protagonist' | 'foresight' | 'linguistics' | 'aliens' |
                'science' | 'robots' | 'IA' | 'war' | 'time loop' | 'politics' | "hell"
export type Movie = {
    title: string
    year: number
    desc: string
    img: string
    rating: number
    genre: movieSubGenres
    tags: movieTag[]
 }
export type MoviesList = Movie[]

interface state {
    movies: Movie[]
    filteredMovies: Movie[]
    allTags: string[]
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

const checkYear = (mov: Movie, rawYearInput:string) => {
    const year = rawYearInput !== 'all' ? parseInt(rawYearInput) : 0
    return (mov.year >= year && mov.year <= year+9) || year === 0 || (year === 1950 && mov.year <= year+9)

}
const checkGenre = (mov: Movie, genre:string) => {
    return (mov.genre === genre) || genre === 'all'
}
const checkRating = (mov: Movie, rating:number) => {
    return mov.rating >= rating
}

const filtersCheck = (mov: Movie, genre: string,year:string,rating:number) => {
    return checkYear(mov,year) && checkGenre(mov,genre) && checkRating(mov,rating)
}

export const useMoviesStore = create<state>((set,get) => {
    return{
        movies: [],
        filteredMovies: [],
        allTags: ['cyberpunk' , 'dystopic' , 'neo-noir' , 'police' , 'male protagonist' , 'future' , 
        'spacecraft' , 'female protagonist' , 'foresight' , 'linguistics' , 'aliens' ,
        'science' , 'robots' , 'IA' , 'war' , 'time loop' , 'politics'],
        filters: {
            genre: 'all',
            year: '0',
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
                    year: '0',
                    genre: 'all',
                    rating: '0',
                },
                filteredMovies: [...state.movies]
            }))
        },
        updateFilteredList: () => {
            const {year, genre} = get().filters
            const rating = parseInt(get().filters.rating)
            set((state) => ({
                ...state,
                filteredMovies: state.movies.filter((mov) => filtersCheck(mov, genre,year,rating))
                .filter(mov => mov.title.toLowerCase().includes(state.filters.search.toLowerCase()) ||
                                mov.genre.toLowerCase().includes(state.filters.search.toLowerCase()) ||
                                mov.year.toString().includes(state.filters.search))
            }))
        },
        getMovies: () => {
            set((state) => ({
                ...state,
                movies: [
                    ...simDB
                ],
                filteredMovies: [
                    ...simDB
                ]
            }))
        }
    }
})
