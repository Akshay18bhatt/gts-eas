import FullFledgedAgreement from "../../Components/View Agreement/FullFledgedAgreement"
import ViewHeader from "../../Components/View Agreement/ViewHeader"


const ViewAgreementPage = ()=>{

    return(
        <div className=" max-w-screen p-2 lg:p-0 lg:w-11/12 lg:mx-auto min-h-screen pb-8 lg:pb-10">
            <header>
                <ViewHeader />
                <FullFledgedAgreement />
            </header>
        </div>
    )
}

export default ViewAgreementPage