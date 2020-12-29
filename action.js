
export const ACTION_TYPES = {
     EMPLOYEE_PROFILE: "EMPLOYEE_PROFILE",
     GET_EMPLOYEE_PROFILE_SUCCESS:"GET_EMPLOYEE_PROFILE_SUCCESS",
     GET_EMPLOYEE_PROFILE_FAILURE:"GET_EMPLOYEE_PROFILE_FAILURE",

 /*    GET_EMAIL_LOG_SUCCESS: "GET_EMAIL_LOG_SUCCESS",

    GET_EMAIL_LOG_FAILED: "GET_EMAIL_LOG_FAILED",
    SEARCH_EMAIL_LOG_SUCCESS: "SEARCH_EMAIL_LOG_SUCCESS",
    SEARCH_EMAIL_LOG_FAILED: "SEARCH_EMAIL_LOG_FAILED", */
}
 
export function searchEmailLog() {
    return {
        types: [ACTION_TYPES. EMPLOYEE_PROFILE, ACTION_TYPES. EMPLOYEE_PROFILE_SUCCESS, ACTION_TYPES.    EMPLOYEE_PROFILE_FAILED],
        payload: {
            request: {
                method: 'GET',
                url: EMAIL_LOG_URL.SEARCH
               
            }
        }
    }
}

export function getEmailLog(id) {
    return {
        types: [ACTION_TYPES. EMAIL_LOG, ACTION_TYPES. GET_EMAIL_LOG_SUCCESS, ACTION_TYPES. GET_EMAIL_LOG_FAILED],
        payload: {
            request: {
                method: 'GET',
                url: EMAIL_LOG_URL.GET
              
            }
        }
    }
}
/* 

export const fetchAllEmaillog = () => ({
    types: [ACTION_TYPES.FETCH_ALL_EMAILLOG, ACTION_TYPES.FETCH_ALL_EMAILLOG_SUCCESS, ACTION_TYPES.FETCH_ALL_EMAILLOG_FAILED],
    payload: {
        request: {
            method: 'POST',
            url: FETCH_ALL_EMAILLOG_URL,
            
        }
    }
})  */