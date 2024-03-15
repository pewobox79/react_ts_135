import { useState } from "react";


export function useLocalStorage(key: string, initalValues: any) {

    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initalValues
    })

    const setStoredValue = (newValue: any) => {
        setValue(newValue)
        localStorage.setItem(key, JSON.stringify(newValue))
    }

    const removeUser =()=>{
        localStorage.removeItem(key)
        setValue({})
    }

    return { value, setStoredValue, removeUser }
}