import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAvatar } from '../store/activateSlice';

export function useLoadingWithRefresh(){
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(() =>{
        (async () => {
            try {
                const {data}  = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/auth/refresh`,{
                    withCredentials: true
                })
                dispatch(setAvatar(data))
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        })()
    },[])

    return {loading}
}