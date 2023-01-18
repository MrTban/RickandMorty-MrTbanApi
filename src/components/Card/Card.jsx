import style from './Card.module.css';
import { Link } from 'react-router-dom';
import ImgDelete from '../../assets/remove.png';
import ImgAddFav from '../../assets/addtofav.png';
import ImgFav from '../../assets/fav.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites, removeFavorites } from '../../Redux/actions';

function Card(props) {
	const [isFav, setIsFav] = useState(false);

	const dispatch = useDispatch();

	const myFavorites = useSelector((s) => s.myFavorites);

	const handleFavorite = (id) => {
		if (isFav) {
			setIsFav(false);
			dispatch(removeFavorites(id));
		} else {
			setIsFav(true);
			dispatch(addFavorites(id));
		}
	};

	useEffect(() => {
		myFavorites.forEach((id) => {
			if (id === props.id) {
				setIsFav(true);
			}
		});
	}, [myFavorites]);

	return (
		<div className={style.box}>
			<div className={style.card}>
				{isFav ? (
					<img
						src={ImgFav}
						alt={`Añadir a favoritos ${props.name}`}
						className={style.imgFav}
						onClick={() => handleFavorite(props.id)}
					/>
				) : (
					<img
						src={ImgAddFav}
						alt={`Añadir a favoritos ${props.name}`}
						className={style.imgFav}
						onClick={() => handleFavorite(props.id)}
					/>
				)}

				<img
					src={ImgDelete}
					alt={`Eliminar ${props.name}`}
					className={style.imgdelete}
					onClick={props.onClose}
				/>
				<div className={style.imgBx}>
					<img src={props.image} alt={props.name} className={style.imgChr} />
				</div>
				<div className={style.details}>
					<Link to={`/detail/${props.id}`}>
						<h2>{props.name}</h2>
					</Link>
					<h2>
						<span>
							{props.species} - {props.gender}
						</span>
					</h2>
					{/* <h2><button className={style.x} onClick={onClose}>X</button></h2> */}
				</div>
			</div>
		</div>
	);
}

export default Card;
