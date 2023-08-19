import axios from "axios"

const url = "http://localhost:5656/api"

export const RegisterFamily = async(data:any)=>{
 try {

    const config:any = {
        "content-type":"multipart/formdata"
    }

    return await axios.post(`${url}/register`,data,config).then((res:any)=>{
        console.log("res",res)
        return res.data.data
     })  
 } catch (error:any) {
    console.log(error.message)
 } 
}

export const SignInFamily = async(data:any)=>{
    try {
        return await axios.post(`${url}/signin`,data).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
     console.log(error)   
    }
}