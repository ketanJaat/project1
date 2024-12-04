// const path = require('path');
// const _dirname = path.resolve();

const express = require('express');
const app = express();
const cors = require('cors');

//load config from env file 
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
const fileupload = require('express-fileupload');

//middlewares to parse json request body
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

//import routes from route folder
const routes = require('./routes/route');

app.use('/api/v1' , routes);

// app.use(express.static(path.join(_dirname , "/frontend/vite-project/dist")));
// app.get('*' , (_, res) => {
//     res.sendFile(path.resolve(_dirname , "frontend", "vite-project" , "dist" , "index.html"));
// })

//start server
app.listen(PORT , () => {
    console.log(`server listening at port ${PORT}`);
})

const dbConnect = require('./config/database');
dbConnect();

//default home page on browser
app.get('/' , (req,res) => {
    res.send('<h1>hello baby , how are you</h1>');
})

const cloudinary = require('./config/cloudinary');
cloudinary.cloudinaryConnect();

