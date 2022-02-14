import React, { useState, Children, cloneElement } from 'react';

export const Sort = ({ handleSort, children }) => {
	const [active, setActive] = useState(false);

	const handleOpenSortBox = () => {
		setActive(!active);
	};

	return (
		<div className='sort'>
			<p className='sort__text'>Ordenar</p>
			<i
				className='fa-solid fa-angle-right sort__icon sort__icon--active'
				onClick={handleOpenSortBox}
			></i>

			<div className={`${active && 'active_box'} sort__box`}>
				<span className='box__title'>Fecha</span>
				<div className='box__option'>
					{Children.toArray(children)
						.slice(0, 1)
						.map((child) => cloneElement(child, { onClick: handleSort }))}
				</div>
				<span className='box__title'>Calificación</span>
				<div className='box__option'>
					{Children.toArray(children)
						.slice(1)
						.map((child) => cloneElement(child, { onClick: handleSort }))}
				</div>
			</div>
		</div>
	);
};
