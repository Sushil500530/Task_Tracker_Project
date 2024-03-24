/* eslint-disable react/prop-types */

const EditTask = ({ editTask }) => {
    return (
        <div>
            <h1 className="text-xl font-bold uppercase mb-8">Edit Task</h1>
            <div className="space-y-5">
                <div className="flex items-center justify-start flex-col">
                    <label className="w-full text-base font-bold">Title:</label>
                    <input type="text" name="title" defaultValue={editTask?.title} className="border w-full bg-[#c5c0c0] cursor-not-allowed" />
                </div>
                <div className="flex items-center justify-start flex-col">
                    <label className="w-full text-base font-bold">Description:</label>
                    <textarea name="description" id="" defaultValue={editTask?.description} className="border w-full bg-[#c5c0c0] cursor-not-allowed" cols="10" rows="3"></textarea>
                </div>
                <div className="flex items-center justify-start flex-col">
                    <label className="w-full text-base font-bold">Team:</label>
                    <input type="text" name="team" defaultValue={editTask?.team} className="border w-full bg-[#c5c0c0] cursor-not-allowed" />
                </div>
                <div className="flex items-center justify-start flex-col">
                    <label className="w-full text-base font-bold">Assignees:</label>
                    <input type="text" name="assignees" defaultValue={editTask?.assignees} className="border w-full bg-[#c5c0c0] cursor-not-allowed" />
                </div>
                <div className="flex items-center justify-between flex-col md:flex-row lg:flex-auto gap-5 ">
                    <div className="flex items-center justify-center md:justify-start lg:justify-start gap-5">
                        <h1 className="text-base font-bold ">Sort By:  </h1>
                        <select name="priority" id="priority" className="px-2 py-1 rounded bg-[#c5c0c0]" >
                            <option className="divide-y" defaultValue={editTask?.priority} disabled value="p1">{editTask?.priority}</option>
                            <option value="p0">P0</option>
                            <option value="p1">P1</option>
                            <option value="p2">P2</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-center md:justify-start lg:justify-start gap-5">
                        <h1 className="text-base font-bold ">Status:  </h1>
                        <select name="status" id="status" className="px-2 py-1 rounded bg-[#c5c0c0]" >
                            <option value="pending" defaultValue={editTask?.status} disabled selected>{editTask?.status}</option>
                            <option value="pending">Pending</option>
                            <option value="inProgress">in Progress</option>
                            <option value="completed">Completed</option>
                            <option value="deployed">Deployed</option>
                            <option value="deffered">Deffered</option>
                        </select>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-5 mt-5">
                    <button className="bg-[#26689a] text-white px-5 py-1 rounded">Reset</button>
                    <button className="bg-[#26689a] text-white px-5 py-1 rounded">Update</button>
                </div>
            </div>
        </div>
    );
};

export default EditTask;