import React, { useContext } from 'react';
import Context from '../context/Context';

export default function TodoList() {
  const { list } = useContext(Context);
  console.log(list);
  return (
    <ul>
      {list.data?.map((e) => (
        <li key={e.id}>
          {e.task}
        </li>
      ))}
    </ul>
  );
}
