import BlogOverview from "../components/BlogOverview"
import BlogForm from "@/components/BlogOverview/components/BlogForm"
import { useState } from "react"

const Blog = () => {

    //data kommt von jsonplaceholder.com
    const [open, setOpen] = useState(false)

    function handleClick(){
        setOpen(!open)
    }

    return (
        <div>
            <h2>My Blog</h2>
            <button onClick={handleClick}>New</button>
            {open && <BlogForm action={handleClick} />}
            <BlogOverview />

        </div>
    )
}

export default Blog
