import { actionTypes } from "../actions/actionTypes";



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