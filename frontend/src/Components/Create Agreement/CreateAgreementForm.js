import { useEffect, useState } from "react"
import Form from "../Common/Form/Form"
import { agreementFormControls } from "./formControls"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { create_agreement, update_agreement } from "../../redux/actions/actionCreators"
import { actionTypes } from "../../redux/actions/actionTypes"

const initialData = {
    empName: "",
    email: "",
    department: "",
    position: "",
    empId: "",
    agreementDate: "",
    startDate: "",
    duration: "",
}

const CreateAgreementForm = () => {

    /* Based on changes in input fields this setFormData function will get triggered so to achieve
    dynamic field values based on user input */
    const [formData, setFormData] = useState(initialData);
    const dispatch = useDispatch();


    
    /* This function handles what happens when we submit the form*/
    function formSubmit(e) {
        e.preventDefault();
        dispatch({ type: actionTypes.LOADING });
        dispatch(create_agreement(formData));

    }

    useEffect(() => {


        /* Clean up function to set isUpdating in redux store to false
         if user refreshes or hits the back button*/
        return (
            function () {

                dispatch({ type: actionTypes.UPDATING_SUCCESS });
            }
        )
    }, [])


    return (
        <div className="h-full w-full">

            {/*             This form is for employee Details            */}
            <div className="flex flex-col" >
                <h1 className="font-bold  lg:text-2xl mb-4 underline decoration-double" >Agreement Details</h1>
                {/* This component returns us the required form based on the formControls, 
                    buttonText, formData(empty fields initially), 
                */}
                <Form
                    formControls={agreementFormControls}
                    buttonText={"Create Agreement"}
                    formData={formData}
                    setFormData={setFormData}
                    formSubmit={formSubmit}
                />
            </div>

        </div>
    )
}

export default CreateAgreementForm