import UserModel from "../models/user.model.js";

export const getUsers = async(req,res)=>{
    try {
        let data = await UserModel.find();
        res.status(200).json(data);

    } catch (err) {
        res.status(500).json({status:0, message: err.message });
    }
}

