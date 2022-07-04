import React, { useContext } from 'react';
import Context from '../context/Context';
import Service from '../service/Service';

export default function TodoForm() {
  const {
    task, setTask, refresh, setRefresh,
  } = useContext(Context);

  const handleChange = ({ target }) => {
    setTask(
      target.value,
    );
    if (refresh === false) setRefresh(true);
  };

  const onClick = () => {
    Service.createTask(task);
    if (refresh === false) setRefresh(true);
  };

  return (
    <section>
      <textarea
        type="text"
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={onClick}
      >
        Add
      </button>
    </section>
  );
}
