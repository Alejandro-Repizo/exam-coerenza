import { types } from '../types/types';

import { getMovieByTitle } from '../helpers/normalice'
import { getMovieByGenres } from '../helpers/normalice';


export const setMovies = (movieList, getAllIds, mostValued, old) => {

	console.log(old);

	return {
		type: types.moviesLoad,
		payload: {
			movieList: movieList,
			list: {
				all: getAllIds,
				old: old,
				mostValued: mostValued,
			},
		},
	};
};

export const getMovieByName = (movieList, query) => ({
	type: types.movieSearch,
	payload: getMovieByTitle(movieList, query),
});

export const getMoviesByGenres = (movieList, genreList) => ({
	type: types.movieGenre,
	payload: getMovieByGenres(movieList, genreList),
});

export const setFilterToAll = () => ({
	type: types.movieFilterAll,
})

export const setMoviesSort = (sort) => {
	console.log("entre")

	return {
		type: types.movieSort,
		payload: sort
	}
	
}



