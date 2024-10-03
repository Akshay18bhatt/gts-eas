

const agreement_FormData_validation= ({empName,email,department,position,empId,agreementDate,startDate,duration})=>{

    return new Promise((resolve,reject)=>{

        if(!empName)reject("empName is required!");
        else if(!email)reject("email is required!");
        else if(!department)reject("department is required!");
        else if(!position)reject("position is required!");
        else if(!empId)reject("empId is required!");
        else if(!agreementDate)reject("agreementDate is required!");
        else if(!startDate)reject("startDate is required!");
        else if(!duration)reject("duration is required!");

        resolve("");
    })

}



module.exports = {agreement_FormData_validation}