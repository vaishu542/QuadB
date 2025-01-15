import React from 'react';
import { useTaskContext } from './TaskContext';
import down from '../assets/rightsidebar/down.svg';
import Ddown from '../assets/rightsidebar/Ddown.svg';
import notification from '../assets/rightsidebar/notification.svg';
import repeat from '../assets/rightsidebar/repeat.svg';
import calendar from '../assets/leftsidebar/calendar.svg';
import Checkbox from './CheckBox';

const ToDo = ({ isDark }) => {
  const {
    tasks,
    newTask,
    setNewTask,
    addTask,
    handleTaskStatusChange,
    handleTaskImportance,
    incompleteTasks,
    completedTasks,
  } = useTaskContext();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && newTask.trim()) {
      addTask();
    }
  };

  return (
    <div className="w-full h-full px-2">
      <div
        className={`${
          isDark ? 'text-[#97F69BB5]' : 'text-[#142E15]'
        } flex items-center border-b-2 border-[#496E4B33] mt-0 pb-1`}
      >
        <p>To Do</p>
        <img src={isDark ? Ddown : down} alt="down" />
      </div>
      <div
        className={`addTask ${
          isDark ? 'text-white bg-[#2F3630]' : 'text-[#1B281BB8] bg-ash'
        } w-full px-4`}
      >
        <input
          type="text"
          className="bg-transparent py-8 focus:outline-none w-full"
          placeholder="Add A Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <div className="flex items-center justify-between py-4">
          <div className="icons flex space-x-5">
            <img
              src={notification}
              alt="notification"
              className={`${isDark ? 'filter invert' : ''}`}
            />
            <img
              src={repeat}
              alt="repeat"
              className={`${isDark ? 'filter invert' : ''}`}
            />
            <img
              src={calendar}
              alt="calendar"
              className={`${isDark ? 'filter invert' : ''}`}
            />
          </div>
          <div className="btn">
            <button
              onClick={addTask}
              className={`${
                isDark ? 'bg-[#347136] text-[#CFCFCF]' : 'bg-[#35793729] text-greenCol'
              } p-3 rounded-lg`}
            >
              ADD TASK
            </button>
          </div>
        </div>
      </div>
      <div className="taskList my-3">
        <div className="incomplete">
          {incompleteTasks.map((task) => (
            <Checkbox
              key={task.id}
              task={task}
              isDark={isDark}
              onCheckChange={(isChecked) =>
                handleTaskStatusChange(task.id, isChecked)
              }
              onImportantChange={(isImportant) =>
                handleTaskImportance(task.id, isImportant)
              }
            />
          ))}
        </div>

        {completedTasks.length > 0 && (
          <div className="completed mt-6">
            <p className={`${isDark ? 'text-[#97F69BB5]' : 'text-[#142E15]'} mb-4`}>
              Completed
            </p>
            {completedTasks.map((task) => (
              <Checkbox
                key={task.id}
                task={task}
                isDark={isDark}
                onCheckChange={(isChecked) =>
                  handleTaskStatusChange(task.id, isChecked)
                }
                onImportantChange={(isImportant) =>
                  handleTaskImportance(task.id, isImportant)
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ToDo;
