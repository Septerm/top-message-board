require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const app = express();


app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
const assetsPath = path.join(__dirname, "public");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));


const messageRouter = require('./routes/messageRouter');

const PORT =  process.env.PORT || 3000;


app.use("/", messageRouter );


app.listen(PORT, () => {
    console.log(`Server is running and listening on Port - ${PORT}`);
})