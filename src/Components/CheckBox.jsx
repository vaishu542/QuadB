import React from 'react';
import important from '../assets/leftsidebar/star.svg';
import markedimportant from '../assets/rightsidebar/markedImp.svg';

const Checkbox = ({ task, isDark, onCheckChange, onImportantChange, style }) => {
  const handleCheck = () => {
    onCheckChange(!task.isCompleted);
  };

  const handleImp = () => {
    onImportantChange(!task.isImportant);
  };

  return (
    <div className={`flex items-center justify-between w-full border-[#496E4B33] py-5 ${style ? ' border-t-0' : ' border-t-2'}`}>
      <div className="flex items-center space-x-4">
        <button
          onClick={handleCheck}
          className="relative w-5 h-5 flex-shrink-0 focus:outline-none"
          aria-label="Toggle checkbox"
          aria-checked={task.isCompleted}
          role="checkbox"
        >
          <div
            className={`w-5 h-5 border-2 rounded-sm transition-colors duration-200 
              ${task.isCompleted ? 'border-greenCol bg-greenCol' : isDark ? 'border-white' : 'border-[#1E1E1E]'}`}
          />
          {task.isCompleted && (
            <svg
              className="absolute top-0 left-0 w-5 h-5 text-white"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M4 10l4 4 8-8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        <span className={`transition-all duration-200 ${task.isCompleted ? 'line-through' : ''}`}>
          {task.text}
        </span>
      </div>
      <div onClick={handleImp}>
        <img
          src={task.isImportant ? markedimportant : important}
          className={`${isDark ? 'filter invert' : ''}`}
          alt="important"
        />
      </div>
    </div>
  );
};

export default Checkbox;
