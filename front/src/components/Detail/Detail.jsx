import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import style from './Detail.module.css';

const Detail = () => {
	const { detailId } = useParams();

	const [character, setCharacter] = useState({});

	useEffect(() => {
		fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
			.then((response) => response.json())
			.then((char) => {
				if (char.name) {
					setCharacter(char);
				} else {
					window.alert('No hay personajes con ese ID');
				}
			})
			.catch((err) => {
				window.alert('No hay personajes con ese ID');
			});
		return setCharacter({});
	}, [detailId]);

	return (
		<div className={style.box}>
			<h1 className={style.titleDetails}>Details</h1>
			<div className={style.detail}>
				<div>
					<img
						className={style.imgChtr}
						src={character?.image}
						alt={character?.name}
					/>
				</div>
				<div>
					<h1>
						Nombre: <span>{character?.name}</span>
					</h1>

					<h2>
						Status: <span>{character?.status}</span>
					</h2>
					<h2>
						Specie: <span>{character?.species}</span>
					</h2>
					<h2>
						Gender: <span>{character?.gender}</span>
					</h2>
					<h2>
						Origin: <span>{character?.origin?.name}</span>
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Detail;
