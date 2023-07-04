import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage";
import Cases from "../pages/Cases";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cases',
                element: <Cases />
            },
            {
                path: '/blog',
                element: <Blog />
            }
        ]
    }
]);

export default router;