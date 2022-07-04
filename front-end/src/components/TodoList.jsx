import React, { useContext } from 'react';
import Context from '../context/Context';
import Service from '../service/Service';

export default function TodoList() {
  const { list } = useContext(Context);

  const deleteTask = async (task) => {
    await Service.deleteTask(task);
  };

  const updateStatus = async (id, task, status) => {
    await Service.editTask(id, task, status);
  };

  return (
    <ul>
      {list.data?.map((e) => (
        <li key={e.id}>
          {e.task}
          <button
            type="button"
            onClick={() => deleteTask(e.id)}
          >
            X
          </button>
          <select
            name={e.id}
            placeholder={e.id}
            // value={e.status}
            onChange={(event) => updateStatus(e.id, e.task, event.currentTarget.value)}
          >
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
        </li>
      ))}
    </ul>
  );
}
