import { config } from 'dotenv';
config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routers/masterRouters';


const app = express();
app.use(cors())

app.use(express.json());

app.use('/api', routes);

const port = process.env.PORT || 3000;

mongoose.connect((process.env.MONGODB_URL as string), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});