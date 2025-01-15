import React, { useState } from 'react';
import Checkbox from './CheckBox';
import close from '../assets/rightsidebar/close.svg';
import date from '../assets/rightsidebar/date.svg';
import deleteImg from '../assets/rightsidebar/delete.svg';
import notification from '../assets/rightsidebar/notification.svg';
import repeat from '../assets/rightsidebar/repeat.svg';
import add from '../assets/leftsidebar/add.svg';
import { DatePicker } from 'antd';
// import "antd/dist/antd.css"; // Import Ant Design styles
// import { DatePicker } from "antd";

const RightSideBar = ({ isDark }) => {
  const [dueDate, setDueDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDatePickerClick = () => {
    setShowDatePicker(!showDatePicker); // Toggle DatePicker visibility
  };

  return (
    <div className={` ${isDark ? 'text-white' : ' text-darkgreenText'} w-full h-full flex justify-between flex-col`}>
      <div className='py-14  pl-6'>
        <div className=" border-t-2 border-[#496E4B33]">
          <div className="flex items-center justify-between p-4">
            <Checkbox
              task={{ text: 'Buy groceries', isCompleted: false, isImportant: false }}
              isDark={isDark}
              style={true}
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="border-t-2 border-[#496E4B33]">
            <button className={`flex items-center space-x-3 w-full px-2 py-4 rounded-lg ${isDark ? 'hover:bg-darkgreenCol hover:text-greenText ' : 'hover:bg-ash hover:text-greenCol'}`}>
              <img src={add} className={` ${isDark ? 'filter invert ' : ''} `} />
              <span>Add Step</span>
            </button>
          </div>
          <div className="border-t-2 border-[#496E4B33]">
            <button className={`flex items-center space-x-3 w-full px-2 py-4 rounded-lg ${isDark ? 'hover:bg-darkgreenCol hover:text-greenText ' : 'hover:bg-ash hover:text-greenCol'}`}>
              <img src={notification} className={` ${isDark ? 'filter invert ' : ''} `} />
              <span>Set Reminder</span>
            </button>
          </div>
          <div className="border-t-2 border-[#496E4B33]">
            <div className={`flex items-center space-x-3 w-full px-2 py-4 rounded-lg ${isDark ? 'hover:bg-darkgreenCol hover:text-greenText ' : 'hover:bg-ash hover:text-greenCol'}`}>
              <img src={date} className={` ${isDark ? 'filter invert ' : ''} `} />
              <span onClick={handleDatePickerClick} className='cursor-pointer'>Set Due Date</span>

            </div>
            {showDatePicker && (
              <div className="mt-2">
                <DatePicker
                  value={dueDate}
                  onChange={(date) => setDueDate(date)}
                  className={`w-full ${isDark ? 'bg-darkgreenCol text-white' : 'bg-white text-darkgreenText'}`}
                />
              </div>
            )}
          </div>
          <div className="border-t-2 border-[#496E4B33]">
            <button className={`flex items-center space-x-3 w-full px-2 py-4 rounded-lg ${isDark ? 'hover:bg-darkgreenCol hover:text-greenText ' : 'hover:bg-ash hover:text-greenCol'}`}>
              <img src={repeat} className={` ${isDark ? 'filter invert ' : ''} `} />
              <span>Repeat</span>
            </button>
          </div>
          <div className="border-t-2 border-[#496E4B33]">
            <button className={`flex items-center space-x-3 text-[#1B281B96] w-full px-2 py-4 rounded-lg ${isDark ? 'hover:bg-darkgreenCol hover:text-greenText ' : 'hover:bg-ash hover:text-greenCol'}`}>
              <span>Add Notes</span>
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-[#496E4B33]">
        <div className="bottom flex justify-between items-center px-3 pt-6 pb-8">
          <img src={close} className={` ${isDark ? 'filter invert ' : ''} `} alt="close" />
          <span className={` ${isDark ? 'text-[#F6FFF696] ' : 'text-[#1B281B96]'} text-sm `} >Created Today</span>
          <img src={deleteImg} className={` ${isDark ? 'filter invert ' : ''} `} alt="delete" />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
