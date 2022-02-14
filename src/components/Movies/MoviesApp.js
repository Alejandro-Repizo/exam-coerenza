import React, { useEffect, useReducer, useState } from 'react';
import { Grid } from 'react-loader-spinner';

import { genres } from '../../data/db';
import { useGetData } from '../../hook/useGetData';
import { movieReducer } from '../../reducer/movieReducer';

import { Card } from './Card';
import { CardList } from './CardList';
import { Search } from './Search';
import { Filter } from './Filter';
import { Checkbox } from './Checkbox';
import { Sort } from './Sort';

import {
	getMovieByName,
	setFilterToAll,
	setMovies,
	setMoviesSort,
	getMoviesByGenres,
} from '../../actions/movie';

import {
	getAllIds,
	getMostValueMovie,
	getOldValueMovies,
	movieListAsMap,
} from '../../helpers/normalice';


/**
 * Estado inicial del reducer
 */
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
	
	// Inicializamos el reducer
	const [movie, dispatch] = useReducer(movieReducer, initialState);

	// Estado independiente para manejar el search
	const [search, setSearch] = useState('');

	// variable para recorrer la informacion
	const movieListId = movie.list[movie.filter];

	// Action creator para obtener la informacion
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

	// Action creator para obtener los generos
	const handleGenre = (genreList) => dispatch(getMoviesByGenres(movie.movieList, genreList));

	// Action creator para la parte del search
	const handleGetMovieByName = (movieList, query) => dispatch(getMovieByName(movieList, query));

	// Action creator que se encarga de restrablecer la lista de movies
	const handleFilterToAll = () => dispatch(setFilterToAll());

	// Action creator que se encarga de la opcion organizar
	const handleSort = ({ target }) => dispatch(setMoviesSort(target.dataset.option));

	// Custom hook para obtener la informacion
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
			{error.state && <p>{error.message}</p>}

			{loading && (
				<div className='loader'>
					<Grid color='#89d6a0' height={80} width={80} />
				</div>
			)}

			<CardList>
				{movieListId.length > 0 &&
					movieListId.map((id) => <Card key={id} movie={movie.movieList.get(id)} />)}
			</CardList>
		</div>
	);
};
