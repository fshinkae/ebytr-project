const connection = require('./connection');

const getCreateTask = async (task) => {
  const query = `INSERT INTO Ebytr.task (task, status)
                 values (?, ?)`;
  const status = 'In Progress';
  const [result] = await connection.execute(query, [task, status]);

  return {
    id: result.insertId,
    task,
    status,
  };
};

module.exports = {
  getCreateTask,
};
