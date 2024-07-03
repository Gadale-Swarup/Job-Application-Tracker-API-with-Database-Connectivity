const express  = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const apiroutes = require("./routes/api")

const app = express();
const PORT =4311;

app.use(bodyparser.json());
app.use(express.json());
app.use(express.json({ extended: false }));

async function connectDB(){
    try {
        await mongoose.connect("mongodb://localhost:27017/JobTracker");
            console.log('database is connected')
    } catch (error) {
        console.log(error);
        
    }
}


connectDB();

app.use('/api',apiroutes)

app.listen(PORT, ()=>{
    console.log(`server on http://localhost:${PORT}`);
})


