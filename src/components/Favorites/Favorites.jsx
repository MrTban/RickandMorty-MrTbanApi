import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterCards, orderCards, reset } from '../../Redux/actions';
import Card from '../Card/Card';
import style from './Favorites.module.css';
import ImgReset from '../../assets/reset.png';

function Favorites(props) {
	const dispatch = useDispatch();

	const myFavorites = useSelector((s) => s.myFavorites);

	const handleClick = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		if (name === 'filter') {
			return dispatch(filterCards(value));
		}
		if (name === 'order') {
			return dispatch(orderCards(value));
		}
	};

	return (
		<>
			<h1 className={style.titleFav}>Favorites</h1>
			<div className={style.customSelect}>
				<select
					name='order'
					className={style.caja}
					defaultValue={'DEFAULT'}
					onChange={handleClick}
				>
					<option value='DEFAULT' disabled>
						Select Order
					</option>
					<option value='Ascendente'>Ascending</option>
					<option value='Descendente'>Descending</option>
				</select>
				<select
					name='filter'
					className={style.caja}
					defaultValue={'DEFAULT'}
					onChange={handleClick}
				>
					<option value='DEFAULT' disabled>
						Select Gender
					</option>
					<option value='Male'>Male</option>
					<option value='Female'>Female</option>
					<option value='Genderless'>Genderless</option>
					<option value='unknow'>unknow</option>
				</select>
				{/* <button onClick={() => dispatch(reset())}>RESET</button> */}
				<img
					src={ImgReset}
					className={style.imgMenuNav}
					alt='Reset Characters'
					onClick={() => dispatch(reset())}
				/>
			</div>
			<div className={style.divgrid}>
				{myFavorites?.map((character) => {
					return (
						<Card
							key={character.id}
							id={character.id}
							name={character.name}
							species={character.species}
							gender={character.gender}
							image={character.image}
							onClose={() => props.onClose(character.id)}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Favorites;
