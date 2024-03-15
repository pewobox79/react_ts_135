import { useEffect, useState } from "react";
import BlogItem from "./components/BlogItem";
const BlogOverview = () => {

    const URL = "https://jsonplaceholder.typicode.com/posts";

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        const controller = new AbortController();
        const signal = controller.signal
        setTimeout(() => {
            fetch(URL, { signal: signal })
                .then(res => res.json())
                .then(data => {
                    setPosts(data)
                    setIsLoading(false)
                });

        }, 3000)

        //cleanup function um den useEffect (fetch) zu beenden um dann neu zu starten
        return () => controller.abort()
    }, [])

    console.log("posts", posts)
    const PostList = posts?.map((item: { title: string, id: number }) => {
        return <BlogItem key={item.title + item.id} title={item.title} />
    })


    return (
        <div>
            <h3>Overview der blogs</h3>
            {/**post list hier */}
            {isLoading ? <h2>isLoading...</h2> : PostList}
            {/* <Effect/> */}
        </div>
    )
}

export default BlogOverview
