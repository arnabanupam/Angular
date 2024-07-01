import express from 'express';
import Role from '../models/Role.js';
import { createRole, deleteRole, getAllRoles, updateRole } from '../controllers/role.controller.js';

const router = express.Router();

//Create a new role in DB
router.post('/create', createRole);

//Update Role in DB
router.put('/update/:id', updateRole);

//get all roles from DB
router.get('/',getAllRoles);

//Delete role from DB
router.delete("/delete/:id", deleteRole);

export default router;