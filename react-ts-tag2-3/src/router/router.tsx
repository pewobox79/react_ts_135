import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Blog from "../pages/Blog";
import BlogArticleDetail from "../components/BlogOverview/components/BlogArticleDetail";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Homepage/>}/>
            <Route path="login" element={<Login/>}/>

            <Route path="blog">
                <Route index element={<Blog/>}/>
                <Route path=":id" element={<BlogArticleDetail/>}/>
            </Route>

        </Route>
    )
)