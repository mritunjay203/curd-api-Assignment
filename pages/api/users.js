// Import necessary modules and controller functions
import { getUser, createUser, updateUser, deleteUser } from '../../controllers/userController';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Handle GET request
      const user = await getUser(req.query.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    try {
      // Handle POST request
      const newUser = await createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'PUT') {
    try {
      // Handle PUT request
      const updatedUser = await updateUser(req.query.id, req.body);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'DELETE') {
    try {
      // Handle DELETE request
      const deletedUser = await deleteUser(req.query.id);
      res.status(200).json(deletedUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
