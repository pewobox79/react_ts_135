import React, {useRef, useState} from 'react'

const LoginForm = () => {

    //declarieren den ort wo die referenz gespeichert werden soll
    const userNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)

    function handleSubmit(e:any){
        e.preventDefault()
        const user ={
            username: userNameRef.current?.value,
            email: emailRef.current?.value,
            isLogged: true
        }

        if(localStorage.getItem("tsUser")){
            localStorage.removeItem("tsUser")
            localStorage.setItem("tsUser", JSON.stringify(user))
        } else{
            localStorage.setItem("tsUser", JSON.stringify(user))
        }
        

        console.log("user", user)
        
    }

    return (
        <div>
            <h3>Login Form Alternatives State Mgmt</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username</label><br/>
                <input id='username' type="text" name="username" ref={userNameRef}/><br/>
                <label htmlFor='email'>Email</label><br/>
                <input id='email' type="email" name='email' ref={emailRef}/><br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm
