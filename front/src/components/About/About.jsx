import style from './About.module.css';

const About = () => {
	return (
		<div>
			<h1 className={style.titleAbout}>About</h1>
			<div className={style.maindiv}>
				<h1>Este el es About de mi App Rick & Morty</h1>
				<p>
					Por el momento este es el único contenido que va a tener este apartado
				</p>
			</div>
		</div>
	);
};

export default About;
