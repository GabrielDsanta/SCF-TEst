import { data } from "../mock/fakeData.js"

export function listViews(req, res) {
    const { id } = req.params;
    const user = data.find(user => user.id == id);

    res.send(`Usuário ${user.name} foi lido ${user.views || '0'} vezes.`);
};
