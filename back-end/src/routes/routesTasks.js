const routerTask = require('express').Router();
const controllerTask = require('../controller/controllerTasks');

routerTask.post('/', controllerTask.create);
routerTask.get('/', controllerTask.read);
routerTask.put('/:id', controllerTask.update);
routerTask.delete('/:id', controllerTask.remove);

module.exports = {
  routerTask,
};
