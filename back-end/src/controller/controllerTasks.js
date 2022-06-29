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

const update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const updateTask = await serviceTask.serviceUpdate(id, body);
  res.status(200).json(updateTask);
};

module.exports = {
  create,
  read,
  update,
};
