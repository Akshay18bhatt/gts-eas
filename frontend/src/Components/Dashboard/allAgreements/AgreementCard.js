import { useNavigate } from "react-router-dom"
import person from "../../../assets/person.png"
import { useDispatch } from "react-redux";
import { delete_agreement } from "../../../redux/actions/actionCreators";
import { actionTypes } from "../../../redux/actions/actionTypes";
import { extractDate } from "../../../utils/extractDate";


const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const AgreementCard = ({ agreement }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const agreementId = agreement._id;
    const empDetails = { ...agreement.empDetails };
    const { empName, department, position, email,empId } = empDetails;

    /*                      Extracting agreement Date        */
    let {agreementDate,startDate,duration} = (agreement.agreementDetails); 
    /*                  extracting date using utils function         */
    const { year, month, date } = extractDate(agreementDate);




    function handleEdit() {
        dispatch({ type: actionTypes.UPDATING })

        /*                              Extracting Date          */
        const {date:agreement_date,month:agreement_month,year:agreement_year} = extractDate(agreementDate);
        const {date:start_date,month:start_month,year:start_year} = extractDate(startDate);

        const updatingAgreement_details = {
            agreementId,
            empName,
            department,
            position,
            email,
            empId,
            agreementDate:`${agreement_year}-${agreement_month[0]}-${agreement_date}`,
            startDate:`${start_year}-${start_month[0]}-${start_date}`,
            duration
        }
        localStorage.setItem("updatindAgreementDetails",JSON.stringify(updatingAgreement_details))
        navigate(`/gts/agreement/update-agreement/${agreementId}`);
    }

    async function handleDelete() {
        if (!window.confirm("Are you sure you want to delete this agreement?")) {
            return    
        }
        else{
            dispatch({ type: actionTypes.LOADING })
            dispatch(delete_agreement(agreementId))
        }
        
    }


    return (
        <div className="bg-white border-2 lg:h-[250px] rounded-md flex flex-col justify-between overflow-hidden " >
            <div className="py-5 px-2 flex flex-col gap-2  flex-grow">
                <div className="flex justify-between items-center">
                    <p className="font-semibold" ><strong>Name:</strong> {empName.toUpperCase()}</p>
                    <div className="h-10 w-10 bg-orange-400 overflow-hidden rounded-full " >
                        <img src={person} alt="hello" className="w-full h-full object-contain" />
                    </div>
                </div>
                <p><strong className="text-gray-500">Email:</strong> {email}</p>
                <div className="hidden lg:flex lg:flex-col lg:gap-2" >
                    <p><strong className="text-gray-500">Department:</strong> {department.toUpperCase()}</p>
                    <p><strong className="text-gray-500">Position:</strong> {position}</p>
                    <p><strong className="text-gray-500">AgreementDate:</strong> {date} {month[1]}, {year} </p>
                </div>
            </div>
            <div className="grid grid-cols-3 h-12" >
                <button onClick={handleEdit} className="edit border-2 flex justify-center items-center hover:bg-gray-300" >
                    <svg className="edit" height="24px" viewBox="0 -960 960 960" width="24px" fill="#008000"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg>
                </button>
                <button className=" view border-2 flex justify-center items-center hover:bg-gray-300" >
                    <svg className="view" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0000ff"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg>
                </button>
                <button onClick={handleDelete} className=" delete border-2 flex justify-center items-center hover:bg-gray-300"  >
                    <svg className="delete" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff0000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                </button>
            </div>
        </div>
    )

}
export default AgreementCard