import {legacy_createStore as createStore, applyMiddleware,combineReducers} from "redux"
import {thunk} from "redux-thunk"
import loadingReducer from "./reducers/loadingReducer"
import updatingReducer from "./reducers/updatingReducer"
import fetch_allAgreements_reducer from "./reducers/fetchAllagreementsReducer"


/*                      Initial state for my reducer will look like

            const initialState={
                isLoading:false,
                isUpdating:false,
                all_agreements:[]
            }
*/
/*                      Reducer Functions for my store             */

const rootReducer  = combineReducers({
    loading: loadingReducer,
    updating: updatingReducer,
    all_Agreements : fetch_allAgreements_reducer
})

/*                      Initializing Redux store             */
const store  = createStore(rootReducer,applyMiddleware(thunk))

export default store
