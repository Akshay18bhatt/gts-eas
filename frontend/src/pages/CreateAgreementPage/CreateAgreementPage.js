import Navbar from "../../Components/Common/Navbar/Navbar"
import CreateAgreementForm from "../../Components/Create Agreement/CreateAgreementForm"


const CreateAgreementPage = () => {


    return ( 
        <div className=" max-w-screen min-h-screen  relative " >
            <header className="sticky top-0 left-0 right-0" >
                <Navbar />
            </header>
            <main className="w-full p-4 lg:p-0 lg:w-11/12  lg:mx-auto pt-5 lg:pt-10 pb-20  "  >

                <div className="h-full ">
                    <CreateAgreementForm />
                </div>
            </main>
        </div>
    )
}

export default CreateAgreementPage