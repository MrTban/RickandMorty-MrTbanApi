import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import style from './Favorites.module.css';

function Favorites(props) {
	const myFavorites = useSelector((s) => s.myFavorites);

	const characters = props.characters.filter((e) => {
		return myFavorites.includes(e.id);
	});
	return (
		<>
			<div className={style.divgrid}>
				{characters.map((character) => {
					return (
						<Card
							key={character.id}
							name={character.name}
							species={character.species}
							gender={character.gender}
							image={character.image}
							id={character.id}
							onClose={() => props.onClose(character.id)}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Favorites;
