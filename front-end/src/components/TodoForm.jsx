import React, { useContext } from 'react';
import Context from '../context/Context';
import Service from '../service/Service';

export default function TodoForm() {
  const { task, setTask } = useContext(Context);

  const handleChange = ({ target }) => {
    setTask(
      target.value,
    );
  };

  const onClick = () => {
    Service.createTask(task);
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
