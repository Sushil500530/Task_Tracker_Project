/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";
import useAxios from "../components/hooks/useAxios";
import useAuth from "../components/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const CreateTask = ({ setIsOpen }) => {
    const getLink = useAxios();
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const navigate = useNavigate();


    const handleCreateTask = async (data) => {
        if (!user) {
            setIsOpen(false)
            return Swal.fire({
                title: "Not Find Your Account?",
                text: "Please Login First,Then Create Your Task!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    return navigate('/login')
                }
            });
        }
        const taskData = {
            assignees: data.assignees,
            description: data.description,
            priority: data.priority,
            status: data.status,
            team: data.team,
            title: data.title,
            user: 'sushil',
            email: 'sushil@gmail.com',
            startDate: new Date(),
            endDate: new Date(),
        }
        try {
            await getLink.post('http://localhost:5000/task', taskData)
                .then(res => {
                    if (res.data?.insertedId) {
                        setIsOpen(false)
                        toast.success('create successfully!')
                    }
                })

        }
        catch (error) {
            console.log(error);
        }
    }
    const handleReset = () => {
        return reset();
    }
    return (
        <div>
            <h1 className="text-xl font-bold uppercase mb-8">Create New Task</h1>
            <form onSubmit={handleSubmit(handleCreateTask)} className="space-y-5">
                <div className="flex items-center justify-between">
                    <label className="w-1/3 text-base font-bold">Title:</label>
                    <input type="text" name="title" className="border w-full bg-[#c5c0c0] p-2" {...register("title", { required: true })} required />
                </div>
                <div className="flex items-center justify-between">
                    <label className="w-1/3 text-base font-bold">Description:</label>
                    <textarea name="description" id="" className="border w-full bg-[#c5c0c0] p-2" cols="10" rows="3"  {...register("description", { required: true })} required></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <label className="w-1/3 text-base font-bold">Team:</label>
                    <input type="text" name="team" className="border w-full bg-[#c5c0c0] p-2"  {...register("team", { required: true })} required />
                </div>
                <div className="flex items-center justify-between">
                    <label className="w-1/3 text-base font-bold">Assignees:</label>
                    <input type="text" name="assignees" className="border w-full bg-[#c5c0c0] p-2"  {...register("assignees", { required: true })} required />
                </div>
                <div className="flex items-center justify-between flex-col md:flex-row lg:flex-row gap-3">
                    <div className="flex items-center justify-start gap-5">
                        <h1 className="text-base font-bold ">Sort By:  </h1>
                        <select name="priority" id="sortBy" className="p-2 py-1 rounded bg-[#c5c0c0]" {...register("priority", { required: true })} required>
                            <option className="divide-y" value="p1">P1</option>
                            <option value="p0">P0</option>
                            <option value="p1">P1</option>
                            <option value="p2">P2</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-start gap-5">
                        <h1 className="text-base font-bold ">Status:  </h1>
                        <select name="status" className="px-2 py-1 rounded bg-[#c5c0c0] text-black p-2" {...register("status", { required: true })} required>
                            <option value="pending" selected>Pending</option>
                            <option value="inProgress">in Progress</option>
                            <option value="completed">Completed</option>
                            <option value="deployed">Deployed</option>
                            <option value="deffered">Deffered</option>
                        </select>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-5 mt-5">
                    <button type="reset" onClick={handleReset} className="bg-[#26689a] text-white px-5 py-1 rounded absolute right-[7.75rem] bottm-0">Reset</button>
                    <button type="submit" className="bg-[#26689a] text-white px-5 py-1 rounded">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;