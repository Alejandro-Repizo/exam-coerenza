
/**
 * Se encarga de recorrer la lista de movies y
 * agregarlas a un map con el fin de que quede
 * [id -> object] para obtener 
 * de una forma más optima la informacion..
 * 
 * @param {Array} oldList 
 * @param {Map} newList 
 * @returns Map
 */
export const movieListAsMap = (oldList, newList = new Map()) => {
	return oldList.reduce((list, movie) => {
		list.set(movie.id, movie);
		return list;
	}, newList);
};


/** 
 * Obtiene los Id's de todas la movies.
*/
export const getAllIds = (list) => {
	let newList = [];
	return newList.concat(list.map((movie) => movie.id));
};


/**
 * Se encarga de organizar y obtener los id's la movies 
 * por ru voto de popularidad.
 */
export const getMostValueMovie = (list) => {
	let newList = [];
	list.sort((a, b) => a.vote_average - b.vote_average).map((movie) => newList.push(movie.id));
	return newList;
};


/**
 * Se encarga de obtener los Id's de las movies
 * desde la más antigua hasta la más actual.
 */
export const getOldValueMovies = (list) => {
	let newList = [];
	list.sort(
		(a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime()
	).map((movie) => newList.push(movie.id));

	return newList;
};

/** 
 * Se encarga de obtener los Id's de las movies
 * a partir por un parametro de busqueda.
*/
export const getMovieByTitle = (list, query) => {
	let newList = [];
	list.forEach((movie) => {
		if (
			movie.title.toLowerCase().includes(query.toLowerCase()) ||
			movie.original_title.toLowerCase().includes(query.toLowerCase())
		) {
			return newList.push(movie.id);
		}
		return newList;
	});
	return newList;
};

/**
 * 
 * Se encarga de obtenos los Id's de las movies
 * a partir de un array de Id's de los diferentes 
 * generos.
 */
export const getMovieByGenres = (list, genres) => {
	let newList = [];
	if (genres.length !== 0) {
		list.forEach((movie) => {
			return movie.genre_ids.map((idMovie) => {
				if (genres.indexOf(idMovie) >= 0) {
					newList.push(movie.id);
				}
				return newList;
			});
		});
		return newList.filter((id, index) => newList.indexOf(id) === index);
	}
	return newList;
};
