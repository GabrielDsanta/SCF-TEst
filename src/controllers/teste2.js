import { hash } from 'bcrypt';
import { data } from "../mock/fakeData.js"
import { v4 } from 'uuid'

export async function createUser(req, res) {
  const { name, job, isAdmin, password } = req.body;
  const hashedPassword = await hash(password, 6);

  const newUser = { name, job, isAdmin, hashedPassword, id: v4(), views: 0 };
  data.push(newUser);

  res.send(newUser);
};
