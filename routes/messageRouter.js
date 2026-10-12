const {Router} = require("express");
const {getAllMessages, getNewMessageForm, addMessage} = require("../controllers/messageController")


const messageRouter = Router();



messageRouter.get("/", getAllMessages);
messageRouter.get("/new", getNewMessageForm);
messageRouter.post("/new", addMessage);

module.exports = messageRouter;

