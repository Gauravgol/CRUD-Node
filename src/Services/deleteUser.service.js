import { ApiResponse } from "../Utils/ApiResponse.js";
import bcrypt from 'bcrypt';
import User from "../Models/user.model.js";

export const deleteUserService = async (req) => {
    try {

        const { id } = req.query;
        console.log("deleteUserService  req.query:", req.query)




        const deleteUser = await User.deleteOne({ _id: id });



        return new ApiResponse(200, "User deleted Successfully");
    } catch (error) {
        console.log("Error in saveUserService:", error);
        return new ApiResponse(500, error.message || "Internal server error");
    }
};
