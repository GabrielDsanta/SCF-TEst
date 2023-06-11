import { data } from "../mock/fakeData.js"

export function getUser(req, res, __) {
    const { id } = req.params;

    const index = data.findIndex(user => user.id == id);
    const user = data[index];
    user.views = user.views ? user.views + 1 : 1;
    res.send(user);
};

export function getUsers(_, res, __){
    const users = data.filter((user) => {
        if(user !== undefined){
            user.views = user.views ? user.views + 1 : 1
        }
        return user !== undefined
    });
    res.send(users);
};
