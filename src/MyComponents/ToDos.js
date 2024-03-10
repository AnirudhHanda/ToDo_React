import React, { useState } from 'react';
import { ToDoItem } from './ToDoItem';

export default function Todos({ todosData }) {
  const [todos, setTodos] = useState(todosData);
  const [completed, setCompleted] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoDescription, setNewTodoDescription] = useState('');

  const toggleComplete = (todoId) => {
    if (completed.includes(todoId)) {
      setCompleted(completed.filter(id => id !== todoId));
    } else {
      setCompleted([...completed, todoId]);
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if(!newTodoTitle || !newTodoDescription){
      alert("Title or Desc cannot be blank!");
      return;
    }
    setTodos(prevTodos => {
      const newId = prevTodos.length > 0 ? prevTodos[prevTodos.length - 1].id + 1 : 1;
      const newTodo = {
        id: newId,
        title: newTodoTitle || `New Todo ${newId}`,
        description: newTodoDescription || 'Description goes here',
      };
      return [...prevTodos, newTodo];
    });
    // Reset form fields and hide the form
    setNewTodoTitle('');
    setNewTodoDescription('');
    setShowAddForm(false);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-gray-800 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md w-full sm:max-w-3xl mt-8">
        <h2 className="text-3xl font-bold text-gray-200 mb-2 text-center">Your Todo List</h2>
        <p className="text-lg text-gray-300 mb-4 text-center">Stay organized and productive</p>
        {todos.map(todo => {
          return <ToDoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} handleDelete={handleDelete} completed={completed}/>
        })}
        {showAddForm && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 flex justify-center items-center z-50">
            <div className="bg-gray-100 rounded-lg shadow-md p-6 w-full sm:max-w-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Add New Todo</h2>
              <input type="text" placeholder="Enter title" value={newTodoTitle} onChange={e => setNewTodoTitle(e.target.value)} className="bg-gray-200 text-gray-900 px-4 py-2 rounded-md mb-2 w-full" />
              <textarea placeholder="Enter description" value={newTodoDescription} onChange={e => setNewTodoDescription(e.target.value)} className="bg-gray-200 text-gray-900 px-4 py-2 rounded-md mb-4 w-full" />
              <div className="flex justify-center">
                <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mr-2" onClick={handleAddTodo}>Add Todo</button>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" onClick={() => setShowAddForm(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center">
          <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" onClick={() => setShowAddForm(true)}>Add Todo</button>
        </div>
      </div>
    </div>
  );
}
