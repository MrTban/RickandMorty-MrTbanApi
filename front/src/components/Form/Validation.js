const validateUsername = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
const validatePassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/;

const Validate = (inputs) => {
	const errors = {};
	if (!inputs.username) {
		errors.username = 'Por favor, completa este campo. Intenta con: mrtban@gmail.com';
	} else if (!validateUsername.test(inputs.username)) {
		errors.username =
			'El username debe ser un correo electrónico. Intenta con: mrtban@gmail.com';
	} else if (inputs.username.length > 35) {
		errors.username = 'El username no puede tener más de 35 caracteres';
	} else if (!inputs.password) {
		errors.password = 'Por favor, completa este campo. Intenta con: MrTban123';
	} else if (!validatePassword.test(inputs.password)) {
		errors.password =
			'El password debe tener entre 6-10 characteres, debe tener al menos 1 número, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos. Intenta con: MrTban123';
	}

	return errors;
};

export default Validate;
