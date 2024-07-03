const express = require("express");
const router =express.Router();
const UserController =require('../controllers/auth'); 
const Jobcontroller = require('../controllers/job');
const notesController = require('../controllers/notes');

// user routes
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/getusers", UserController.getusers);


// Job Application routes

router.post('/job',Jobcontroller.addApplication);
router.get('/getAllJob',Jobcontroller.getApplications);
router.put('/UpdateJob/:id',Jobcontroller.updateApplication);
router.delete('/deleteJob/:id',Jobcontroller.deleteApplication);

// Notes routes
router.post('/addnote/:id',notesController.addNote);
router.get('/getNotes',notesController.getNotes);

module.exports = router; 