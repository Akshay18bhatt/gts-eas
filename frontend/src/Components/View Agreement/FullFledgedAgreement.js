import { useEffect } from "react"



const FullFledgedAgreement = () => {

    const viewDetails = { ...{ ...JSON.parse(localStorage.getItem("viewAgreementDetails")) } }
    const { empName, email, empId, department, position, agreementDate, startDate, duration } = viewDetails;

    useEffect(() => {

        return (
            function () {
                localStorage.removeItem("viewAgreementDetails")
            }
        )

    }, [])

    return (
        <div>
            <div className="flex justify-end py-1" >
                <div className="flex flex-col items-end text-[8px] lg:text-sm" >
                    <span className=" font-semibold text-gray-700" >Agreement Date</span>
                    <span className="font-semibold" >{agreementDate}</span>
                </div>
            </div>
            <div className="text-xs text-justify p-3 lg:text-base lg:p-8" >

                {/*                     Introduction Statement           */}
                <div className="mt-3 lg:mt-8" >
                    <h2 className=" text-[10px] font-bold lg:text-[16px] " >Employment Agreement</h2>
                    <p className=" text-[9px] lg:text-base p-2 " >
                        This Employment Agreement is made and entered into
                        on <span className="font-bold italic text-[8px] lg:text-base" >"{agreementDate}"</span> between <span className="font-bold italic text-[8px] lg:text-base" >"{empName?.toUpperCase()}"</span>, an employee of "GORAI TECHNOLOGY SOLUTIONS",
                        hereinafter referred to as "Employee," and "GORAI TECHNOLOGY SOLUTIONS",
                        hereinafter referred to as "Employer.
                        " This Agreement outlines the terms and conditions of the employment relationship.
                    </p>
                </div>

                {/*                     Employee Information         */}
                <div className="mt-5 lg:mt-8">
                    <h2 className=" text-[10px] font-bold lg:text-[16px] " >Employee Information</h2>
                    <ul className=" text-[9px] lg:text-base  list-disc list-inside px-2  "  >
                        <li>Full Name: <span className="font-bold italic text-[8px] lg:text-base" >{empName?.toUpperCase()}</span></li>
                        <li>Emp ID: <span className="font-bold italic text-[8px] lg:text-base" >{empId}</span></li>
                        <li>Email: <span className="font-bold italic text-[8px] lg:text-base" >{email}</span></li>
                        <li>Department:  The Employee will be assigned to the <span className="font-bold italic text-[8px] lg:text-base" >"{department?.toUpperCase()}"</span> department.</li>
                        <li>Position: The Employee will hold the position of <span className="font-bold italic text-[8px] lg:text-base" >"{position?.toUpperCase()}"</span>.</li>
                        <li>Start Date: The employment start date will be <span className="font-bold italic text-[8px] lg:text-base" >"{startDate}"</span>.</li>

                    </ul>
                </div>

                {/*                     Agreement Information         */}
                <div className="mt-5 lg:mt-8">
                    <h2 className=" text-[10px] font-bold lg:text-[16px] " >Agreement Information</h2>
                    <ul className=" text-[9px] lg:text-base list-disc list-inside px-2" >
                        <li>Agreement Date: This Agreement is effective as of <span className="font-bold italic text-[8px] lg:text-base" >"{agreementDate}"</span>.</li>
                        <li>Duration: The employment will be for a period of <span className="font-bold italic text-[8px] lg:text-base" >"{duration}"</span>,
                            unless terminated earlier as provided herein. If no specific term is mentioned,
                            employment will be at-will.
                        </li>
                        <li>Compensation: The Employee will receive a compensation of [Salary/Hourly Rate] per [hour/week/month/year],
                            paid in accordance with the company's standard payroll practices.
                        </li>

                        <li>Benefits: The Employee will be entitled to the following benefits:</li>
                        <ul className=" text-[9px] lg:text-base list-decimal list-inside px-8" >
                            <li>Health Insurance</li>
                            <li>Retirement Plan</li>
                            <li>Vacation/Sick Leave</li>
                            <li>Other Benefits</li>
                        </ul>
                        <li>Working Hours: The Employee will be expected to work [Hours per week] hours per week,
                            with standard office hours being from [Start Time] to [End Time],
                            Monday through Friday.
                        </li>


                    </ul>
                </div>
                <div className="mt-5 lg:mt-8">
                    <h2 className=" text-[10px] font-bold lg:text-[16px] " >Termination Clause</h2>
                    <p className=" text-[9px] lg:text-base p-2 " >
                        This Agreement may be terminated by either party at any time,
                        with or without cause, by providing [Notice Period] written notice.
                        The Employer reserves the right to terminate the Employee immediately for cause,
                        including but not limited to violation of company policy, misconduct,
                        or breach of this Agreement. Upon termination,
                        the Employee will be entitled to receive any accrued but unpaid compensation and benefits
                        in accordance with applicable law and company policy.
                    </p>
                </div>
                <div className="mt-5 lg:mt-8">
                    <h2 className=" text-[10px] font-bold lg:text-[16px] " >Signatures</h2>
                    <p className=" text-[9px] lg:text-base p-2  italic " >
                        By signing below, both parties acknowledge that they have read, understood,
                        and agree to the terms and conditions set forth in this Agreement.
                    </p>
                    <div className="mt-8 lg:mt-12 text-[8px] lg:text-[12px] flex flex-col " >
                        <strong>Employee Signature:</strong>
                        <strong>Employer Signature:</strong>
                        <strong>Date:</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullFledgedAgreement