import Header from "./pages/Header"
import { FaUser } from "react-icons/fa";
import useAuth from "./components/hooks/useAuth";
import toast from "react-hot-toast";
function App() {
  const { user, logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser()
      .then(() => toast.success('logout successfully'))
  }
  return (
    <div className="container mx-auto space-y-8 pb-10">
      {/* navbar section or header layout */}
      <div className="flex items-center justify-between p-5">
        <div>
          <h1 className="text-2xl font-bold">Task Board</h1>
        </div>
        <div>
          {
            user?.email ? <><div className="w-16 h-16 group relative" > <img src={user?.photoURL} alt="profile-photo" className="w-16 h-16 rounded-full border cursor-pointer" />
              <div className=" hidden group-hover:block  bg-white absolute top-14 -right-2 rounded w-44 ">
                <div className="flex flex-col items-center justify-center gap-1">
                  <button onClick={handleLogout} className=" p-1 rounded cursor-pointer bg-[#26689a] text-white w-full">Logout</button>
                </div>
              </div>
            </div>

            </> : <FaUser className="w-16 h-16 rounded-full border bg-white p-3 cursor-pointer" />
          }
        </div>
      </div>
      <div className="w-full h-full p-5 border border-white rounded-lg">
        <Header />
      </div>
    </div>
  )
}

export default App
