import { Link } from 'react-router-dom';
import style from './Error404.module.css';
import ImgHome from '../../assets/home.png';

const Error404 = () => {
	return (
		<div className={style.body}>
			<Link to='/home'>
				<img className={style.imgMenuNav} src={ImgHome} alt='Home' />
			</Link>
			<h3 className={style.h3}>OH JEEZ, IT'S A</h3>
			<h2 className={style.h2}>4</h2>
			<h2 className={style.four}>4</h2>
			<div className={style.morty}>
				<div className={style.hair}></div>
				<div className={style.ears}></div>
				<div className={style.face}></div>
				<div className={style.eyes}></div>
				<div className={style.nose}></div>
				<div className={style.mouth}></div>
				<div className={style.lines}></div>
			</div>
			<h1 className={style.h1}>ERROR</h1>
		</div>
	);
};

export default Error404;
