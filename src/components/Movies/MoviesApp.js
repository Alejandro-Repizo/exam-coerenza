import React, { useEffect, useReducer, useState } from 'react';

import { movieReducer } from '../../reducer/movieReducer';
import { genres } from '../../data/db';

import { Card } from './Card';
import { CardList } from './CardList';
import { Search } from './Search';
import { Filter } from './Filter';
import { Checkbox } from './Checkbox';

import { useGetData } from '../../hook/useGetData';
import { getMovieByName, setFilterToAll, setMovies, setMoviesSort } from '../../actions/movie';
import { getMoviesByGenres } from '../../actions/movie';
import { Sort } from './Sort';

import {
	getAllIds,
	getMostValueMovie,
	getOldValueMovies,
	movieListAsMap,
} from '../../helpers/normalice';

const initialState = {
	movieList: null,
	filter: 'all',
	list: {
		all: '',
		change: '',
		old: '',
		mostValued: '',
	},
};

export const MoviesApp = () => {
	const [movie, dispatch] = useReducer(movieReducer, initialState);

	const [search, setSearch] = useState('');

	const movieListId = movie.list[movie.filter];

	const handleGetMovies = (movies) => {
		dispatch(
			setMovies(
				movieListAsMap(movies),
				getAllIds(movies),
				getMostValueMovie(movies),
				getOldValueMovies(movies)
			)
		);
	};

	const handleGenre = (genreList) => dispatch(getMoviesByGenres(movie.movieList, genreList));

	const handleGetMovieByName = (movieList, query) => dispatch(getMovieByName(movieList, query));

	const handleFilterToAll = () => dispatch(setFilterToAll());

	const handleSort = ({target}) => dispatch(setMoviesSort(target.dataset.option));

	const { loading, error } = useGetData(handleGetMovies);

	useEffect(() => {
		if (search.length > 0) {
			handleGetMovieByName(movie.movieList, search);
		} else {
			handleFilterToAll();
		}
	}, [search]);

	return (
		<div className='container container--movie'>
			<h3 className='title'>Películas</h3>
			<Search setSearch={setSearch}>
				<>
					<Filter handleGenre={handleGenre} handleFilterToAll={handleFilterToAll}>
						{genres.map((genre) => (
							<Checkbox key={genre.id} {...genre} />
						))}
					</Filter>

					<Sort handleSort={handleSort}>
						<p className='box__text' data-option='old'>
							Antiguas - Nuevas
						</p>
						<p className='box__text' data-option='mostValued'>
							0 - 10 puntos
						</p>
					</Sort>
				</>
			</Search>

			<CardList>
				{loading && <p>loading</p>}

				{error.state && <p>{error.message}</p>}

				{movieListId.length > 0 &&
					movieListId.map((id) => <Card key={id} movie={movie.movieList.get(id)} />)}
			</CardList>
		</div>
	);
};
