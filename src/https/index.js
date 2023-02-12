import axios from 'axios'
// const url = process.env.REACT_APP_BASE_URL
const api = axios.create({
    baseURL:'http://localhost:6000',
    headers: {
        //'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        Accept: 'application/json'
        
    },
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

export const sendOTP = (data) => {
    api.post('/api/auth/send-otp',data).then((res)=>{
        console.log(res)
    }).catch((res)=>{
        console.log(res)
    })
}
export default api