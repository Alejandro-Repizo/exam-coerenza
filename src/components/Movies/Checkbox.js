import React from 'react';

export const Checkbox = ({ name, id, handleClick }) => (
	<div className='form__container'>
		<input className='form__check' type='checkbox' id={id} name={name} onClick={handleClick} />
		<span></span>
		<label className='form__label' htmlFor={name}>
			{name}
		</label>
	</div>
);
