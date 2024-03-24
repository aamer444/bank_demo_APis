import express from 'express'
import * as userService from '../services/controller/user.controller.js'
const router=express.Router()

router.get('/user_details',userService.get_user_details)

export default router