import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER, CLEAR_STATE } from "./actionConstants";



export const valiadateToken=()=>async(dispatch)=>{
    let decode;
    var token=localStorage.getItem("token");
    console.log("token",token);
    if(token){
        decode=jwt_decode(token);
        let currentDate=new Date().getTime();
        let expiry=decode.exp*1000;
        var hours=(expiry-currentDate)/36e5;
        if(hours>0){
            dispatch(
                setCurrentUser({
                    username:decode.username,
                   
                })
            );
        }else{
            // window.location="/signin"
        }

    }
};

export const clearState=()=>({
    type:CLEAR_STATE
});
export const setAccessToken=(token)=>{
     return(dispatch,getstate)=>{
         dispatch({type:"SET_ACCESS_TOKEN",token})
     };
};
export const setCurrentUser = (current_user) => ({
    type: SET_CURRENT_USER,
    current_user,
  });