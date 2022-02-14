import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fibonacci } from '../components/Fibonacci/Fibonacci';
import { MoviesApp } from '../components/Movies/MoviesApp';
import { Multiplos } from '../components/Multiplos/Multiplos';

export const AppRouter = () => {
	return (
		<Router>
            <Routes>
                <Route path="/" element={<Fibonacci/>}/ >
                <Route path="/multiplos" element={<Multiplos />} />
                <Route path="/movies" element={<MoviesApp />} />
                
                <Route path="/*" element={<Fibonacci/>} />
            </Routes>
		</Router>
	);
};

