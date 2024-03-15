import { useState, useEffect } from 'react'

const Effect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log("start effect");
        const interval = setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000)

        return () => clearInterval(interval)

    }, [])

    return (
        <div>
            <h1>Count {count}</h1>
        </div>
    )
}

export default Effect
