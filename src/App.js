import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import style from './App.module.css';
import ImgOut from './assets/Rick&MortyLoad-0001.jpg';
import ImgIntroLogin from './assets/Rick&MortyTitle-0000.jpg';
import ImgIntro from './assets/RickMortyTitle_Esteban.gif';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import Error404 from './components/Error404/Error404';

function App() {
	const location = useLocation();
	const navigate = useNavigate();
	const [characters, setCharacters] = useState([]);
	const [access, setAccess] = useState(false);

	const username = 'esteban34a@studenthenry.com';
	const password = 'tbanFt34a';

	const login = (userData) => {
		if (userData.password === password && userData.username === username) {
			setAccess(true);
			navigate('/home');
			alert('Hola de nuevo!');
		} else {
			alert('username ó password incorrectos');
		}
	};

	useEffect(() => {
		!access && navigate('/');
	}, [access]);

	const onSearch = (character) => {
		fetch(`https://rickandmortyapi.com/api/character/${character}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.name) {
					let exist = characters.find((e) => e.id === data.id);
					if (exist) {
						alert('Este personaje ya existe');
					} else {
						setCharacters((oldChars) => [...oldChars, data]);
					}
				} else {
					window.alert('No hay personajes con ese ID');
				}
			});
	};

	const onClose = (id) => {
		setCharacters(characters.filter((character) => character.id !== id));
	};

	return (
		<div className='App'>
			{location.pathname === '/:Error404' ? <Error404 /> : null}

			{location.pathname === '/' ? null : (
				<img src={ImgIntro} className={style.imgintro} />
			)}
			{location.pathname === '/' ? (
				<img src={ImgIntroLogin} className={style.imgintrologin} />
			) : null}

			<div>
				{location.pathname === '/' ? null : <Nav onSearch={onSearch} />}
			</div>

			<Routes>
				<Route path='/' element={<Form login={login} />} />
				<Route
					path='/home'
					element={<Cards characters={characters} onClose={onClose} />}
				/>
				<Route exact path='/about' element={<About />} />
				<Route
					path='/favorites'
					element={<Favorites characters={characters} onClose={onClose} />}
				/>
				<Route exact path='/detail/:detailId' element={<Detail />} />
			</Routes>
			<img src={ImgOut} className={style.imgouttro} />
		</div>
	);
}

export default App;
