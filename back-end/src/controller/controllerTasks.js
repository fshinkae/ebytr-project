const serviceTask = require('../service/serviceTasks');

const create = async (req, res) => {
  const { task } = req.body;
  const newTask = await serviceTask.serviceCreate(task);
  res.status(201).json(newTask);
};

const read = async (req, res) => {
  const allTasks = await serviceTask.serviceRead();
  res.status(200).json(allTasks);
};

module.exports = {
  create,
  read,
};
