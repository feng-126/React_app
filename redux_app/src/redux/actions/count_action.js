import {INCREMENT } from "../action_type";
export const add = (data)=>({type:INCREMENT,data})
export const asyncAdd = (data,delay) => (dispatch)=>{
    setTimeout(()=>{
        dispatch(add(data));
    },delay)
}