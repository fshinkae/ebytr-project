const routerTask = require('express').Router();
const controllerTask = require('../controller/controllerTasks');

routerTask.post('/', controllerTask.create);

module.exports = {
  routerTask,
};
