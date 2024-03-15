import { useContext } from "react"
import { UserContext } from "@/store/contextStores"

const ContextComponent2 = () => {

    const user:{user: {user: boolean, setUser: ()=>{}}} = useContext(UserContext)

    console.log("user", user)

    function handleSwitch(){
        user.setUser(!user.user)
    }
    return (
        <div>
            <h3 style={{ color: user ? "red" : "aqua" }}>context 2</h3>
            <button onClick={handleSwitch}>toggle</button>
        </div>
    )
}

export default ContextComponent2
