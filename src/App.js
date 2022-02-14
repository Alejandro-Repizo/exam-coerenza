import { Fibonacci } from './components/Fibonacci/Fibonacci';
import { Multiplos } from './components/Multiplos/Multiplos';

import { MoviesApp } from './components/Movies/MoviesApp';

export const App = () => {
	return (
		<div className='App'>
			{/* <Fibonacci />
			<hr />
			<Multiplos /> */}
			<MoviesApp/>
		</div>
	);
};
