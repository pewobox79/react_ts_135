import { useState } from 'react'
import styles from '../../../styles/Blog.module.css'
import { BlogFormType } from '../../../types/blogTypes'

const BlogForm = ({ action }: BlogFormType) => {

    const [newPost, setNewPost] = useState<{ title: string, body: string }>({ title: "", body: "" });
    const [success, setSuccess] = useState(false)
    
    function handleSubmit(e: any) {
        e.preventDefault();

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({ ...newPost, userId: 1 })
        }

        fetch("https://jsonplaceholder.typicode.com/posts/", config)
            .then(res => res.json())
            .then(data => {
                console.log("success", data)
                setSuccess(true)
            })

    }

    function handleChange(e: any) {
        setNewPost({ ...newPost, [e.target.name]: e.target.value })
    }

    return (
        <div className={styles.formWrapper} >
            <button onClick={action} style={{ position: "absolute", top: "5px", left: "5px" }}>X</button>
            <form className={styles.form}>
                <label htmlFor='title'>Title</label>
                <input id="title" type="text" name="title" onChange={handleChange} />
                <label htmlFor='body'>Body</label>
                <textarea name="body" id="body" rows={7} onChange={handleChange} />
                <button onClick={handleSubmit} type="submit">Add new Article</button>
            </form>
            {success && <div style={{ width: "100%", display: 'flex', justifyContent: 'center', position: 'absolute' }}>
                <p>Post successful delivered</p>
            </div>}
        </div>
    )
}

export default BlogForm
