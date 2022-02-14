import React from 'react';

export const Card = ({ movie }) => {	

	// console.log(movie)
	
	const { id, title, overview, vote_average, release_date, poster_path, genre_ids } = movie;

	return (
		<div className='card'>
			<p className='card__title'>{title} - {JSON.stringify(genre_ids)} - {id}</p>
			<div className='card__body'>
				<div className='card__thumbnail'>
					<img
						className='card__img'
						src={`https://image.tmdb.org/t/p/w500${poster_path}`}
						alt={title}
					/>
				</div>
				<div className='card__info'>
					<p className='card__overview'>{overview}</p>

					<div className='card__details'>
						<p className='card__text'>
							<span className='card__text--strong'>Titulo:</span> {title}
						</p>
						<p className='card__text'>
							<span className='card__text--strong'>Calificacion:</span> {vote_average}{' '}
							&#11088; &#11088; &#11088; &#11088;
						</p>
						<p className='card__text'>
							<span className='card__text--strong'>Género:</span> Drama
						</p>
						<p className='card__text'>
							<span className='card__text--strong'>Fecha de realización:</span>{' '}
							{release_date}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
