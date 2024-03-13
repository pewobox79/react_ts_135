import styles from '../styles/UserItem.module.css'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const UserItem = ({ title, age, id }) => {

    console.log("styles", styles)

    return <Link to={`/users/${id}?name=${title}`} className={styles.userItem}> <div >
        <h4 style={{ color: "red", fontWeight: 'bold' }}>{title}</h4>
        <p>{age}</p>
    </div>
    </Link>
}

export default UserItem