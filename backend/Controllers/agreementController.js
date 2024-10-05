const agreementModel = require("../Schemas/createAgreementSchema");


/*                      File Imports            */
const { create_new_agreement, 
        get_all_Agreements, 
        delete_Agreement,
        update_agreement} = require("../Models/agreementModel");

const {agreement_FormData_validation, idValidation } = require("../utils/agreementUtils");


/*                      Create Agreement Controller              */
const create_Agreement_Controller = async (req, res) => {


    let { agreementDate, startDate } = req.body;

    /*                  Extracting time stamps                   */
    agreementDate = agreementDate && new Date(agreementDate).getTime();
    startDate = startDate && new Date(startDate).getTime();



    try {
        const response = await agreement_FormData_validation({ ...req.body });
        // return res.send({
        //     status:200,
        //     success:true,
        //     message:response,
        //     data:req.body
        // })
    }
    catch (err) {
        return res.send({
            status: 400,
            success: false,
            message: err,
        })

    }

    try {
        const created_agreement = await create_new_agreement({ ...req.body, agreementDate, startDate })
        return res.send({
            status: 201,
            success: true,
            message: "Agreement created successfully",
            data: created_agreement
        })
    }
    catch (err) {
        return res.send(err)
    }

}


const get_allAgreements_Controller = async (req, res) => {

    const skip = +(req.query.skip) || 0;

    try {

        const all_agreements = await get_all_Agreements({ skip });
        return res.send({
            status: 200,
            success: true,
            message: "Read success",
            data: all_agreements
        })
    }
    catch (err) {
        return res.send(err);
    }
}


const delete_Agreement_Controller  = async(req,res)=>{

    const {deleteId} = req.body;

    try{
        await idValidation(deleteId);
        const deleted_agreement = await delete_Agreement({deleteId});

        return res.send({
            status:200,
            success:true,
            message:"Agreement deleted successfully",
            data:deleted_agreement,
        })

    }
    catch(err){
        return res.send(err)
    }
}


const update_Agreement_Controller = async(req,res)=>{

    const agreementId_toupdate = req.params.id;
    
    try{
        await idValidation(agreementId_toupdate);
        await agreement_FormData_validation({...req.body})
    }
    catch(err){
        return res.send({
            status:400,
            success:false,
            message:err
        })
    }

    try{
        
        const updated_agreement = await update_agreement({id:agreementId_toupdate,data:{...req.body}});
        return res.send({
            status:200,
            success:true,
            message:"Agreement Updated Successfully",
            data:updated_agreement
        })
    }
    catch(err){
        return res.send(err);
    }
 
    
}
module.exports = {  create_Agreement_Controller, 
                    get_allAgreements_Controller,
                    delete_Agreement_Controller,
                    update_Agreement_Controller
                 }