import { toast } from "react-toastify";
import { actionTypes } from "./actionTypes"

const baseUrl = "http://localhost:8000";


export const create_agreement = (formData)=>{

    return async (dispatch)=>{

        try{
            const responseObj = await fetch(`${baseUrl}/gts-agreement/create-agreement`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    ...formData
                }),
                credentials:"include"
            })
            const responseData = await responseObj.json();

            dispatch({type:actionTypes.LOADING_SUCCESS})
            if(responseData.success){
                toast.success(responseData.message);
            }else{
                toast.error(responseData.message);
            }
            
        }
        catch(err){
            console.log(err);
            dispatch({type:actionTypes.LOADING_SUCCESS})
            toast.warning(err.message)
            
        }
    }
}
export const get_all_agreements = ()=>{


    return async(dispatch)=>{

        try{
            const responseObj = await fetch(`${baseUrl}/gts-agreement/all-agreements`)
            const responseData = await responseObj.json();

            dispatch({type:actionTypes.SAVE_ALL_AGREEMENTS, payload:responseData.data})
            dispatch({type:actionTypes.LOADING_SUCCESS})
            if(responseData.success){

            }
            else{
                toast.error(responseData.message);
            }
            

        }
        catch(err){
            console.log(err);
            dispatch({type:actionTypes.LOADING_SUCCESS})
            toast.error(err.message)
        }
    }
}

export const update_agreement = (agreementId,formData)=>{

    return async(dispatch)=>{
        try{

            const responseObj = await fetch(`${baseUrl}/gts-agreement/update-agreement/${agreementId}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    ...formData
                }),
                credentials:"include"
            })
            const responseData = await responseObj.json();
            dispatch({ type: actionTypes.LOADING_SUCCESS }) 
            if(responseData.success){
                toast.success(responseData.message);
            }else{
                toast.error(responseData.message);
            }
            localStorage.removeItem("updatindAgreementDetails");
        }
        catch(err){
            console.log(err);
            dispatch({ type: actionTypes.LOADING_SUCCESS }) 
            toast.error(err.message);
            localStorage.removeItem("updatindAgreementDetails");
            
        }
    }
}
export const delete_agreement= (deleteId)=>{

    return async(dispatch)=>{
        try{
            const responseObj = await fetch(`${baseUrl}/gts-agreement/delete-agreement`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    deleteId
                }),
                credentials:"include"
            })

            const responseData = await responseObj.json();
            dispatch(get_all_agreements())
            dispatch({type:actionTypes.LOADING_SUCCESS})
            if(responseData.success){
                toast.success(responseData.message)
            }else{
                toast.error(responseData.message)
            }
            console.log(responseData);

        }
        catch(err){
            console.log(err);
            dispatch({type:actionTypes.LOADING_SUCCESS})
            toast.error(err.message);
            
        }

    }
}
