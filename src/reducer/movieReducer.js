import { types } from '../types/types';

/**
 * Reducer encargado de manejar el estado
 * de forma declarativo
 *
 * @param {Object} state
 * @param {Object} action
 * @returns Object
 */
export const movieReducer = (state, action) => {
	switch (action.type) {
		case types.moviesLoad:
			return {
				...state,
				movieList: action.payload.movieList,
				list: {
					...state.list,
					...action.payload.list,
				},
			};
		case types.movieSearch:
			return {
				...state,
				filter: 'change',
				list: {
					...state.list,
					change: [...action.payload],
				},
			};
		case types.movieGenre:
			return {
				...state,
				filter: 'change',
				list: {
					...state.list,
					change: [...action.payload],
				},
			};

		case types.movieFilterAll:
			return {
				...state,
				filter: 'all',
				list: {
					...state.list,
					change: '',
				},
			};

		case types.movieSort: {
			return {
				...state,
				filter: action.payload,
			};
		}

		default:
			return state;
	}
};
