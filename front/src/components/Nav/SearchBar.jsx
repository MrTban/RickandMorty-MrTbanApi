import style from './Nav.module.css';
import { useState } from 'react';
import ImgSearch from '../../assets/searchicon.png';
import ImgRandom from '../../assets/random.png';
import ImgDelete from '../../assets/removebar.png';

function SearchBar({ onSearch, onRandom, onClear }) {
	const [character, setCharacter] = useState('');

	const handleInput = (event) => {
		setCharacter(event.target.value);
	};

	return (
		<div className={style.searchbar}>
			<input
				type='text'
				name='search'
				placeholder='ID'
				onChange={(e) => handleInput(e)}
				value={character}
			/>
			<img
				src={ImgSearch}
				className={style.imgsearch}
				alt={`Buscar ${character}`}
				onClick={() => onSearch(character)}
			/>
			<img
				src={ImgRandom}
				className={style.imgsearch}
				alt='Agregar un personaje aleatorio'
				onClick={() => onRandom(character)}
			/>
			<img
				src={ImgDelete}
				alt={`Eliminar ${character}`}
				className={style.imgsearch}
				onClick={onClear}
			/>
		</div>
	);
}

export default SearchBar;
