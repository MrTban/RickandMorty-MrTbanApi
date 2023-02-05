import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';
import ImgLogOut from '../../assets/log-out.png';
import ImgHome from '../../assets/home.png';
import ImgAbout from '../../assets/about.png';
import ImgFavs from '../../assets/favs.png';

function Nav({ onSearch, onRandom, onClear }) {
	return (
		<nav>
			<div className={style.navbar}>
				<Link to='/'>
					{/* <button className={style.botoncito}>Log-Out</button> */}
					<img className={style.imgMenuNav} src={ImgLogOut} alt='Log-Out' />
				</Link>
				<Link to='/home'>
					{/* <button className={style.botoncito}>Home</button> */}
					<img className={style.imgMenuNav} src={ImgHome} alt='Home' />
				</Link>
				<Link to='/about'>
					{/* <button className={style.botoncito}>About</button> */}
					<img className={style.imgMenuNav} src={ImgAbout} alt='About' />
				</Link>
				<Link to='/favorites'>
					{/* <button className={style.botoncito}>Favorites</button> */}
					<img className={style.imgMenuNav} src={ImgFavs} alt='Favorites' />
				</Link>
			</div>
			<SearchBar onSearch={onSearch} onRandom={onRandom} onClear={onClear} />
		</nav>
	);
}

export default Nav;
