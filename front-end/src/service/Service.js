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

export default { createTask, readAllTask, deleteTask };
