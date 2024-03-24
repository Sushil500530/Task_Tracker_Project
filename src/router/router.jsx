import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Resister from "../pages/Resister";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [

        ]
    }
    , {
        path: 'register',
        element: <Resister />
    }
])

export default router;