const modelTask = require('../model/modelTasks');

const serviceCreate = async (task) => {
  const newTask = await modelTask.modelCreate(task);
  return newTask;
};

const serviceRead = async () => {
  const allTasks = await modelTask.modelRead();
  return allTasks;
};

module.exports = {
  serviceCreate,
  serviceRead,
};
