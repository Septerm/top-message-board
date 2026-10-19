const {Router} = require("express");
const {getNewMessageForm, addMessage, getMessages} = require("../controllers/messageController")


const messageRouter = Router();



messageRouter.get("/", getMessages);
messageRouter.get("/new", getNewMessageForm);
messageRouter.post("/new", addMessage);

module.exports = messageRouter;

