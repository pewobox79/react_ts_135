import { useEffect, useState } from "react";

export function useFetch(url:string){

    const [dataSet, setDataSet] = useState<null | undefined>(null);
    const [error, setError] = useState<any>()

    async function fetchData(){

        try{
            const response = await fetch(url)

            if(!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            setDataSet(data)

        }catch(err){
            setError(err)
        }

    }
    
    useEffect(()=>{

        fetchData()
        
    },[url])
    

    return {dataSet, error}

}