import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

import '../style.css';

export default function Home() {
  return (
    <div className="aplicationGroup">
      <header>
        <h1 className="display-1 text-white font-weight-bold">EBTYR</h1>
        <p>Welcome to Todolist aplication</p>
      </header>
      <TodoForm />
      <h2>Tasks List</h2>
      <TodoList />
    </div>
  );
}
