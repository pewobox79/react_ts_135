import { useState } from "react";
import ContextComponents from "@/components/ContextComponents"
import { UserContext } from "@/store/contextStores";

const ContextPage = () => {

    const [user, setUser] = useState<boolean | null>(null);

    return (
        <div>
            <h1>contextpage</h1>
            <UserContext.Provider value={{user, setUser}}>
                <ContextComponents/>
            </UserContext.Provider>
        </div>
    )
}

export default ContextPage
