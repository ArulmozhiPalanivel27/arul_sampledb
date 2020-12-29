import { toast } from 'react-toastify';
import { ACTION_TYPES } from './action';

const initialState = {
    database: null,
    database: []
    
}

export default function sampleDataReducer(state = initialState, action) {
    var newState = Object.assign({}, state);
    switch (action.type) {
        case ACTION_TYPES.GET_EMAIL_LOG_SUCCESS:
            newState.emailLog =  action.payload.data;      
            toast.success("Emaillog show successfully")
            return newState;

        case ACTION_TYPES.GET_EMAIL_LOG_FAILED:
            newState.emailLog = null;
            return newState;


            

        default:
            return newState;
    }
}

