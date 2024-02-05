import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";

async function registerUser(req, res) {
    let { username, email, password } = req.body;
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);

    let emailExists = await UserModel.findOne({ email: email });
    let userExists = await UserModel.findOne({ username: username });
    if (userExists || emailExists) {
        return res.status(400).json({ message: "Username or Email already in use." });
    }

    try {
        let user = UserModel.create({ username, email, password: hashedPassword });
        res.status(201).json({ message: "User created" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }

}
export default registerUser;