import { compare } from "bcrypt";
import { data } from "../mock/fakeData.js"

export async function isAdmin(req, __, next) {
  const { name, password } = req.body;

  const findUser = data.find((user) => user.name === name)

  let passwordMatch 

  if(findUser.hashedPassword){
    passwordMatch  = await compare(password, findUser.hashedPassword);
  }

  if (!passwordMatch) {
    throw new AppError("Não autorizado", 401);
  }

  next();
};
