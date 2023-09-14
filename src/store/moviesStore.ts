import { create } from 'zustand'
import simDB from '../movieDB'

type movieSubGenres = 'aliens' |'space' |'timeTravel' |'multiverse' |'futuristic'| 'robots'
type movieTag = 'cyberpunk' | 'dystopic' | 'neo-noir' | 'police' | 'male protagonist' | 'future' | 
                'spacecraft' | 'female protagonist' | 'foresight' | 'linguistics' | 'aliens' |
                'science' | 'robots' | 'IA' | 'war' | 'time loop' | 'politics'
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

export const useMoviesStore = create<state>((set,get) => {
    return{
        movies: [],
        filteredMovies: [],
        allTags: ['cyberpunk','dystopic','futuristic','neo-noir','police','robots'],
        filters: {
            genre: 'all',
            year: '1',
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
                    year: '1',
                    genre: 'all',
                    rating: '0',
                },
                filteredMovies: [...state.movies]
            }))
        },
        updateFilteredList: () => {
            const year = parseInt(get().filters.year)
            const rating = parseInt(get().filters.rating)
            const genre = get().filters.genre
            const genreSelected = genre !== 'all' ? true : false
            if(genreSelected){
                set((state) => ({
                    ...state,
                    filteredMovies: state.movies.filter( mov => mov.year >= year && mov.rating >= rating && mov.genre === genre)
                    .filter(mov => mov.title.toLowerCase().includes(state.filters.search.toLowerCase()))
                }))
            }else{
                set((state) => ({
                    ...state,
                    filteredMovies: state.movies.filter( mov => mov.year >= year && mov.rating >= rating)
                    .filter(mov => mov.title.toLowerCase().includes(state.filters.search.toLowerCase()))
                }))
            }
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
