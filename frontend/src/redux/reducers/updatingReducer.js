import { actionTypes } from "../actions/actionTypes";




/* Reducer for handling when api is being hit... to show update and then to show indicator */
const updatingReducer = (state={isUpdating:false},action)=>{

    switch(action.type){

        case actionTypes.UPDATING:{
            state = {...state,isUpdating:true}
            return state;
        }
        case actionTypes.UPDATING_SUCCESS:{
            state = {...state,isUpdating:false}
            return state;
        }
        default:{
            return state;
        }
    }
}

export default updatingReducer