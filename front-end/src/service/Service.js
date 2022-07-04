import axios from 'axios';

const URL = 'http://localhost:3000/';

const createTask = async (task, status) => {
  try {
    const result = await axios.post(`${URL}tasks`, {
      task,
      status,
    });
    return result;
  } catch (error) {
    return error;
  }
};

const readAllTask = async () => {
  try {
    const result = await axios.get(`${URL}tasks`);
    return result;
  } catch (error) {
    return error;
  }
};

const deleteTask = async (id) => {
  try {
    const result = await axios.delete(`${URL}tasks/${id}`);
    return result;
  } catch (error) {
    return error;
  }
};

const editTask = async (id, task, status) => {
  console.log('Entrando', task, status);
  try {
    const result = await axios.put(`${URL}tasks/${id}`, {
      task,
      status,
    });
    return result;
  } catch (error) {
    return error;
  }
};

export default {
  createTask,
  readAllTask,
  deleteTask,
  editTask,
};
