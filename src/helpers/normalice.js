export const movieListAsMap = (oldList, newList = new Map()) => {
	return oldList.reduce((list, movie) => {
		list.set(movie.id, movie);
		return list;
	}, newList);
};

export const getAllIds = (list) => {
	let newList = [];
	return newList.concat(list.map((movie) => movie.id));
};

export const getMostValueMovie = (list) => {
	let newList = [];
	list.sort((a, b) => a.vote_average - b.vote_average).map((movie) => newList.push(movie.id));
	return newList;
};

export const getOldValueMovies = (list) => {
	let newList = [];
	list.sort(
		(a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime()
	).map((movie) => newList.push(movie.id));

	return newList;
};

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
