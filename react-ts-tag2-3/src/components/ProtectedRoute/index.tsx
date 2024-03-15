import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, user }: { children: React.ReactElement, user: any }) => {

    console.log("passed user",user)
    const [loggedUser, setLoggedUser] = useState<boolean>(false)
   
    useEffect(() => {
        
        const storedUser: string | null = localStorage.getItem("tsUser")
        console.log(storedUser)

        let formatedUser
        if (storedUser) {
            console.log("set user")
            formatedUser = JSON.parse(storedUser)
            setLoggedUser(formatedUser.isLogged)
            console.log("user state", loggedUser)
        
        } else {
            console.log("unset user")
            setLoggedUser(false)
        

        }


        console.log("user data", formatedUser)


    }, [])

    if (!loggedUser) {
        console.log("redirect")
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute
