import { ApiResponse } from "../Utils/ApiResponse.js";

import User from "../Models/user.model.js";

export const getUserService = async (req) => {
    try {

        const { id } = req.query;
        console.log("saveUserService  req.query:", req.query)

        const userData = await User.findById({ id });

        if (!userData) return new ApiResponse(404, "User Not found")


        return new ApiResponse(200, "User saved successfully", userData);
    } catch (error) {
        console.log("saveUserService  error:", error)

        return new ApiResponse(500, error.message || "Internal server error");
    }
};
