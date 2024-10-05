import { useSelector } from "react-redux"
import AgreementCard from "./AgreementCard"



const AllAgreements = ()=>{

    /*
        state = state refers to redux combine reducers state 
        = {
            loading : {isLoading: true/false},
            updating : {isUpdating: true/false},
            all_Agreements : {all_agreements:[]}
        }
    */
    // calling useSelector to get state from the redux
    const all_agreements = useSelector(state=>state.all_Agreements.all_agreements);
    
    

    return(
        <div className=" flex flex-col mt-5 pb-20  lg:grid lg:grid-cols-4 gap-5 lg:mt-10 lg:pb-40" >
            {
                all_agreements.length>0  ?
                all_agreements.map(agreement=>{
                    return(
                        // This compnent returns a card for each agreement based on information passed
                        <AgreementCard agreement={agreement} key={agreement._id} />
                    )
                })
                :
                <div className="flex lg:col-span-12 justify-center items-center w-full">
                    <h1 className="text-lg font-bold " >No Agreements to display</h1>
                </div>
            }
        </div>
    )
}

export default AllAgreements