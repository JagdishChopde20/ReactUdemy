import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import Courses from './pages/courses/Courses';
import AddCourse from './pages/AddCourse/AddCourse';
import CourseDetails from './pages/course-details/CourseDetails';
import Error from './pages/Error';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Courses /> },
            { path: 'add-course', element: <AddCourse /> },
            { path: 'course-details/:courseId', element: <CourseDetails /> }
        ]
    }
]);

export default function Routing() {
    return(
        <RouterProvider router={router} />
    );
}