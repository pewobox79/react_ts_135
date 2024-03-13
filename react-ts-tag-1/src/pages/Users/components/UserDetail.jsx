import { useParams, useSearchParams } from "react-router-dom";
import { users } from "../../../store/users";

const UserDetail = () => {

    const params = useParams();

    let [searchParams, setSearchParams] = useSearchParams();
    console.log("search", searchParams.get("name"))

    const selectedUser = users.find(user => user.id == params.id)

    return (
        <div>
            <h1>Single User {selectedUser.id}</h1>
            <p>name: {selectedUser?.title}</p>
            <p>age: {selectedUser.age}</p>
        </div>
    )
}

export default UserDetail
