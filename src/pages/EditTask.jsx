
const EditTask = () => {
    return (
        <div>
            <h1 className="text-xl font-bold uppercase mb-8">Edit Task</h1>
            <div className="space-y-5">
                <div className="flex items-center justify-start flex-col">
                    <label className="w-full text-base font-bold">Title:</label>
                    <input type="text" name="title" className="border w-full bg-[#c5c0c0]" />
                </div>
                <div className="flex items-center justify-start flex-col">
                    <label className="w-full text-base font-bold">Description:</label>
                    <textarea name="description" id="" className="border w-full bg-[#c5c0c0]" cols="10" rows="3"></textarea>
                </div>
                <div className="flex items-center justify-start flex-col">
                    <label className="w-full text-base font-bold">Team:</label>
                    <input type="text" name="team" className="border w-full bg-[#c5c0c0]" />
                </div>
                <div className="flex items-center justify-start flex-col">
                    <label className="w-full text-base font-bold">Assignees:</label>
                    <input type="text" name="title" className="border w-full bg-[#c5c0c0]" />
                </div>
                <div className="flex items-center justify-between flex-col md:flex-row lg:flex-auto gap-5 ">
                    <div className="flex items-center justify-center md:justify-start lg:justify-start gap-5">
                        <h1 className="text-base font-bold ">Sort By:  </h1>
                        <select name="sortBy" id="sortBy" className="px-2 py-1 rounded bg-[#c5c0c0]" >
                            <option className="divide-y" value="p1">P1</option>
                            <option value="p0">P0</option>
                            <option value="p1">P1</option>
                            <option value="p2">P2</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-center md:justify-start lg:justify-start gap-5">
                        <h1 className="text-base font-bold ">Status:  </h1>
                        <select name="sortBy" id="sortBy" className="px-2 py-1 rounded bg-[#c5c0c0]" >
                            <option className="divide-y" value="p1">Completed</option>
                            <option value="p1">Pending</option>
                            <option value="p0">in Progress</option>
                            <option value="p2">Deployed</option>
                            <option value="p2">Deffered</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTask;