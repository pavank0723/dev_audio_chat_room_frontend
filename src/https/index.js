import axios from 'axios'
const url = process.env.REACT_APP_BASE_URL
const api = axios.create({
    baseURL:url,
    headers:{
        'Content-type':'application/json',
        Accept: 'application/json',
    }
})

export const sendOtp = (data) => api.post('/api/auth/send-otp',data)

// export const sendOtp = async (data) => {
//     try{
//       const response = await api.post('/api/auth/send-otp',data)
//     }
//     catch(err) {
//       console.error(err);
//     }
//   };
export default api