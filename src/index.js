import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dbConnect from '../src/db/mongooseConnection';

//Schemas
import User from './models/users';

const server = async () => {
    const app = express();
    //using body parser so i can work with JSON files
    app.use(bodyParser.json());
    await dbConnect();
    
    app.post('/register', (req, res) => {
        const {name, email, password} = req.body
        if(!name || !email || !password) {
            res.status(400).send({message: 'Name, password and email are required fields'})
        }
        new User({
            _id: new mongoose.Types.ObjectId(),
            name,
            email,
            password
        }).save()
        .then(res.status(200))
        .catch(res.send(400))
    })

    app.listen({port: 4001}, () => {
    })
}



server();