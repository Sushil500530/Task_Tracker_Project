import { HiDotsVertical } from "react-icons/hi";

const TaskCard = () => {
    return (
        <div className="text-black bg-gray-200 shadow-md p-2 m-2">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">Taks1</h1>
                <h1 className="bg-[#26689a] text-white p-1 rounded">P0</h1>
            </div>
            <hr className="text-black bg-gray-400 w-full h-[3px] my-3" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam debitis autem vero quidem in unde. </p>
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">@Praving</h1>
                <h1 className="bg-[#26689a] text-white p-1 rounded cursor-pointer"><HiDotsVertical /></h1>
            </div>
            <h1 className="bg-[#26689a] text-white px-5 py-1 w-2/3 my-3 text-center rounded">Assign</h1>
        </div>
    );
};

export default TaskCard;