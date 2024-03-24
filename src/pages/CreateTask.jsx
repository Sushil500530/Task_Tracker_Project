import { useForm } from "react-hook-form"
const CreateTask = () => {
    const { register, handleSubmit, reset} = useForm();

    const handleCreateTask = (data) =>{
        console.log(data);
    }
    const handleReset = ()=>{
        return reset();
    }
    return (
        <div>
            <h1 className="text-xl font-bold uppercase mb-8">Create New Task</h1>
            <form onSubmit={handleSubmit(handleCreateTask)} className="space-y-5">
                <div className="flex items-center justify-between">
                    <label className="w-1/3 text-base font-bold">Title:</label>
                    <input type="text" name="title" className="border w-full bg-[#c5c0c0]" {...register("title", { required: true })} required />
                </div>
                <div className="flex items-center justify-between">
                    <label className="w-1/3 text-base font-bold">Description:</label>
                    <textarea name="description" id="" className="border w-full bg-[#c5c0c0]" cols="10" rows="3"  {...register("description", { required: true })} required></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <label className="w-1/3 text-base font-bold">Team:</label>
                    <input type="text" name="team" className="border w-full bg-[#c5c0c0]"  {...register("team", { required: true })} required />
                </div>
                <div className="flex items-center justify-between">
                    <label className="w-1/3 text-base font-bold">Assignees:</label>
                    <input type="text" name="assignees" className="border w-full bg-[#c5c0c0]"  {...register("assignees", { required: true })} required />
                </div>
                <div className="flex items-center justify-between flex-col md:flex-row lg:flex-row gap-3">
                    <div className="flex items-center justify-start gap-5">
                        <h1 className="text-base font-bold ">Sort By:  </h1>
                        <select name="priority" id="sortBy" className="px-2 py-1 rounded bg-[#c5c0c0]" {...register("priority", { required: true })} required>
                            <option className="divide-y" value="p1">P1</option>
                            <option value="p0">P0</option>
                            <option value="p1">P1</option>
                            <option value="p2">P2</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-start gap-5">
                        <h1 className="text-base font-bold ">Status:  </h1>
                        <select name="status"  className="px-2 py-1 rounded bg-[#c5c0c0] text-black" {...register("status", { required: true })} required>
                            <option value="p1" selected>Pending</option>
                            <option value="p0">in Progress</option>
                            <option value="p1">Completed</option>
                            <option value="p2">Deployed</option>
                            <option value="p2">Deffered</option>
                        </select>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-5 mt-5">
                    <button onClick={handleReset} className="bg-[#26689a] text-white px-5 py-1 rounded">Reset</button>
                    <button type="submit" className="bg-[#26689a] text-white px-5 py-1 rounded">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;