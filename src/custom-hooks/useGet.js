import { useEffect, useState, useCallback } from "react";
import axios from 'axios';
import { useGlobalContext } from "../context";

const useGet = (query) => {
    
    const URL =''
    const [getData, setGetData] = useState([]);
    const { setIsLoading} = useGlobalContextlContext();

    const fetchGetData = useCallback(async () => {
        try{
            setIsLoading(true);
            const res = await axios.get(`${URL}${query}`);
            setGetData(res.data);
            setIsLoading(false);
        }catch(err){
            console.log(err)
            setIsLoading(false);
        }
    }, [query, setIsLoading])
    
    useEffect(() => {
        fetchGetData();
    },[fetchGetData]);

    
    return {getData, setGetData, fetchGetData};
}

export default useGet;