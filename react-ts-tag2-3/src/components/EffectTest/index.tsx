import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
const EffectTest = () => {

    const id = useLocation().pathname.split("/")[2]
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id])
    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>

            <Link to="/use/1">Fetch User 1</Link>
            <Link to="/use/2">Fetch User 2</Link>
            <Link to="/use/3">Fetch User 3</Link>
        </div>
    )
}

export default EffectTest
