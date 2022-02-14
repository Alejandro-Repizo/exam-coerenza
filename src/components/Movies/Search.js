import React, { useRef } from 'react';


export const Search = ({ setSearch, children,  }) => {
	
	const seachValue = useRef(null);

	const handleSearch = () => {
		const value = seachValue.current.value;
		setSearch(value.trim());
	};

	return (
		<div className='container--search'>
			<div className='search'>
				<input
					className='search__input'
					type='text'
					name='search'
					autoComplete='off'
					ref={seachValue}
				/>
				<i className='fa-solid fa-magnifying-glass search__icon' onClick={handleSearch}></i>
			</div>

			{ children }
		
		</div>
	);
};
