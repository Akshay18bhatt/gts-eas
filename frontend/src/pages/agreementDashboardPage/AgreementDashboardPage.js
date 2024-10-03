import { useEffect } from "react"
import {useDispatch} from "react-redux"
import SearchandCreate from "../../Components/Dashboard/Search/SearchandCreate"
import Navbar from "../../Components/Common/Navbar/Navbar"
import { get_all_agreements } from "../../redux/actions/actionCreators"
import AllAgreements from "../../Components/Dashboard/allAgreements/AllAgreements"
import { actionTypes } from "../../redux/actions/actionTypes"
import Loader from "../../Components/Common/Loader/Loader"


const AgreementDashboardPage = () => {

    const dispatch = useDispatch();
    useEffect(()=>{

        dispatch({type:actionTypes.LOADING})
        dispatch(get_all_agreements());
        

    },[dispatch])

    return (
        <div className="min-h-screen max-w-screen relative" >

            <header className="sticky top-0 left-0 right-0 " >
                <Navbar />
            </header>

            <main className="w-11/12 mx-auto " >
                <SearchandCreate />
                <AllAgreements />
                <Loader />
            </main>
        </div>
    )
}

export default AgreementDashboardPage