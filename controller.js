const Message = require("./model");

// get all messages
const getMessage = async (req, res) => {
  try {
    const messages = await Message.find({});
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add one Message
const addMessage = async (req, res) => {
    try {
      const { sender, recipient, content } = req.body;
      const newMessage = new Message({ sender, recipient, content });
      await newMessage.save();
      res.status(201).json(newMessage);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Get Message by ID
const getGoal = async (req, res) => {
    try {
      const { id } = req.params;
      const goal = await Goal.findById(id);
      if (!goal) {
        return res.status(404).json({ message: "Message not found" });
      }
      res.status(200).json(goal);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


module.exports = {
    getMessage,
    addMessage,
    getMessage,
 // deleteGoal,
 // deleteAllGoals,
 // updateGoal,
};