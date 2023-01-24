import style from './Nav.module.css';
import { useState } from 'react';
import ImgSearch from '../../assets/searchicon.png';
import ImgRandom from '../../assets/random.png';

function SearchBar({ onSearch }) {
	const [character, setCharacter] = useState('');

	const handleInput = (event) => {
		setCharacter(event.target.value);
	};

	return (
		<div className={style.searchbar}>
			<img
				src={ImgRandom}
				className={style.imgsearch}
				alt={'Agregar un personaje aleatorio'}
				// onClick={() => onSearch(character)}
			/>
			<input
				type='text'
				name='search'
				placeholder='ID'
				onChange={(e) => handleInput(e)}
				value={character}
			/>
			{/* <button	className={style.botoncito} onClick={() => onSearch(character)}>Agregar</button> */}
			<img
				src={ImgSearch}
				className={style.imgsearch}
				alt={`Buscar ${character}`}
				onClick={() => onSearch(character)}
			/>
		</div>
	);
}

export default SearchBar;
