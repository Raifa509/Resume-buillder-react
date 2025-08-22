//all api s used in this project

import { BASEURL } from "./baseUrl"
import commonAPI from "./commonAPI"

//addResumeAPI-store -POST - called by steps component
export const addResumeAPI=(resume)=>{
    return commonAPI('POST',`${BASEURL}/all-resume`,resume)
}





//editResumeAPI -PUT







//addHistory API -POST





//getHistoryAPI -GET






//deleteHistoryAPI -DELETE
