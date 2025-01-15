import React from 'react'
import task from '../assets/leftsidebar/tasks.svg';
import profile from '../assets/leftsidebar/profile.svg';
import add from '../assets/leftsidebar/add.svg';
import calendar from '../assets/leftsidebar/calendar.svg';
import me from '../assets/leftsidebar/me.svg';
import star from '../assets/leftsidebar/star.svg';
import plan from '../assets/leftsidebar/plan.svg';
import info from '../assets/leftsidebar/info.svg';
import TaskProgressChart from './TaskProgressChart';
import { useTaskContext } from './TaskContext';


const LeftSideBar = ({ isDark }) => {
    const {
        completedTasksLength,
        incompleteTasksLength
    } = useTaskContext();


    return (
        <div className="w-full h-full" >
            <div className="side flex flex-col ">
                <div className="side-bar flex flex-col items-center justify-center relative">
                    <div className="profile absolute ">
                        <img src={profile} alt="profile" />
                        <p className='text-center font-medium'>Hey, ABCD</p>
                    </div>
                </div>

                <div className={`tasks mt-24 ${isDark ? 'bg-darkBg' : 'bg-white '} py-6`}>
                    <div className="space-y-2">
                        <button className={`  ${isDark ? 'hover:bg-darkgreenCol hover:text-greenText ' : 'hover:bg-ash hover:text-greenCol'} flex items-center space-x-3 w-full  py-2 px-4 rounded-lg `} >
                            <img src={task} className={` ${isDark ? 'filter invert ' : ''} `} />
                            <span>All Tasks</span>
                        </button>

                        <button className={` ${isDark ? 'hover:bg-darkgreenCol hover:text-greenText ' : 'hover:bg-ash hover:text-greenCol'} flex items-center space-x-3 w-full  py-2 px-4 rounded-lg  `}>
                            <img src={calendar} className={` ${isDark ? 'filter invert ' : ''} `} />
                            <span>Today</span>
                        </button>
                        <button className={` ${isDark ? 'hover:bg-darkgreenCol hover:text-greenText ' : 'hover:bg-ash hover:text-greenCol'} flex items-center space-x-3 w-full py-2 px-4 rounded-lg  `}>

                            <img src={star} className={` ${isDark ? 'filter invert ' : ''} `} />
                            <span>Important</span>
                        </button>
                        <button className={` ${isDark ? 'hover:bg-darkgreenCol hover:text-greenText ' : 'hover:bg-ash hover:text-greenCol'} flex items-center space-x-3 w-full  py-2 px-4 rounded-lg  `}>

                            <img src={plan} className={` ${isDark ? 'filter invert ' : ''} `} />
                            <span>Planned</span>
                        </button>
                        <button className={` ${isDark ? 'hover:bg-darkgreenCol hover:text-greenText ' : 'hover:bg-ash hover:text-greenCol'} flex items-center space-x-3 w-full  py-2 px-4 rounded-lg  `}>

                            <img src={me} className={` ${isDark ? 'filter invert ' : ''} `} />
                            <span>Assigned to me</span>
                        </button>
                    </div>
                </div>
                <div className={`list tasks mt-2 ${isDark ? 'bg-darkBg' : 'bg-white '} py-6`}>
                    <button className={` ${isDark ? 'hover:bg-darkgreenCol hover:text-greenText ' : 'hover:bg-ash hover:text-greenCol'} flex items-center space-x-3 w-full  py-2 px-4 rounded-lg  `}>

                        <img src={add} className={` ${isDark ? 'filter invert ' : ''} `} />
                        <span>Add List</span>
                    </button>
                </div>
                <div className={`progress tasks mt-2 ${isDark ? 'bg-darkBg' : 'bg-white '}  py-2 px-4`}>
                    <div className="progress-count">
                        <p>Today Tasks</p>
                        <p>11</p>
                    </div>
                </div>
                <div className={`progress tasks mt-1 ${isDark ? 'bg-darkBg' : 'bg-white '}  py-2 px-4`}>
                    <div className="progress-count">
                        <TaskProgressChart completed={completedTasksLength} pending={incompleteTasksLength} isDark={isDark} />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default LeftSideBar
