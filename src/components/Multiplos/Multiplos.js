import React, { useRef, useState } from 'react';

export const Multiplos = () => {

	/**
	 * Realizamos la instancia de diferentes
	 * estados independientes.
	 */
	const number = useRef(null);
	const [result, setResult] = useState([]);
	const [error, setError] = useState(false);

	/**
	 * Realizar la conversion de los 
	 * multiplos de 3 y 5 
	 * a sus respectivos
	 * strings
	 * 	
	 * @param {Event} e 
	 */
	const handleSubmit = (e) => {
		e.preventDefault();
		let print = [];
		const value = parseInt(number.current.value);

		if (value >= 1 && !isNaN(value)) {
			setError(false)
			for (let i = 1; i <= value; i++) {
				let text = '';
				if (i % 3 === 0) text += 'AKE';
				if (i % 5 === 0) text += 'LAB';
				print.push(text || i);
			}

			setResult([...print]);
		} else {
			setError(true);
		}
	};

	return (
		<div className='container container--form'>
			<div className='postcard'>
				<div className='postcard__body'>
					<h2 className='postcard__title'>Multiplos</h2>
					<form onSubmit={handleSubmit}>
						<input
							className='postcard__input'
							ref={number}
							type='text'
							name='number'
							placeholder='Ingresa número'
							autoComplete='off'
						/>
						<button className='postcard__button' type='submit'>
							Generar
						</button>
					</form>
					{error && (
						<div className='alert-error'>
							Debes de ingresar un número mayor a 1 además no puedes ingresar strings
						</div>
					)}
				</div>

				<ul className='postcard__result'>
					{result.map((a, i) => (
						<li key={a + i}>{a}</li>
					))}
				</ul>
			</div>
		</div>
	);
};
