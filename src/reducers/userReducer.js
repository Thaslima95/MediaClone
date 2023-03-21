import { addFriendUtil, loginUtil, loginWithCookieUtil, logoutUtil, removeFriendUtil } from '../apiUtil';

const initialState = {
    message: "",
    success: false,
   profileCoverImg: "",
    _id: "",
    username: "",
    email: "",
    profilePicture: "",
    followers: [],
    following: [ ],
    city: "",
    desc: "",
    from: "",
    relationship: "",
    loading: false,
   
}

const ACTIONS = {
    LOGIN: "LOGIN",
    ERROR: "ERROR",
    LOGOUT: "LOGOUT",
    LOADING: "LOADING",
    RESET_MSG: "RESET_MSG",
 
};

export const errorActionCreator = payload => ({ type: ACTIONS.ERROR, payload });

export const resetMessageAction = ()=>({type:ACTIONS.RESET_MSG})

const asyncActionCreator = (apiUtil, type, apiPayload) => {
    return async (dispatch) => {
        try {
            dispatch(resetMessageAction());
            dispatch(loadingAction(true));
            const data = (await apiUtil(apiPayload))?.data;
            dispatch({ type, payload: data });
        } catch (error) {
            const payload = error.response.data;
            dispatch(errorActionCreator(payload));
        } finally{
            dispatch(loadingAction(false));
        }
    }
}

export const loginActionCreator = (payload) => {
    return asyncActionCreator(loginUtil, ACTIONS.LOGIN, payload);
};

export const loginWithCookieAction = () => {
    return asyncActionCreator(loginWithCookieUtil, ACTIONS.LOGIN);
};


export const logoutAction = (payload) => {
    return asyncActionCreator(logoutUtil, ACTIONS.LOGOUT)
}

export const loadingAction = payload => {
    return {type:ACTIONS.LOADING, payload};
}






export const userReducer = (state = initialState || JSON.parse(localStorage.getItem("user")), action) => {
    
   const { success, data, message,loading } = action?.payload ||  {};
    switch (action.type) {
        case ACTIONS.LOGIN:
                        const { profileCoverImg ,_id ,username, email ,  profilePicture , followers , following , city , desc , from ,  relationship} = data;
                        localStorage.setItem("user",JSON.stringify(action?.payload || {}))
                        return { ...state, profileCoverImg ,_id ,username, email ,  profilePicture , followers , following , city , desc , from ,  relationship };

         case ACTIONS.LOADING:
            const {payload} = action;
            return {...state,loading:payload}
         case ACTIONS.RESET_MSG:
            
            return {...state,message:""};    
            case ACTIONS.ERROR:
            return { ...state, message, success };
        case ACTIONS.LOGOUT:
            return { ...initialState, message, success };
       
        default:
            return state;
    }
}