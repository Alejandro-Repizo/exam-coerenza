import React, { useState, useEffect, Children, cloneElement } from 'react';

export const Filter = ({ children, handleGenre, handleFilterToAll }) => {
	/**
	 * Realizamos la instancia de diferentes
	 * estados independientes.
	 */
	const [genreId, setGenreId] = useState([]);
	const [active, setActive] = useState(false);

	/**
	 * Funcion para mostrar la caja
	 */
	const handleOpenFilterBox = () => {
		setActive(!active);
	};

	/**
	 * Funcion encargada de almacenar en
	 * un array los diferentes Ids provenientes
	 * de los checkbox
	 * @param {Event} e 
	 */
	const handleClick = ({ target }) => {
		const idClick = parseInt(target.id);
		if (!genreId.includes(idClick)) {
			setGenreId([...genreId, idClick]);
		} else {
			setGenreId([...genreId.filter((id) => id !== idClick)]);
		}
	};

	useEffect(() => {
		if (genreId.length > 0) {
			handleGenre(genreId);
		} else {
			handleFilterToAll();
		}
	}, [genreId]);

	return (
		<div className='filter'>
			<i className='fa-solid fa-sliders filter__icon' onClick={handleOpenFilterBox}></i>
			<div className={`filter__box ${active && 'active_box'}`}>
				<span className='filter__title'>Genero</span>
				<div className='filter__box--container'>
					{Children.toArray(children).map((child) =>
						cloneElement(child, { handleClick })
					)}
				</div>
			</div>
		</div>
	);
};
