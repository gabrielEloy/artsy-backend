import mongoose from 'mongoose';

const dbConnect = async () => {
mongoose.connect("mongodb+srv://gabrielEloy:eloy123@cluster0-bvw41.mongodb.net/Artify?retryWrites=true&w=majority",
{useUnifiedTopology: true, useNewUrlParser: true})
.then(() => console.log('Database connection succesfully made'))
.catch(e => console.log('Error while connecting to databse', e))
}

export default dbConnect;