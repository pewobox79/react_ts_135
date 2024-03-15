import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Blog from "../pages/Blog";
import BlogArticleDetail from "../components/BlogOverview/components/BlogArticleDetail";
import TSExercise from "@/pages/TSExercise";
import ProtectedRoute from "@/components/ProtectedRoute";
import ContextPage from "@/pages/ContextPage";

const userdata = localStorage.getItem("tsUser")
const formatedUser = JSON.parse(userdata)


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="login" element={<Login />} />

            <Route path="blog">
                <Route index element={
                    <ProtectedRoute user={formatedUser}>
                        <Blog />
                    </ProtectedRoute>} />
                <Route path=":id" element={<BlogArticleDetail />} />
            </Route>
            <Route path="ts" element={<TSExercise />} />
            <Route path="context" element={<ContextPage/>}/>

        </Route>
    )
)