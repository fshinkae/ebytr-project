const routerTask = require('express').Router();
const controllerTask = require('../controller/controllerTasks');

routerTask.post('/', controllerTask.create);
routerTask.get('/', controllerTask.read);
routerTask.put('/:id', controllerTask.update);

module.exports = {
  routerTask,
};
