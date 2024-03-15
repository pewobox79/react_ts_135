import LoginForm from "@/components/LoginForm";
import { useState } from "react"

const Login = () => {

    const INITVALUES = { username: "", email: "" };
    const [user, setUser] = useState(INITVALUES);

    function handleChange(e: { target: { value: string, name: string } }) {

        setUser({ ...user, [e.target.name]: e.target.value })

    };

    console.log("updated User", user)

    function handleSubmit(e: any) {
        e.preventDefault();
        console.log("submitted Data", user)
        setUser(INITVALUES)
    }

    return (
        <div>
            <h3>Login</h3>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label><br />
                <input
                    id="username"
                    type="username"
                    name="username"
                    onChange={handleChange}
                    value={user.username}
                /><br />
                <label htmlFor="email">Email</label><br />
                <input id="email" type="email" name="email" value={user.email} onChange={handleChange} /><br />
                <button type="submit">Login</button>
            </form>

            {/* alternatives State management forms*/}
            <LoginForm/>
        </div>
    )
}

export default Login
