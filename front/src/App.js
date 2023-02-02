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

	const username = 'mrtban@gmail.com';
	const password = 'MrTban123';

	const login = (userData) => {
		if (userData.username === username && userData.password === password) {
			setAccess(true);
			navigate('/home');
		}
	};

	useEffect(() => {
		!access && navigate('/');
	}, [access]);

	const onSearch = (character) => {
		fetch(`http://localhost:3001/rickandmorty/character/${character}`)
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
		// .catch((err) => console.log(err.message));
	};

	const onClose = (id) => {
		setCharacters(characters.filter((character) => character.id !== id));
	};

	return (
		<div className='App'>
			{location.pathname === '/' ? null : (
				<img src={ImgIntro} className={style.imgintro} />
			)}
			{location.pathname === '/' ? (
				<img src={ImgIntroLogin} className={style.imgintrologin} />
			) : null}

			<div>{location.pathname === '/' ? null : <Nav onSearch={onSearch} />}</div>

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
				<Route path='/*' element={<Error404 />} />
			</Routes>
			<img src={ImgOut} className={style.imgouttro} />
		</div>
	);
}

export default App;
