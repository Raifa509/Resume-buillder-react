//all api s used in this project

import { BASEURL } from "./baseUrl"
import commonAPI from "./commonAPI"

//addResumeAPI-store -POST - called by steps component
export const addResumeAPI=async (resume)=>{
    return await commonAPI('POST',`${BASEURL}/all-resume`,resume)
}





//editResumeAPI -PUT







//addHistory API -POST - called by preview component when finish button clicked

export const addDownloadHistoryAPI=async (resume)=>{
    return await commonAPI('POST',`${BASEURL}/history`,resume)
}



//getHistoryAPI -GET- called by history component when it open in browser,useeffect
 
export const getHistoryAPI=async ()=>{
    return await commonAPI('GET',`${BASEURL}/history`,{})
}


//deleteHistoryAPI -DELETE - called by history when delete button is clicked
export const deleteHistoryAPI=async (id)=>{
    return await commonAPI('DELETE',`${BASEURL}/history/${id}`,{})
}