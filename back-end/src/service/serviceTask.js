const modelTask = require('../model/modelTasks');

const serviceCreate = async (task) => {
  const newTask = await modelTask.modelCreate(task);
  return newTask;
};

module.exports = {
  serviceCreate,
};
