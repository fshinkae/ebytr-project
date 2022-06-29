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

const modelUpdate = async (id, body) => {
  const { task, status } = body;
  const query = `UPDATE Ebytr.task SET task = ?, status = ?
                 WHERE id = ?`;
  await connection.execute(query, [task, status, id]);

  return {
    id,
    task,
    status,
  };
};

module.exports = {
  modelCreate,
  modelRead,
  modelUpdate,
};
