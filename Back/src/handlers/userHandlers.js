const {
    createUserController,
    deleteUserController,
    getAllUserControllers,
    putUserController,
    getUserByIdController,
    loginUserController
} = require('../controllers/UserController');

const loginUserHandler = async (req, res) => {
   try {
     const { email, password } = req.body
     const response = await loginUserController( email, password );
     res.status(200).json(response);
   } catch (error) {
     res.status(400).json({ error: error.message });
   };
  };

const createUserHandler = async (req, res) => {
   try {
       const { type, firstname, lastname, age, email, password, image } = req.body;
       const response = await createUserController(
           type,
           firstname,
           lastname,
           age,
           email,
           password,
           image
       );
       res.status(200).json(response);
   } catch (error) {
       res.status(400).json({ error: error.message });
   }
};

const deleteUserHandler = async (req, res) => {
   try {
       const { id } = req.params;
       if (!id) {
           throw Error(`${id} Usuario inexistente.`);
       } else {
           const deleteUser = await deleteUserController(id);
           res.status(200).json(deleteUser + ' Usuario borrado con éxito');
       }
   } catch (error) {
       res.status(500).json({ error: error.message });
   }
};

const getAllUserHandler = async (req, res) => {
   try {
       const getallUser = await getAllUserControllers();
       res.status(200).json(getallUser);
   } catch (error) {
       res.status(500).json({ error: error.message });
   }
};

const putUserHandler = async (req, res) => {
   const { id } = req.params;
   const editedData = req.body;
   try {
       const editUser = await putUserController( id, editedData );
       return res.status(200).json(editUser);
   } catch (error) {
       res.status(400).json({ error: error.message });
   }
};

const getUserIDHandler = async (req, res) => {
   try {
       const { id } = req.params;
       if (id) {
           const USerId = await getUserByIdController(id);
           if (!USerId) throw Error(`El usuario ${id} no existe.`);
           else return res.status(200).json(USerId);
       }
   } catch (error) {
       res.status(500).json({ error: error.message });
   }
};

module.exports = {
   loginUserHandler,
   createUserHandler,
   deleteUserHandler,
   getAllUserHandler,
   putUserHandler,
   getUserIDHandler,
};
