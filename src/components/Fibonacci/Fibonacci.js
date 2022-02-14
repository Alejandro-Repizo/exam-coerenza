import React, { useRef, useState } from 'react';

export const Fibonacci = () => {
	
	/**
	 * Realizamos la instancia de diferentes
	 * estados independientes.
	 */
	const number = useRef(null);
	const [result, setResult] = useState([]);
	const [error, setError] = useState(false);

	/**
	 * Funcion que realiza el 
	 * calculo Fibonacci dependiendo
	 * de la longitud del número base
	 * @param {Event} e 
	 */
	const handleSubmit = (e) => {
		e.preventDefault();

		const value = parseInt(number.current.value);
		let print = [];
		let beforeValue,
			actualValue = 0,
			afterValue = 1;

		if (value >= 1 && !isNaN(value)) {
			setError(false);
			for (let i = 0; i < value; i++) {
				print.push(afterValue);
				beforeValue = actualValue;
				actualValue = afterValue;
				afterValue = beforeValue + actualValue;
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
					<h2 className='postcard__title'>Fibonacci</h2>
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
