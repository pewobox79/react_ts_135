import styles from '../../../styles/Blog.module.css'

type BlogItemType = {
    title: string
}

const BlogItem = ({ title }: BlogItemType) => {


    return (

        <div className={styles.blogItem}>
            {title}
        </div>

    )
}

export default BlogItem
