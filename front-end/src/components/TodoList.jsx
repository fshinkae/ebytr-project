import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Context from '../context/Context';
import Service from '../service/Service';

import '../style.css';

export default function TodoList() {
  const { list, refresh, setRefresh } = useContext(Context);
  const [edit, setEdit] = useState({
    isEditing: false,
    idEdit: 0,
    status: '',
  });
  const [newTask, setNewTask] = useState('');

  const deleteTask = async (task) => {
    await Service.deleteTask(task);
    if (refresh === false) setRefresh(true);
  };

  const updateStatus = async (id, task, status) => {
    await Service.editTask(id, task, status);
    if (refresh === false) setRefresh(true);
  };

  const editorChange = async (id, status) => {
    setEdit({
      isEditing: true,
      idEdit: id,
      status,
    });
  };

  const editFunction = async (id) => {
    const editValue = document.querySelector('#editArea').innerHTML;
    await Service.editTask(id, editValue, edit.status);
    setEdit({
      isEditing: false,
    });
    if (refresh === false) setRefresh(true);
  };

  useEffect(() => {
    setRefresh(false);
  }, [refresh]);

  return (
    <Table>
      <thead>
        <th>#</th>
        <th>Task</th>
        <th>Status</th>
        <th>Tools</th>
      </thead>
      <tbody>
        {list.data?.map((e) => (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.task}</td>
            <td>
              <select
                name={e.id}
                value={e.status}
                onChange={(event) => updateStatus(e.id, e.task, event.currentTarget.value)}
              >
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </select>
            </td>
            <td>
              <div>
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
              </div>
            </td>
          </tr>
        ))}
        { edit.isEditing && (
        <div>
          <textarea id="editArea" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
          <button type="button" onClick={() => editFunction(edit.idEdit)}>
            Confirm?
          </button>
        </div>
        )}
      </tbody>
    </Table>
  );
}
