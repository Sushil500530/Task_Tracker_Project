import Header from "./pages/Header"
import { FaUser } from "react-icons/fa";
function App() {

  return (
    <div className="container mx-auto">
      {/* navbar section or header layout */}
      <div className="flex items-center justify-between py-3">
        <div>
          <h1 className="text-2xl font-bold">Task Board</h1>
        </div>
        <div>
           <FaUser  className="w-16 h-16 rounded-full border bg-white p-3 cursor-pointer" />
        </div>
      </div>
        <Header />
    </div>
  )
}

export default App
