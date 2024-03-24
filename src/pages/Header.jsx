// import EditTask from "./EditTask";
import { useState } from "react";
import Modal from "../components/shared/Modal";
import CreateTask from "./CreateTask";
import TaskCard from "../components/shared/TaskCard";

const Header = () => {
    let [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true)
    }
    return (
        <div className="space-y-5">
            {/* filter by name, priority, date  */}
            <div className="flex items-center justify-between flex-col md:flex-row lg:flex-row gap-5">
                <div className="flex items-start justify-start flex-col lg:flex-row gap-2 lg:gap-5">
                    <h1 className="text-xl font-bold text-start">Filter By: </h1>
                    <div className="flex items-start gap-3 justify-start">
                        <input type="text" name="assignmentName" placeholder="Assignment Name" className="px-2 py-1 rounded w-1/3 lg:w-1/3" />
                        <select name="sortBy" id="sortBy" className="px-2 py-1 rounded" >
                            <option disabled selected>Priority</option>
                            <option value="p0">P0</option>
                            <option value="p1">P1</option>
                            <option value="p2">P2</option>
                        </select>
                        <input type="date" name="date" id="" className="px-2 py-1 rounded" />
                    </div>
                </div>
                <button onClick={openModal} className="px-10 py-1 bg-[#26689a] text-white rounded-md">Add New Task</button>
            </div>
            {/* sort by priority  */}
            <div className="flex items-center justify-center md:justify-start lg:justify-start gap-5">
                <h1 className="text-xl font-bold ">Sort By:  </h1>
                <select name="sortBy" id="sortBy" className="px-2 py-1 rounded" >
                    <option disabled selected>Priority</option>
                    <option value="p0">P0</option>
                    <option value="p1">P1</option>
                    <option value="p2">P2</option>
                </select>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
                <CreateTask />
            </Modal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 text-white text-[18px]">
                <div className="bg-white">
                    <h1 className="w-full rounded-t-md py-2 bg-[#8b8c8e] text-center">Pending</h1>
                    <div className="flex flex-col w-full gap-5">
                        <TaskCard />
                    </div>
                </div>
                <div className="bg-white">
                    <h1 className="w-full rounded-t-md py-2 bg-[#e49c1d] text-center">In Progress</h1>
                    <div className="flex flex-col w-full gap-5">
                        <TaskCard />
                    </div>
                </div>
                <div className="bg-white">
                    <h1 className="w-full rounded-t-md py-2 bg-[#45a822] text-center">Completed</h1>
                    <div className="flex flex-col w-full gap-5">
                        <TaskCard />
                    </div>
                </div>
                <div className="bg-white">
                    <h1 className="w-full rounded-t-md py-2 bg-[#353a74] text-center">Completed</h1>
                    <div className="flex flex-col w-full gap-5">
                        <TaskCard />
                    </div>
                </div>
                <div className="bg-white ">
                    <h1 className="w-full rounded-t-md py-2 bg-[#f78772] text-center">Deffered</h1>
                    <div className="flex flex-col w-full gap-5">
                        <TaskCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;