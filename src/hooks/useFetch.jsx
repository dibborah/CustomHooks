import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending , setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsPending(true);
        const controller = new AbortController();
        const fetchData = async () => {
            try{
                const res = await fetch(url,{signal:controller.signal});
                if(!(res.ok)){
                    throw Error("Something went Wrong")
                }
                const resData = await res.json();
                console.log(resData);
                setData(resData);
                setError(null);
            }catch(error){
                if(error.name !== "AbortError"){
                    console.dir(error);
                    setError(error.message);
                }
            }
            finally{
                setIsPending(false);
            }
        }
        fetchData();
        return ()=>{
            controller.abort(); // Jab request abort hogi to error ayega
        }
    }, []);
    // The key and value is same which is data {data:data}//same so can also be written once
    // return { data: data }// jab key value pair same hote hain tab hum 
    return { data, isPending, error}// Aisa v kar skte hain
}

export default useFetch;