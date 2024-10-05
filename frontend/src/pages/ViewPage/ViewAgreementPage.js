import FullFledgedAgreement from "../../Components/View Agreement/FullFledgedAgreement"
import ViewHeader from "../../Components/View Agreement/ViewHeader"


const ViewAgreementPage = () => {

    return (
        <div className=" max-w-screen p-2 lg:p-0 lg:w-11/12 lg:mx-auto min-h-screen pb-8 lg:pb-10">
            <header>
                {/* This component returns the header for view page */}
                <ViewHeader />
            </header>
            <main>
                {/* This component returns the agreement based on each agreement details which it fetches from 
                    localStorage
                */}
                <FullFledgedAgreement />
            </main>
        </div>
    )
}

export default ViewAgreementPage