import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import Service from '../service/Service';

export default function TodoList() {
  const { list } = useContext(Context);
  const [edit, setEdit] = useState({
    isEditing: false,
    idEdit: 0,
    status: '',
  });
  const [newTask, setNewTask] = useState('');

  const deleteTask = async (task) => {
    await Service.deleteTask(task);
  };

  const updateStatus = async (id, task, status) => {
    await Service.editTask(id, task, status);
  };

  const editorChange = async (id, status) => {
    setEdit({
      isEditing: true,
      idEdit: id,
      status,
    });
  };

  const editFunction = async (id) => {
    console.log(document.querySelector('#editArea'));
    const editValue = document.querySelector('#editArea').innerHTML;
    await Service.editTask(id, editValue, edit.status);
    setEdit({
      isEditing: false,
    });
  };

  useEffect(() => {

  }, [list]);

  return (
    <ul>
      {list.data?.map((e) => (
        <li key={e.id}>
          {e.task}
          <select
            name={e.id}
            // placeholder={e.id}
            value={e.status}
            onChange={(event) => updateStatus(e.id, e.task, event.currentTarget.value)}
          >
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
          <button
            type="button"
            onClick={() => deleteTask(e.id)}
          >
            X
          </button>
          <button
            type="button"
            onClick={() => editorChange(e.id, e.status)}
          >
            Edit
          </button>
        </li>
      ))}
      { edit.isEditing && (
      <div>
        <textarea id="editArea" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button type="button" onClick={() => editFunction(edit.idEdit)}>
          Confirm?
        </button>
      </div>

      )}
    </ul>
  );
}
