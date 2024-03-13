import UserItem from "./components/UserItem";
import { users } from "../../store/users";
import './styles/Users.css';

const Users = () => {

    console.log("user", users)

    const UsersList = users.map((item, index) => {

        return <UserItem
            key={item.title + index}
            title={item.title}
            age={item.age}
            id={item.id}
        />

    })

    console.log("userslist", UsersList)
    return (
        <>
            <div className="usersWrapper">

                <h2>Users</h2>
                {UsersList}
            </div>
        </>
    )
}
export default Users