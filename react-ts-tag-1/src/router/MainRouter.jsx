import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import AboutUs from '../pages/AboutUs';
import Users from '../pages/Users';
import ErrorPage from '../pages/ErrorPage';
import MainLayout from '../layouts/MainLayout';
import UserDetail from '../pages/Users/components/UserDetail';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="aboutus" element={<AboutUs />} />

            <Route path="users"  >
                <Route index element={<Users />} />
                <Route path=":id">
                    <Route index element={<UserDetail />} />
                    <Route path=":name" element={<UserDetail />} />
                </Route>
            </Route>

            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
)