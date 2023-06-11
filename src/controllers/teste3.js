import { data } from "../mock/fakeData.js"

export function deleteUser(req, res) {
    const { id } = req.params;
    const index = data.findIndex(user => user.id === id);
    
    if (index !== -1) {
        data[index] = undefined;
        res.send("success");
    } else {
        res.send("user not found");
    }
};
