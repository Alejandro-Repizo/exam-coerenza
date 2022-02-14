import React, { useRef, useState } from 'react';

export const Fibonacci = () => {
	const number = useRef(null);
	const [result, setResult] = useState([]);

	// Funcion Fibonacci
	const handleSubmit = (e) => {
        e.preventDefault();
        
		let print = [];
        let beforeValue,
            actualValue = 0,
            afterValue = 1;

        for (let i = 0; i < number.current.value; i++) {
			print.push(afterValue);
			beforeValue = actualValue;
			actualValue = afterValue;
			afterValue = beforeValue + actualValue;
		}
    
		setResult([...print]);
	};

	return (
		<div>
			<h2>Fibonacci</h2>
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
