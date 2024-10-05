import { useEffect, useState } from "react"
import Navbar from "../../Components/Common/Navbar/Navbar"
import Form from "../../Components/Common/Form/Form"
import { update_agreement } from "../../redux/actions/actionCreators"
import { useParams } from "react-router-dom"
import { actionTypes } from "../../redux/actions/actionTypes"
import { useDispatch } from "react-redux"
import { agreementFormControls } from "../../Components/Create Agreement/formControls"



/* Root Page for Updating an Agreement or we can say a Layout page */
const UpdateAgreementPage = () => {


    /*        Instead of making an api call fetching data from localStorage    */
    const [updateFormData, setUpdateFormData] = useState(() => {
        return { ...JSON.parse(localStorage.getItem("updatindAgreementDetails")) }
    })

    const params = useParams();
    const agreementId = params.id;
    const dispatch = useDispatch();


    
    /* This function handles what happens when we submit the update agreement form */
    function updateformSubmit(e) {

        e.preventDefault();
        if (!window.confirm("Are you sure you want to Update this agreement?")) {
            return;
        }
        dispatch({ type: actionTypes.LOADING })
        dispatch(update_agreement(agreementId, updateFormData))
    }

    useEffect(() => {


        /*          Clean up function to remove from local stroage       */
        return (
            function () {

                dispatch({ type: actionTypes.UPDATING_SUCCESS })
                localStorage.removeItem("updatindAgreementDetails")
            }
        )

    }, [dispatch])



    return (
        <div className=" max-w-screen min-h-screen  relative " >
            <header className="sticky top-0 left-0 right-0" >
                <Navbar />
            </header>
            <main className="w-full p-4 lg:p-0 lg:w-11/12  lg:mx-auto pt-5 lg:pt-10 pb-20  "  >
                <h1 className="font-bold  lg:text-2xl mb-4 underline decoration-double" >Update Agreement Details</h1>
                {/* This component returns us the required form based on the formControls, 
                    buttonText, formData(pre poupulated with agreements original data initially), 
                */}
                <Form
                    formControls={agreementFormControls}
                    buttonText={"Update Agreement"}
                    formData={updateFormData}
                    setFormData={setUpdateFormData}
                    formSubmit={updateformSubmit}
                />
            </main>
        </div>
    )
}

export default UpdateAgreementPage