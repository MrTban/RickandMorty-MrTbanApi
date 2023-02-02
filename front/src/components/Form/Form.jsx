import { useState } from 'react';
import style from './Form.module.css';
import Validate from './Validation';

const Form = (inputs) => {
	const [userData, setUserData] = useState({
		username: '',
		password: '',
	});

	const [errors, setErrors] = useState({
		username: '',
		password: '',
	});

	const handleInputChange = (event) => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
		setErrors(
			Validate({
				...userData,
				[event.target.name]: event.target.value,
			})
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		inputs.login(userData);
	};

	return (
		<div className={style.formBody}>
			<form
				className={style.formBox}
				onSubmit={(event) => {
					handleSubmit(event);
				}}
			>
				<h2 className={style.formTitle}>Sing-In</h2>
				<input
					required
					className={errors.username && 'warning'}
					type='text'
					name='username'
					autoComplete='off'
					placeholder='Username'
					value={userData.username}
					onChange={(event) => handleInputChange(event)}
				/>
				<br />
				{errors.username && <p className='danger'>&#x26A0; {errors.username}</p>}

				<input
					required
					className={errors.password && 'warning'}
					type='password'
					name='password'
					autoComplete='off'
					placeholder='Password'
					value={userData.password}
					onChange={(event) => handleInputChange(event)}
				/>
				<br />
				{errors.password && <p className='danger'>&#x26A0; {errors.password}</p>}
				{Object.keys(errors).length === 0 ? (
					<button type='submit' className={style.button}>
						<span>Login</span>
					</button>
				) : null}
			</form>
		</div>
	);
};

export default Form;
