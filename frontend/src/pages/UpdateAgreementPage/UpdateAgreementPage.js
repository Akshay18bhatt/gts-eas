import { useEffect, useState } from "react"
import Navbar from "../../Components/Common/Navbar/Navbar"
import Form from "../../Components/Common/Form/Form"
import { update_agreement } from "../../redux/actions/actionCreators"
import { useParams } from "react-router-dom"
import { actionTypes } from "../../redux/actions/actionTypes"
import { useDispatch } from "react-redux"
import { agreementFormControls } from "../../Components/Create Agreement/formControls"
import Loader from "../../Components/Common/Loader/Loader"



const UpdateAgreementPage = () => {

    const [updateFormData, setUpdateFormData] = useState(() => {
        return { ...JSON.parse(localStorage.getItem("updatindAgreementDetails")) }
    })
    console.log(updateFormData);

    const params = useParams();
    const agreementId = params.id;
    const dispatch = useDispatch();

    function updateformSubmit(e) {

        e.preventDefault();
        if (!window.confirm("Are you sure you want to Update this agreement?")) {
            return    
        }
        dispatch({ type: actionTypes.LOADING })
        dispatch(update_agreement(agreementId, updateFormData))
    }

    useEffect(() => {

        return (
            function () {

                dispatch({ type: actionTypes.UPDATING_SUCCESS })
                localStorage.removeItem("updatindAgreementDetails")
            }
        )

    }, [])



    return (
        <div className=" max-w-screen min-h-screen  relative " >
            <header className="sticky top-0 left-0 right-0" >
                <Navbar />
            </header>
            <main className="w-full p-4 lg:p-0 lg:w-11/12  lg:mx-auto pt-5 lg:pt-10 pb-20  "  >
                <Form
                    formControls={agreementFormControls}
                    buttonText={"Update Agreement"}
                    formData={updateFormData}
                    setFormData={setUpdateFormData}
                    formSubmit={updateformSubmit}
                />
                <Loader />
            </main>
        </div>
    )
}

export default UpdateAgreementPage