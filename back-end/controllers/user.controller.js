import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";

export async function registerUser(req, res) {
    try {
        let { username, email, password } = req.body;
        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password, salt);

        let emailExists = await UserModel.findOne({ email: email });
        let userExists = await UserModel.findOne({ username: username });
        if (userExists || emailExists) {
            return res.status(400).json({ message: "Username or Email already in use." });
        }

        let user = UserModel.create({ username, email, password: hashedPassword });
        res.status(201).json({ message: "User created" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }

}

export async function loginUser(req, res) {
    try {
        let { username, password } = req.body;
        let user = await UserModel.findOne({ username: username });
        let email = await UserModel.findOne({ email: username });
        if (!user && !email) {
            return res.status(400).json({ message: "Invalid username or email" });
        }
        let isPasswordValid = await bcrypt.compare(password, user ? user.password : email.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" });
        }
        res.status(200).json({ message: "Login successful" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

