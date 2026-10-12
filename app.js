const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messageRouter = require('./routes/messageRouter');

const PORT =  process.env.PORT || 3000;


app.use("/", messageRouter );


// app.get('/', (req, res) => {
    
//     res.sendFile(path.join(__dirname, './views/index.html'))
// });

app.listen(PORT, () => {
    console.log(`Server is running and listening on Port - ${PORT}`);
})