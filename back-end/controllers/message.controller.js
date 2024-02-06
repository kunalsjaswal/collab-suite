import MessageModel from "../models/message.model.js";

export async function createMessage(req, res) {
    try {
        const { userId, username, message, groupId } = req.body;

        const newMsg = await MessageModel.create({ userId, username, message, groupId });

        return res.status(201).send(newMsg);

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

export async function deleteMessage(req, res) {
    try {
        const { msgId } = req.body;

        const deleted = await MessageModel.findByIdAndDelete(msgId);

        if (deleted) {
            return res.status(200).send("Message deleted");
        }
        throw new Error("Message not found");

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}