import GroupModel from "../models/group.model.js"
import UserModel from "../models/user.model.js"

export async function createGroup(req, res) {
    try {

        let { name, hostname, description, model } = req.body;

        // const user = await UserModel.findOne({ username: hostname });
        // const hostId = user._id;
        const members = [{ username: hostname }]
        let group = await GroupModel.create({ name, hostname, members, description, model });
        res.status(200).json({ status: 1, message: "Group created" });
    } catch (error) {
        res.status(500).json({ error: error.message, status: 0 });
    }
}

const memberExist = (arr, username) => {
    let flag = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]["username"] == username)
            return true;
    }

    return false;
}
export async function joinGroup(req, res) {
    try {
        let { code, username } = req.body;
        let group = await GroupModel.findOne({ _id: code });
        if (!group) {
            return res.status(404).json({ error: "Group not found" });
        }

        if (memberExist(group.members, username)) {
            return res.status(400).json({ error: "You are already in the team" });
        }
        group.members.push({ username });
        await group.save();
        res.status(200).json({ status: 1, group });

    } catch (error) {
        res.status(500).json({ status: 0, error: error.message });
    }
}

export async function getGroups(req, res) {
    try {
        let { token } = req.body;
        let hostedGroups = await GroupModel.find({ hostname: token });
        let memberGroups = await GroupModel.find({ "members.username": token });

        let groups = [...hostedGroups, ...memberGroups];
        const uniqueGroupIds = new Set();
        const filteredGroups = groups.filter(group => {
            const groupId = String(group._id);
            if (!uniqueGroupIds.has(groupId)) {
                uniqueGroupIds.add(groupId);
                return true;
            }
            return false;
        });

        res.status(200).json({ status: 1, groups: filteredGroups });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

