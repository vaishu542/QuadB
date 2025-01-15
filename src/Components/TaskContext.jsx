import React, { createContext, useContext, useState, useEffect } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          id: Date.now(),
          text: newTask,
          isCompleted: false,
          isImportant: false,
        },
      ]);
      setNewTask('');
    }
  };

  const handleTaskStatusChange = (taskId, isCompleted) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted } : task
      )
    );
  };

  const handleTaskImportance = (taskId, isImportant) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isImportant } : task
      )
    );
  };

  const incompleteTasks = tasks.filter((task) => !task.isCompleted);
  const completedTasks = tasks.filter((task) => task.isCompleted);

  const contextValue = {
    tasks,
    newTask,
    setNewTask,
    addTask,
    handleTaskStatusChange,
    handleTaskImportance,
    incompleteTasks,
    completedTasks,
    completedTasksLength: completedTasks.length,
    incompleteTasksLength: incompleteTasks.length,
  };

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};
