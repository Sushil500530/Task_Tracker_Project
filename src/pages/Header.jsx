// import EditTask from "./EditTask";
import { useEffect, useState } from "react";
import Modal from "../components/shared/Modal";
import CreateTask from "./CreateTask";
import TaskCard from "../components/shared/TaskCard";
import useTasks from "../components/hooks/useTasks";

const Header = () => {
    let [isOpen, setIsOpen] = useState(false);
    const [tasks, refetch] = useTasks();
    const [findPriority, setFindPriority] = useState('');
    const [findAssignment, setFindAssignment] = useState('');
    const [findDate, setFindDate] = useState('');
    const [currentTask, setCurrentTask] = useState([]);

    function openModal() {
        setIsOpen(true)
    }
    refetch()
        // search and sort data 
    useEffect(() => {
        const filterAssign = tasks?.filter(task => task.title.includes(findAssignment.toLocaleLowerCase()));
        setCurrentTask(filterAssign)
        if (findPriority) {
            const filterPriority = filterAssign?.filter(task => task.priority === findPriority);
            setCurrentTask(filterPriority)
        }
        else if (findDate) {
            const filterdate = filterAssign?.filter(task => task?.startDate?.slice(0,10) === findDate);
            setCurrentTask(filterdate)
        }
    }, [tasks, findAssignment, findPriority,findDate]);
    

    console.log('search data--------->', tasks);


    // filterd by task status 
    const pending = currentTask?.filter(task => task.status === 'pending');
    const inProgress = currentTask?.filter(task => task.status === 'inProgress');
    const completed = currentTask?.filter(task => task.status === 'completed');
    const deployed = currentTask?.filter(task => task.status === 'deployed');
    const deffered = currentTask?.filter(task => task.status === 'deffered');


    // console.log(tasks);
    return (
        <div className="space-y-5">
            {/* filter by name, priority, date  */}
            <div className="flex items-center justify-between flex-col md:flex-row lg:flex-row gap-5">
                <form className="flex items-start justify-start flex-col lg:flex-row gap-2 lg:gap-5">
                    <h1 className="text-xl font-bold text-start">Filter By: </h1>
                    <div className="flex items-start gap-3 justify-start">
                        <input onChange={() => setFindAssignment(event.target.value)} type="text" name="assignmentName" placeholder="Assignment Name" className="px-2 py-1 rounded w-1/3 lg:w-1/3" />
                        <select value={findPriority} onChange={() => setFindPriority(event.target.value)} name="sortBy" id="sortBy" className="px-2 py-1 rounded">
                            <option disabled value="">Priority</option>
                            <option value="p0">P0</option>
                            <option value="p1">P1</option>
                            <option value="p2">P2</option>
                        </select>
                        <input type="date" key="default" onChange={() => setFindDate(event.target.value)} name="date" id="" className="px-2 py-1 rounded" />
                    </div>
                </form>
                <button onClick={openModal} className="px-10 py-1 bg-[#26689a] text-white rounded-md">Add New Task</button>
            </div>
            {/* sort by priority  */}
            <div className="flex items-center justify-center md:justify-start lg:justify-start gap-5">
                <h1 className="text-xl font-bold ">Sort By:  </h1>
                <select value={findPriority} onChange={() => setFindPriority(event.target.value)} name="sortBy" id="sortBy" className="px-2 py-1 rounded">
                    <option disabled value="">Priority</option>
                    <option value="p0">P0</option>
                    <option value="p1">P1</option>
                    <option value="p2">P2</option>
                </select>
            </div>
            {/* create task modal show  */}
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
                <CreateTask setIsOpen={setIsOpen} />
            </Modal>
            {/* category or status task header  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 text-white text-[18px]">
                {/* task card  */}
                <div className="bg-white">
                    <h1 className="w-full rounded-t-md py-2 bg-[#8b8c8e] text-center">Pending</h1>
                    <div className="flex flex-col w-full">
                        {
                            pending?.length > 0 && pending?.map(pendingTask => <TaskCard currentTask={pendingTask} key={pendingTask._id} />)
                        }

                    </div>
                </div>
                <div className="bg-white">
                    <h1 className="w-full rounded-t-md py-2 bg-[#e49c1d] text-center">In Progress</h1>
                    <div className="flex flex-col w-full">
                        {
                            inProgress?.length > 0 && inProgress?.map(inprogressTask => <TaskCard currentTask={inprogressTask} key={inprogressTask._id} />)
                        }
                    </div>
                </div>
                <div className="bg-white">
                    <h1 className="w-full rounded-t-md py-2 bg-[#45a822] text-center">Completed</h1>
                    <div className="flex flex-col w-full">
                        {
                            completed?.length > 0 && completed?.map(completeTask => <TaskCard currentTask={completeTask} key={completed._id} />)
                        }
                    </div>
                </div>
                <div className="bg-white">
                    <h1 className="w-full rounded-t-md py-2 bg-[#353a74] text-center">Deployed</h1>
                    <div className="flex flex-col w-full">
                        {
                            deployed?.length > 0 && deployed?.map(deployTask => <TaskCard currentTask={deployTask} key={deployTask._id} />)
                        }
                    </div>
                </div>
                <div className="bg-white ">
                    <h1 className="w-full rounded-t-md py-2 bg-[#f78772] text-center">Deffered</h1>
                    <div className="flex flex-col w-full">
                        {
                            deffered?.length > 0 && deffered?.map(defferTask => <TaskCard currentTask={defferTask} key={defferTask._id} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;