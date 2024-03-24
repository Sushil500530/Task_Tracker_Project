
const Header = () => {
    return (
        <div className="space-y-5">
            <div className="flex items-center justify-between flex-col md:flex-row lg:flex-row gap-5">
                <div className="flex items-center flex-col md:flex-row lg:flex-row justify-start gap-2 lg:gap-5">
                    <h1 className="text-xl font-bold ">Filter By: </h1>
                    <input type="text" name="assignmentName" placeholder="Assignment Name" className="px-2 py-1 rounded w-full md:w-1/3 lg:w-1/3" />
                    <select name="sortBy" id="sortBy" className="px-2 py-1 rounded" >
                        <option disabled selected>Priority</option>
                        <option value="p0">P0</option>
                        <option value="p1">P1</option>
                        <option value="p2">P2</option>
                    </select>
                    <input type="date" name="date" id="" className="px-2 py-1 rounded"  />
                </div>
                <button className="px-10 py-1 bg-[#26689a] text-white rounded-md">Add New Task</button>
            </div>
            <div className="flex items-center justify-center md:justify-start lg:justify-start gap-5">
                <h1 className="text-xl font-bold ">Sort By:  </h1>
                <select name="sortBy" id="sortBy" className="px-2 py-1 rounded" >
                    <option disabled selected>Priority</option>
                    <option value="p0">P0</option>
                    <option value="p1">P1</option>
                    <option value="p2">P2</option>
                </select>
            </div>
        </div>
    );
};

export default Header;