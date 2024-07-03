const mongoose = require('mongoose');
const Application = require('../models/job');

async function addApplication (req, res) {
  const { company, position, status, dateApplied } = req.body;
  try {
    const newApp = new Application({
      company,
      position,
      status,
      dateApplied,
    });
    const app = await newApp.save();
    res.json(app);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

async function getApplications(req, res) {
  try {
    const apps = await Application.find({ user: req.user.id });
    res.json(apps);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

async function updateApplication (req, res) {
  const { company, position, status, dateApplied } = req.body;
  try {
    let app = await Application.findById(req.params.id);
    if (!app) return res.status(404).json({ msg: 'Application not found' });
    if (app.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

    app = await Application.findByIdAndUpdate(req.params.id, { company, position, status, dateApplied }, { new: true });
    res.json(app);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

async function deleteApplication(req, res) {
  try {
    let app = await Application.findById(req.params.id);
    if (!app) return res.status(404).json({ msg: 'Application not found' });
    if (app.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

    await Application.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Application removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports ={
    addApplication,
    getApplications,
    updateApplication,
    deleteApplication,
}











// const mongooser = require('mongoose');
// const Job = require('../models/job');
// const Note = require('../models/notes');

// // create a new job
// async function createJob(req,res){
//     console.log('Job:',req.body);
//     try {
//         const NewJob = new Job(req.body);
//         const result = await NewJob.save();
//         res.status(201).send(result);
//     } catch (error) {
//         console.log(error.message);
        
//     }
// };

// //Get all jobs

// async function getAllJobs(req,res){
//     console.log('All Jobs:',req.body);
//     try {
//         const result = await Job.find();
//         res.status(200).send(result);

//     } catch (error) {
//         console.log(error.message);
//     }
// };

// // update job

// async function UpdateJob(req,res){
//     console.log(req.body);
//     try {
//         const result = await Job.findByIdAndUpdate(req.params.id,req.body,{new:true});
//         if(!result){
//             return res.status(404).send('Job not found');
//         }
//         res.send(result);

//     }catch(error){
//         console.log(error.message);
//     }
// };

// // delete job

// async function deleteJob(req,res){
//     console.log('Deleted Job:',req.body);
//     try {
//         const result = await Job.findByIdAndDelete(req.params.id);
//         if(!result){
//             return res.status(404).send('Job not found');
//         }
//         res.send(result);

//     } catch(error){
//         console.log(error.message);
//     }
// };
//  // get job by id and give notes
//  async function notesbyjobById(req,res){
//     console.log('Get Job by id:',req.body);
//     try {
//         const result = await Job.findById(req.params.id);
//         if(!result){
//             return res.status(404).send('Job not found');
//         }
//         res.send(result);
//         const note = new Note(req.body);
//         const notejob = await note.save();
//         res.status(201).send(result);

//     } catch(error){
//         console.log(error.message);
//     }
// };

// module.exports = {
//     createJob,
//     getAllJobs,
//     UpdateJob,
//     deleteJob,
//     notesbyjobById
//  };
