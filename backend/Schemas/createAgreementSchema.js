const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const empInfoSchema = new Schema({
    empName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    department:{
        type:String,
        required:true,
        trim:true
    },
    position:{
        type:String,
        required:true,
        trim:true
    },
    empId:{
        type:String,
        unique:true
    }
})
const agreementInfoSchema = new Schema({
    agreementDate:{
        type:String,
        required:true,
    },
    startDate:{    /*           employment start         */
        type:String,
        required:true,
    },
    duration:{
        type:String,
        required:true,
    },
    // compensation:{
    //     type:String,
    //     required:true
    // }

})
const createAgreementSchema = new Schema({

    empDetails: {
        type: empInfoSchema,
        required: true
    },
    agreementDetails:{
        type: agreementInfoSchema,
        required:true
    },
    creation_date_time: {
        type: String,
        required: true
    }
}, { strict: false })


const agreementModel = mongoose.model("agreement", createAgreementSchema);
module.exports = agreementModel