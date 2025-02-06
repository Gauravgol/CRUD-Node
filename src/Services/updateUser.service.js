import { ApiResponse } from "../Utils/ApiResponse.js";
import User from "../Models/user.model.js";

export const updateUserService = async (req) => {
    try {
        const { _id, username, email } = req.body;


        const updatedUser = await User.findByIdAndUpdate(
            _id,
            { username, email },
            { new: true }
        );


        if (!updatedUser) {
            return new ApiResponse(404, "User not found");
        }

        return new ApiResponse(200, "User updated successfully", updatedUser);
    } catch (error) {
        console.log("Error in updateUserService:", error);
        return new ApiResponse(500, error.message || "Internal server error");
    }
};
