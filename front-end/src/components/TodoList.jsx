import React, { useContext } from 'react';
import Context from '../context/Context';
import Service from '../service/Service';

export default function TodoList() {
  const { list } = useContext(Context);

  const deleteTask = async (task) => {
    await Service.deleteTask(task);
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
        </li>
      ))}
    </ul>
  );
}
