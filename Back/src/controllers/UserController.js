const { User } = require ("../db");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET= process.env;
//require('dotenv').config();

const loginUserController = async (email, password) => {
		const user =await User.findOne({email});
		if(!user || !bcryptjs.compareSync(password, user.password)) throw new Error('Credenciales incorrectas');
		const payload = { id: user.id, email, firstname: user.firstname, lastname: user.lastname, age: user.age }
		const token = jwt.sign(payload, `${JWT_SECRET}`);
		return { token, ...payload }; 
  };

const createUserController = async ( type,firstname, lastname, age, email, password, image ) => {
	salt = Number(process.env.SALT);
	password = bcryptjs.hashSync(password, salt);
	const newUser = await User.create({ type, firstname, lastname, age, email, password, image });

	return newUser;
};

const deleteUserController = async (id) => await User.destroy({where: {id}});

const getAllUserControllers = async () => {
	const allUserDb = await User.findAll();
	return allUserDb;
};

const putUserController = async (id, editedData ) => {
	try {
		const user = await User.findByPk(id);

		if (!user) {
			throw new Error('El Usuario no se encontró.');
		}

        if (editedData && typeof editedData === 'object') {
            user.firstname = editedData.firstname;
            user.lastname = editedData.lastname;
			user.age = editedData.age;
          }

		await user.save();

		return user;
	} catch (error) {
		throw new Error(`Error al actualizar el Usuario: ${error.message}`);
	}
};

const getUserByIdController = async (id) => {
	const USerFilter = await User.findAll({ where: { id }});
	return USerFilter;
};

module.exports = {
	loginUserController,
	createUserController,
	deleteUserController,
	getAllUserControllers,
	putUserController,
	getUserByIdController,
};
