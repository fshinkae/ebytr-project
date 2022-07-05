import React, { useContext, useEffect, useState } from 'react';
import { Form, Table, Button } from 'react-bootstrap';
import Context from '../context/Context';
import Service from '../service/Service';

import deleteIcon from '../images/deleteIcon.png';
import editIcon from '../images/editIcon.png';

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
    <Table striped bordered hover variant="dark">
      <thead>
        <th>#</th>
        <th className="taskA">Task</th>
        <th>Status</th>
        <th>Actions</th>
      </thead>
      <tbody>
        {list.data?.map((e) => (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td className="taskA">{e.task}</td>
            <td>
              <Form.Select
                class="selectpicker"
                data-size="4"
                name={e.id}
                value={e.status}
                onChange={(event) => updateStatus(e.id, e.task, event.currentTarget.value)}
              >
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </Form.Select>
            </td>
            <td>
              <div className="actionsGroup">
                <Button
                  variant="danger"
                  className="buttonGroup"
                  type="button"
                  onClick={() => deleteTask(e.id)}
                >
                  <img src={deleteIcon} alt="edit" />
                </Button>
                <Button
                  variant="warning"
                  className="buttonGroup"
                  type="button"
                  onClick={() => editorChange(e.id, e.status)}
                >
                  <img src={editIcon} alt="edit" />
                </Button>
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
