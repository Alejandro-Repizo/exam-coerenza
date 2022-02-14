import React, { useRef, useState } from 'react';

export const Multiplos = () => {
	const number = useRef(null);
	const [result, setResult] = useState([]);

	// Funcion Multiplos
	const handleSubmit = (e) => {
		e.preventDefault();
		let print = [];
		for (let i = 1; i <= number.current.value; i++) {
			let text = '';
			if (i % 3 === 0) text += 'AKE';
			if (i % 5 === 0) text += 'LAB';
            print.push(text || i)
		}
        
		setResult([...print]);
	};

	return (
		<div>
			<h2>Multiplos</h2>
			<form onSubmit={handleSubmit}>
				<input
					ref={number}
					type='text'
					name='number'
					placeholder='Ingresa número'
					autoComplete='off'
				/>
				<button type='submit'>Generar</button>
			</form>
			<ul>
				{result.map((a, i) => (
					<li key={a + i}>{a}</li>
				))}
			</ul>
		</div>
	);
};
