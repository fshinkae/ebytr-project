const modelTask = require('../model/modelTasks');

const serviceCreate = async (task) => {
  const newTask = await modelTask.modelCreate(task);
  return newTask;
};

const serviceRead = async () => {
  const allTasks = await modelTask.modelRead();
  return allTasks;
};

const serviceUpdate = async (id, body) => {
  const updateTask = await modelTask.modelUpdate(id, body);
  return updateTask;
};

const serviceDelete = async (id) => modelTask.modelDelete(id);

module.exports = {
  serviceCreate,
  serviceRead,
  serviceUpdate,
  serviceDelete,
};
