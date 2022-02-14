import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Fibonacci } from '../components/Fibonacci/Fibonacci';
import { MoviesApp } from '../components/Movies/MoviesApp';
import { Multiplos } from '../components/Multiplos/Multiplos';

export const AppRouter = () => {
	return (
		<Router>
			<div className='navegacion'>
				<div className='navegacion__option'>
					<Link className='option' to='/'>
						Fibonacci
					</Link>
				</div>
				<div className='navegacion__option'>
					<Link className='option' to='/multiplos'>
						Multiplos
					</Link>
				</div>
				<div className='navegacion__option'>
					<Link className='option' to='/movies'>
						Movies
					</Link>
				</div>
			</div>

			<Routes>
				<Route path='/' element={<Fibonacci />} />
				<Route path='/multiplos' element={<Multiplos />} />
				<Route path='/movies' element={<MoviesApp />} />

				<Route path='/*' element={<Fibonacci />} />
			</Routes>
		</Router>
	);
};
