const messages = [
    {
        text: "Hi there",
        user: "Septermus",
        added: new Date()
    },
    {
        text: "How is everyone doing?",
        user: "Brandon",
        added: new Date()
    },
]


// --------------- GET ------------------------

// Gets all messaages from database

function getAllMessages(req, res) {
    
    res.status(200).render("index", {messages: messages})
}

// Gets Form page for adding new messages

function getNewMessageForm(req, res) {
    
    res.status(200).render("form")
}



// --------------- POST ------------------------

// POST - Adds a new message to the database 


function addMessage(req, res) {

    const {text, user} = req.body;

    const newMessage = {
        text: text,
        user: user,
        added: new Date(),
    }

    messages.push(newMessage);

    res.status(200).redirect("/")

}





module.exports = {getAllMessages, getNewMessageForm, addMessage};