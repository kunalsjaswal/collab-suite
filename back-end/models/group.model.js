import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        hostname: {
            type: String,
            required: true,
        },
        members: {
            type: [{ username: String }],
        },
        description: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);
const GroupModel = mongoose.model("Group", groupSchema);

export default GroupModel;