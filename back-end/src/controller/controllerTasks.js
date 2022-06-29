const serviceTask = require('../service/serviceTasks');

const create = async (req, res) => {
  const { task } = req.body;
  const newTask = await serviceTask.serviceCreate(task);
  res.status(201).JSON(newTask);
};

module.exports = {
  create,
};
