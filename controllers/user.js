// const user = require('../models/user');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// async function register (req, res) {
//   const { Name, Email, Password } = req.body;
//   try {
//     let user = await User.findOne({ Email });
//     if (user) return res.status(400).json({ msg: 'User already exists' });

//     user = new User({ Name, Email, Password });
//     const salt = await bcrypt.genSalt(10);
//     user.Password = await bcrypt.hash(Password, salt);
//     await user.save();

//     const payload = { user: { id: user.id } };
//     jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
//       if (err) throw err;
//       res.json({ token });
//     });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// };

// async function login (req, res){
//   const { email, password } = req.body;
//   try {
//     let user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

//     const payload = { user: { id: user.id } };
//     jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
//       if (err) throw err;
//       res.json({ token });
//     });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// };

// async function getusers(req, res) {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Server error');
//   }
// }


// module.exports ={
//   register,
//   login,
//   getusers,
// }












// // const mongoose = require('mongoose');
// // const User = require('../models/user');

// // async function createUser(req, res) {
// //   console.log("user id :", req.body);
// //   try {
// //       const newUser = new User(req.body);
// //       const result = await newUser.save();
// //       res.status(201).send(result);
// //   } catch (error) {
// //       res.status(400).send(error);
// //   }
// // };

// // async function getUsers(req, res) {
// //   console.log("all user id :", req.body);
// //   try {
// //       const result = await User.find();
// //       res.status(201).send(result);
// //   } catch (error) {
// //       res.status(400).send(error);
// //   }
// // };

// // module.exports = { createUser, getUsers };
