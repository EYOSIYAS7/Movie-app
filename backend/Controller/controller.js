const watchModel = require("../Model/watchlistmodel");

const signUp = (req, res) => {
  res.json({
    message:
      " we also do the authentication by using api endpoint of our backend application",
  });
};

const add = async (req, res) => {
  const result = await watchModel.find().sort({ createdAt: -1 });
  res.json(result);
};
const watchList = (req, res) => {
  const data = req.body;
  console.log(data);
  const list = new watchModel(data);
  list.save();
};
module.exports = { add, watchList, signUp };
