/* eslint-disable react/prop-types */
import { HiDotsVertical } from "react-icons/hi";
import Modal from "./Modal";
import EditTask from "../../pages/EditTask";
import { useState } from "react";
import useTasks from "../hooks/useTasks";
import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";

const TaskCard = ({ currentTask }) => {
    const getLink = useAxios();
    const [tasks, refetch] = useTasks();
    let [isOpen, setIsOpen] = useState(false);
    const [editTask, setEditTask] = useState([]);
    function openModal() {
        setIsOpen(true)
    }
    const handleEdit = (id) => {
        const currentData = tasks.find(task => task._id === id);
        setEditTask(currentData)
        openModal();
    }

    const handleDelete = (deleteId) => {
        Swal.fire({
            text: "Do You Want to Delete this Task?",
            title:`${deleteId?.title}`,
            showDenyButton: true,
            confirmButtonText: "Yes",
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                  getLink.delete(`/delete-task/${deleteId?.deleteId}`)
                  .then(res =>{
                    refetch();
                    if(res.data?.deletedCount > 0){
                        toast.success('deleted successfully!')
                    }
                  })
            }
        });

    }
    // console.log(currentTask);
    // console.log(editTask);
    return (
        <>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <EditTask editTask={editTask} setIsOpen={setIsOpen} />
            </Modal>
            <div className="text-black bg-gray-200 shadow-md p-2 m-2">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold capitalize">{currentTask?.title}</h1>
                    <h1 className="bg-[#26689a] text-white p-1 rounded">{currentTask?.priority}</h1>
                </div>
                <hr className="text-black bg-gray-400 w-full h-[3px] my-3" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam debitis autem vero quidem in unde. </p>
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold">@Praving</h1>
                    <div className="group relative">
                        <button className="bg-[#26689a] text-white p-1 rounded cursor-pointer"><HiDotsVertical /></button>
                        <div className=" hidden group-hover:block  bg-white absolute top-0 right-5 rounded w-28">
                            <div className="flex flex-col items-center justify-center gap-1">
                                <button onClick={() => handleEdit(currentTask?._id)} className=" p-1 rounded cursor-pointer hover:bg-gray-200 w-full">Edit</button>
                                <button onClick={() => handleDelete({deleteId:currentTask?._id, title:currentTask?.title})} className=" p-1 rounded cursor-pointer hover:bg-gray-200 w-full">Delete</button>
                            </div>
                        </div>
                    </div>
                </div >
                <h1 className="bg-[#26689a] text-white px-5 py-1 w-2/3 my-3 text-center rounded capitalize">{currentTask?.status}</h1>
            </div >
        </>

    );
};

export default TaskCard;