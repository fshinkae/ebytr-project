const routerTask = require('express').Router();
const controllerTask = require('../controller/controllerTasks');

routerTask.post('/', controllerTask.create);
routerTask.get('/', controllerTask.read);

module.exports = {
  routerTask,
};
