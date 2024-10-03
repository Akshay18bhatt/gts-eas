export const agreementFormControls = [
    {
        label:"Employee Name",
        name:"empName",
        tag:"input",
        tagType:"text",
        placeholder:"enter employee name",
        required:true
    },
    {
        label:"Email",
        name:"email",
        tag:"input",
        tagType:"email",
        placeholder:"enter employee email",
        required:true
    },
    {
        label:"Department",
        name:"department",
        tag:"select",
        tagType:"",
        placeholder:"Select Department",
        options:["Select Department","HR","Developer"],
        required:true
    },
    {
        label:"Position",
        name:"position",
        tag:"select",
        tagType:"",
        placeholder:"Select Position",
        options:["Select Position","Frontend Developer","Backend Developer"],
        required:true
    },
    {
        label:"empId",
        name:"empId",
        tag:"input",
        tagType:"text",
        placeholder:"enter empId",
        required:true
    },
    {
        label:"Agreement Date",
        name:"agreementDate",
        tag:"input",
        tagType:"date",
        placeholder:"select agreement date",
        required:true
    },
    {
        label:"Employment Start Date",
        name:"startDate",
        tag:"input",
        tagType:"date",
        placeholder:"select employment start date",
        required:true
    },
    {
        label:"Duration",
        name:"duration",
        tag:"select",
        tagType:"",
        placeholder:"Select duration",
        options:["Select duration","1 month","3 months"],
        required:true
    },
    // {
    //     label:"Compensation",
    //     name:"compensation",
    //     tag:"input",
    //     tagType:"text",
    //     placeholder:"salary/hourly rate",
    //     required:true
    // },
]
