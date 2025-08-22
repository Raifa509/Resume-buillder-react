import axios from "axios"

const commonAPI= async (httpMethod,url,reqBody)=>{
    const reqConfig={
        method:httpMethod,
        url, //key and value variable is same,so one retain
        data:reqBody
    }
   
    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}

export default commonAPI

