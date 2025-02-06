import express from 'express'
import { deleteUserController, getUserController, saveUserController, updateUserController } from '../Controllers/user.controller.js';



const router = express.Router()

router.post("/save-user", saveUserController)
router.get('/get-user', getUserController)
router.delete('/delete-user', deleteUserController)
router.patch('/update-user', updateUserController)


export default router;


