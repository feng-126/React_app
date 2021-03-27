import {ADD_PERSON} from "../action_type"

const initState = ["Tom","Jack"];
export default (prevState = initState, action) => {
    switch (action.type) {
        case ADD_PERSON:
            return [...prevState,action.data]
        default:
            return prevState;
    }

}