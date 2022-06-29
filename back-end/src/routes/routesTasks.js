const router = require('express').Router();
const controllerTask = require('../controller/controllerTasks');

router.post('/', controllerTask.create);

module.exports = {
  router,
};
