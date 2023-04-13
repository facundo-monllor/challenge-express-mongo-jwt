import User from '../models/Users.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error al obtener los usuarios');
  }
};
