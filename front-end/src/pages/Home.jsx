import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

import '../style.css';

export default function Home() {
  return (
    <div>
      <h1>EBTYR - Todo App</h1>
      <TodoForm />
      <h2>Tasks List</h2>
      <TodoList />
    </div>
  );
}
