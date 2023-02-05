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
import axios from 'axios';

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

	const onSearch = async (character) => {
		try {
			if (!isNaN(character)) {
				const response = await axios(
					`http://localhost:3001/rickandmorty/character/${character}`
				);
				const data = response.data;
				if (data.name) {
					let exist = characters.find((e) => e.id === data.id);
					if (exist) {
						throw new Error('Este personaje ya existe');
					} else {
						setCharacters((oldChars) => [...oldChars, data]);
					}
				} else {
					throw new Error('No hay personajes con ese ID');
				}
			} else {
				const response = await axios(
					`http://localhost:3001/rickandmorty/character/?name=${character}`
				);
				const data = response.data;
				if (data.length) {
					setCharacters([]);
					data.map((char) => setCharacters((oldChars) => [...oldChars, char]));
				} else {
					throw new Error('No hay personajes con ese nombre');
				}
			}
		} catch (error) {
			window.alert(error.message);
		}
	};

	const onClose = (id) => {
		setCharacters(characters.filter((character) => character.id !== id));
	};
	const onClear = () => setCharacters([]);

	const onRandom = () => {
		let nroRand = Math.floor(Math.random() * 827);
		let cardFound = (nroR) => characters.filter((card) => card.id === nroR).length !== 0;

		while (cardFound(nroRand)) {
			nroRand = Math.floor(Math.random() * 827);
		}

		onSearch(nroRand);
	};

	return (
		<div className='App'>
			{location.pathname === '/' ? null : (
				<img src={ImgIntro} className={style.imgintro} alt={'imgintro'} />
			)}
			{location.pathname === '/' ? (
				<img src={ImgIntroLogin} className={style.imgintrologin} alt={'imgintrologin'} />
			) : null}

			<div>
				{location.pathname === '/' ? null : (
					<Nav onSearch={onSearch} onRandom={onRandom} onClear={onClear} />
				)}
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
				<Route path='/*' element={<Error404 />} />
			</Routes>
			<img src={ImgOut} className={style.imgouttro} alt={'imgouttro'} />
		</div>
	);
}

export default App;
