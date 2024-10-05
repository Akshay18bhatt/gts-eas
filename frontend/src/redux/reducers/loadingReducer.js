import { actionTypes } from "../actions/actionTypes";


/* Reducer for handling when api is being fetching... to show loading indicator */
const loadingReducer = (state={isLoading:false}, action)=>{

    switch(action.type){

        case actionTypes.LOADING:{
            state ={...state,isLoading:true};
            return state;
        }

        case actionTypes.LOADING_SUCCESS:{
            state = {...state,isLoading:false};
            return state;
        }
        default:{
            return state;
        }
    }
}

export default loadingReducer