import {INCREMENT } from "../action_type";
let initState = 0;
export default (prevState = initState,action)=>{
 switch (action.type) {
     case INCREMENT:
         
         return prevState + action.data;
 
     default:
        return prevState
 }
}