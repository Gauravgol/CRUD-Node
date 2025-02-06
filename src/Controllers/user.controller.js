import { deleteUserService } from "../Services/deleteUser.service.js"
import { getUserService } from "../Services/getUser.service.js"
import { saveUserService } from "../Services/saveUser.service.js"
import { updateUserService } from "../Services/updateUser.service.js"

export const saveUserController = async (req, res) => {
    try {
        const api = await saveUserService(req)
        return res.status(api?.subCode).json(api)

    } catch (error) {
        console.log("file: bpController.js:8  exports.bpDepositController=  error:", error?.message)

        return res.status(500).json({ message: `${error?.message}` })
    }
}

export const getUserController = async (req, res) => {
    try {
        const api = await getUserService(req)
        return res.status(api?.subCode).json(api)

    } catch (error) {
        console.log("getUserController  error:", error)

        return res.status(500).json({ message: `${error?.message}` })
    }
}

export const deleteUserController = async (req, res) => {
    try {
        const api = await deleteUserService(req)
        return res.status(api?.subCode).json(api)

    } catch (error) {
        console.log("deleteUserController  error:", error)


        return res.status(500).json({ message: `${error?.message}` })
    }
}



export const updateUserController = async (req, res) => {
    try {
        const api = await updateUserService(req)
        return res.status(api?.subCode).json(api)

    } catch (error) {
        console.log("deleteUserController  error:", error)


        return res.status(500).json({ message: `${error?.message}` })
    }
}


