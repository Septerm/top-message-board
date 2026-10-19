const db = require('../db/queries')

// const messages = [
//     {
//         text: "Hi there",
//         user: "Septermus",
//         added: new Date()
//     },
//     {
//         text: "How is everyone doing?",
//         user: "Brandon",
//         added: new Date()
//     },
// ]


// --------------- GET ------------------------

// Gets all messaages from database

async function getMessages(req, res) {

    const messages = await db.getAllMessages();
    
    res.status(200).render("index", {messages: messages})
}

// Gets Form page for adding new messages

function getNewMessageForm(req, res) {
    
    res.status(200).render("form")
}



// --------------- POST ------------------------

// POST - Adds a new message to the database 


async function addMessage(req, res) {

    const {text, user} = req.body;
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    

    await db.insertMessage(user, text, formattedDate)

    res.status(200).redirect("/")

}





module.exports = {getNewMessageForm, addMessage, getMessages};