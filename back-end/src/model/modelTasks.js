const connection = require('./connection');

const modelCreate = async (task) => {
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

const modelRead = async () => {
  const [result] = await connection.execute('SELECT * FROM Ebytr.task');
  return result;
};

module.exports = {
  modelCreate,
  modelRead,
};
