import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
    {
        hostId: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        hostname: {
            type: String,
            required: true,
        },
        members: {
            type: [{ userId: String, username: String }],
        },
        description: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);
const GroupModel = mongoose.model("Group", groupSchema);

export default GroupModel;