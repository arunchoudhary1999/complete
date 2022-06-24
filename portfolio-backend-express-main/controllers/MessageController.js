const Message = require("../models/MessageModel");
const mongoose = require("mongoose");

const getAllMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({});
    res.status(200).json(messages.reverse());
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const addMessage = async (req, res, next) => {
  const message = new Message({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  });

  try {
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateMessage = async (req, res, next) => {
  const id = req.params.messageId;
  mongoose.set("useFindAndModify", false);
  Message.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
      isSeen: req.body.isSeen,
    },
    function (err, message) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res
          .status(200)
          .json({ message: "Message updated successfully", message });
      }
    }
  );
};

module.exports = {
  getAllMessages,
  addMessage,
  updateMessage,
};
