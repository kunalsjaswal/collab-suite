import GroupModel from "../models/group.model.js"

export async function createGroup(req, res) {
    try {
        let { hostId, name, hostname, description, model, code } = req.body;

        const members = [{ userId: hostId, username: hostname }]
        let group = await GroupModel.create({ hostId, name, hostname, members, description, model, code });
        res.status(200).json(group);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const memberExist = (arr, userId) => {
    let flag = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]["userId"] == userId)
            return true;
    }

    return false;
}
export async function joinGroup(req, res) {
    try {
        let { code, userId, username } = req.body;
        let group = await GroupModel.findOne({ code });
        if (!group) {
            return res.status(404).json({ error: "Group not found" });
        }


        if (memberExist(group.members, userId)) {
            return res.status(400).json({ error: "You are already in the team" });
        }

        group.members.push({ userId, username });
        await group.save();
        res.status(200).json(group);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getGroup(req, res) {
    try {
        let group = await GroupModel.find()
        res.status(200).json(group);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

