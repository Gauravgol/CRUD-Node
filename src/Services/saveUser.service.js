import { ApiResponse } from "../Utils/ApiResponse.js";
import bcrypt from 'bcrypt';
import User from "../Models/user.model.js";

export const saveUserService = async (req) => {
    try {

        const { username, email, password } = req.body;


        const hashPassword = await bcrypt.hash(password, 10);


        const savedUser = await User.create({
            username,
            email,
            password: hashPassword
        });


        return new ApiResponse(200, "User saved successfully", savedUser);
    } catch (error) {
        console.log("Error in saveUserService:", error);
        return new ApiResponse(500, error.message || "Internal server error");
    }
};
