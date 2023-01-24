import Card from '../Card/Card';
import style from './Cards.module.css';

function Cards({ characters, onClose }) {
	return (
		<>
			<h1 className={style.titleHome}>Home</h1>
			<div className={style.divgrid}>
				{characters.map(({ id, name, gender, species, image }) => {
					return (
						<Card
							key={id}
							name={name}
							species={species}
							gender={gender}
							image={image}
							id={id}
							onClose={() => onClose(id)}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Cards;
