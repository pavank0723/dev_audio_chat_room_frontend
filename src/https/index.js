import axios from 'axios'
// const url = process.env.REACT_APP_BASE_URL
const api = axios.create({
    baseURL: 'http://localhost:6000',
    withCredentials: true,
    headers: {
        //'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        Accept: 'application/json'
    },
})

export const sendOtp = (data) => api.post('/api/auth/send-otp', data)
export const verifyOtp = (data) => api.post('/api/auth/verify-otp', data)
export const activateUser = (data) => api.post('/api/auth/activate', data)
export const logout = () => api.post('/api/auth/logout')
export const createRoom = (data) => api.post('/api/room/createRoom',data)
export const getAllRooms = () => api.get('/api/room/getRooms')


//Interceptors
api.interceptors.response.use((config) => {
    return config
},
    async (error) => {
        const originalReq = error.config
        if (
            error.response.status === 401 &&
            originalReq &&
            !originalReq._isRetry) 
            {
                originalReq.isRetry = true
                try {
                    await axios.get(`${process.env.REACT_APP_BASE_URL}/api/auth/refresh`,
                        {
                            withCredentials: true
                        })
                    return api.request(originalReq)
                } catch (error) {
                    console.log(error.message)
                }
            }
        throw error
    }
)

// export const sendOtp = async (data) => {
//     try{
//       const response = await api.post('/api/auth/send-otp',data)
//     }
//     catch(err) {
//       console.error(err);
//     }
//   };

// export const sendOTP = (data) => {
//     api.post('/api/auth/send-otp',data).then((res)=>{
//         console.log(res)
//     }).catch((res)=>{
//         console.log(res)
//     })
// }
export default api