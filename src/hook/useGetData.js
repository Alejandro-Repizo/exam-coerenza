import { useState, useEffect } from 'react';

import { movies } from '../data/db';

export const useGetData = (handleGetMovies) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({ message: '', state: false });

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			try {
				handleGetMovies(movies);
				setLoading(false);
			} catch (e) {
				setLoading(false);
				setError({ ...error, message: e, state: true });
			}
		}, 1000);
	}, []);

	return { error, loading, setLoading };
};
 