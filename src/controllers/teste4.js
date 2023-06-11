import { data } from "../mock/fakeData.js"

export function uploadUser(req, res) {
    const { id } = req.params;
    const { newName, job } = req.body;

    const index = data.findIndex(d => d.id == id);

    if (index !== -1) {
        const user = data[index];
        user.name = newName;
        user.job = job;
        res.send(user);
    } else {
        res.send("user not found");
    }
};
