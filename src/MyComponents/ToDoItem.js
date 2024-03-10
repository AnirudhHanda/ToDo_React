import React from 'react';
import { useState } from 'react';

export const ToDoItem = ({ todo, toggleComplete, handleDelete, completed }) => {
 
  return (
    <a key={todo.id} href={`#${todo.id}`}>
      <div className="group block mb-4">
        <div className="bg-gray-700 rounded-lg p-4 sm:p-6 flex items-center justify-between transition duration-300 transform hover:shadow-md hover:-translate-y-1 hover:bg-gray-800">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 rounded-full bg-gray-600 p-2">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-400 cursor-pointer" checked={completed.includes(todo.id)} onChange={() => toggleComplete(todo.id)} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-200">{todo.title}</h3>
              <p className="text-sm text-gray-300">{todo.description}</p>
            </div>
          </div>
          <div className="flex items-center">
            <button className="text-gray-400 hover:text-white mr-2" onClick={() => toggleComplete(todo.id)}>
              {completed.includes(todo.id) ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
            <button className="text-gray-400 hover:text-white mr-2" onClick={() => handleDelete(todo.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </a>
  )
}
