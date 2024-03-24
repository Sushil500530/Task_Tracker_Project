/* eslint-disable react/prop-types */
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const EditTask = ({ editTask, setIsOpen }) => {
    const { register, handleSubmit, reset } = useForm();
    const handleCreateTask = async (data) => {
        const taskData = {
            assignees: data.assignees,
            description: data.description,
            priority: data.priority,
            status: data.status,
            team: data.team,
            title: data.title,
            user: 'sushil',
            email: 'sushil@gmail.com',
        }
        console.log(taskData);
        try {
            await axios.patch('http://localhost:5000/task', taskData)
                .then(res => {
                    if (res.data?.insertedId) {
                        setIsOpen(false)
                        toast.success('updated successfully!')
                    }
                })

        }
        catch (error) {
            toast.error(error.message);
        }
    }
    return (
        <div>
            <h1 className="text-xl font-bold uppercase mb-8">Edit Task</h1>
            <form onSubmit={handleSubmit(handleCreateTask)} className="space-y-5">
                <div className="flex items-center justify-between">
                    <label className="w-1/3 text-base font-bold">Title:</label>
                    <input type="text" name="title" defaultValue={editTask?.title} className="border w-full bg-[#c5c0c0] p-2" {...register("title", { required: true })} required />
                </div>
                <div className="flex items-center justify-between">
                    <label className="w-1/3 text-base font-bold">Description:</label>
                    <textarea name="description" id="" defaultValue={editTask?.description} className="border w-full bg-[#c5c0c0]" cols="10" rows="3"  {...register("description", { required: true })} required></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <label className="w-1/3 text-base font-bold">Team:</label>
                    <input type="text" name="team" defaultValue={editTask?.team} className="border w-full bg-[#c5c0c0] p-2"  {...register("team", { required: true })} required />
                </div>
                <div className="flex items-center justify-between">
                    <label className="w-1/3 text-base font-bold">Assignees:</label>
                    <input type="text" name="assignees" defaultValue={editTask?.assignees} className="border w-full bg-[#c5c0c0] p-2"  {...register("assignees", { required: true })} required />
                </div>
                <div className="flex items-center justify-between flex-col md:flex-row lg:flex-row gap-3">
                    <div className="flex items-center justify-start gap-5">
                        <h1 className="text-base font-bold ">Sort By:  </h1>
                        <select name="priority" id="sortBy" className="p-2 py-1 rounded bg-[#c5c0c0]" {...register("priority", { required: true })} required>
                            <option className="divide-y" disabled defaultValue={editTask?.priority} value="p1">{editTask?.priority}</option>
                            <option value="p0">P0</option>
                            <option value="p1">P1</option>
                            <option value="p2">P2</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-start gap-5">
                        <h1 className="text-base font-bold ">Status:  </h1>
                        <select name="status" className="px-2 py-1 rounded bg-[#c5c0c0] text-black p-2" {...register("status", { required: true })} required>
                            <option value="pending" disabled selected defaultValue={editTask?.status}>{editTask?.status}</option>
                            <option value="inProgress">in Progress</option>
                            <option value="completed">Completed</option>
                            <option value="deployed">Deployed</option>
                            <option value="deffered">Deffered</option>
                        </select>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-5 mt-5">
                    <button type="reset" onClick={()=>reset()} className="bg-[#26689a] text-white px-5 py-1 rounded absolute right-[7.75rem] bottm-0">Reset</button>
                    <button type="submit" className="bg-[#26689a] text-white px-5 py-1 rounded">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default EditTask;