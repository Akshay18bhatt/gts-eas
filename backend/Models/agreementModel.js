const agreementModel = require("../Schemas/createAgreementSchema")


const create_new_agreement = async ({ empName, email, department, position, empId, agreementDate, startDate, duration }) => {

    return new Promise(async (resolve, reject) => {

        try {

            const isAgreement_exist = await agreementModel.findOne({
                $or: [{ "empDetails.email": email }, { "empDetails.empId": empId }]
            })

            if (isAgreement_exist?.empDetails?.email === email && isAgreement_exist?.empDetails?.empId === empId) {
                return reject({
                    status: 400,
                    success: false,
                    message: `Agreement already exist !`
                })
            }
            if (isAgreement_exist?.empDetails?.email === email) {
                return reject({
                    status: 400,
                    success: false,
                    message: `Email already exist !`
                })
            }
            if (isAgreement_exist?.empDetails?.empId === empId) {
                return reject({
                    status: 400,
                    success: false,
                    message: `empId already exist !`
                })
            }
            const agreementObj = new agreementModel({
                empDetails: {
                    empName,
                    email,
                    department,
                    position,
                    empId,
                },
                agreementDetails: {
                    agreementDate,
                    startDate,
                    duration
                },
                creation_date_time: Date.now()
            })

            const createdAgreement = await agreementObj.save();
            return resolve(createdAgreement)

        }
        catch (err) {

            return reject({
                status: 500,
                success: false,
                message: "Internal server error"
            })
        }
    })

}


const get_all_Agreements = ({ skip }) => {

    return new Promise(async (resolve, reject) => {

        try {
            const allAgreements = await agreementModel.aggregate([
                { $sort: { creation_date_time: -1 } },
                { $skip: skip },
                { $limit: 10 }
            ])

            resolve(allAgreements);

        }
        catch (err) {
            reject({
                status: 500,
                success: false,
                message: "Internal server error",
            })

        }
    })
}

const update_agreement = ({ id, data }) => {

    let { empName, email, department, position, empId, agreementDate, startDate, duration } = data;
    agreementDate = agreementDate && new Date(agreementDate).getTime();
    startDate = startDate && new Date(startDate).getTime();

    return new Promise(async (resolve, reject) => {

        try {
            const isEmail_exist = await agreementModel.findOne({"empDetails.email": email });
            const isEmpId_exist = await agreementModel.findOne({"empDetails.empId": empId});


            
            if (!isEmail_exist?._id.equals(id)) {

                if (isEmail_exist?.empDetails?.email === email && isEmail_exist?.empDetails?.empId === empId) {
                    return reject({
                        status: 400,
                        success: false,
                        message: `Agreement already exist !`
                    })
                }
                if (isEmail_exist?.empDetails?.email === email) {
                    return reject({
                        status: 400,
                        success: false,
                        message: `Email already exist !`
                    })
                }
            }
            if (!isEmpId_exist?._id.equals(id)) {

                if (isEmpId_exist?.empDetails?.email === email && isEmpId_exist?.empDetails?.empId === empId) {
                    return reject({
                        status: 400,
                        success: false,
                        message: `Agreement already exist !`
                    })
                }
                if (isEmpId_exist?.empDetails?.empId === empId) {
                    return reject({
                        status: 400,
                        success: false,
                        message: `empId already exist !`
                    })
                }
            }

            const updatedAgreement = await agreementModel.findOneAndUpdate({ _id: id }, {
                "empDetails.empName": empName,
                "empDetails.empId": empId,
                "empDetails.email": email,
                "empDetails.department": department,
                "empDetails.position": position,
                "agreementDetails.startDate": startDate,
                "agreementDetails.agreementDate": agreementDate,
                "agreementDetails.duration": duration
            })

            return resolve(updatedAgreement);
        }
        catch (err) {
            return reject({
                status: 500,
                success: false,
                message: "Internal server error"
            })
        }
    })

}

const delete_Agreement = ({ deleteId }) => {

    return new Promise(async (resolve, reject) => {

        try {
            const deletedAgreement = await agreementModel.findOneAndDelete({ _id: deleteId });

            if (!deletedAgreement) {
                reject({
                    status: 400,
                    success: false,
                    message: "Agreement does not exist"
                })
            }
            resolve(deletedAgreement);
        }
        catch (err) {
            reject({
                status: 500,
                success: false,
                message: "Internal server error"
            })
        }


    })

}
module.exports = { create_new_agreement, get_all_Agreements, delete_Agreement, update_agreement }