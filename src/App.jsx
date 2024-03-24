import Header from "./pages/Header"
import { FaUser } from "react-icons/fa";
function App() {

  return (
    <div className="container mx-auto space-y-8 pb-10">
      {/* navbar section or header layout */}
      <div className="flex items-center justify-between p-5">
        <div>
          <h1 className="text-2xl font-bold">Task Board</h1>
        </div>
        <div>
           <FaUser  className="w-16 h-16 rounded-full border bg-white p-3 cursor-pointer" />
        </div>
      </div>
      <div className="w-full h-full p-5 border border-white rounded-lg">
      <Header />
      </div>
    </div>
  )
}

export default App
