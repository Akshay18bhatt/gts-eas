import { actionTypes } from "../actions/actionTypes";



const fetch_allAgreements_reducer = (state={all_agreements:[]},action)=>{

    switch(action.type){

        case actionTypes.SAVE_ALL_AGREEMENTS:{
            state = {...state, all_agreements:[...action.payload]}
            return state;
        }
        default:{
            return state;
        }
    }
}

export default fetch_allAgreements_reducer