


/*                        Based on Tag Type returning input field            */
const Tag = ({ tag, label, name, tagType, options, placeholder, formData, setFormData }) => {

    function handleFormData(e) {
        const activeField = e.target.name;
        
        setFormData({ ...formData, [activeField]: e.target.value })

    }

    switch (tag) {

        case "input": {
            return (
                <div className="flex flex-col text-[13px] lg:text-base lg:w-4/5 gap-2" >
                    <label htmlFor={name} className=" lg:text-[16px] font-bold" >{label}<span className="text-red-600 font-bold" >*</span></label>
                    <input onChange={handleFormData} value={formData[name]} className="outline-none px-2 py-1 rounded-md border-2" type={tagType} name={name} id={name} placeholder={placeholder} required />
                </div>
            )
        }
        case "select": {

            return (
                <div className="flex flex-col  lg:w-4/5 text-[13px] lg:text-base   gap-2" >
                    <label htmlFor={name} className="lg:text-[16px] font-bold" >{label}<span className="text-red-600 font-bold" >*</span></label>
                    <select id={name} value={formData[name]} onChange={handleFormData} name={name} className="outline-none px-2 py-1 rounded-md border-2" >
                        {
                            options &&
                            options.map((option, ind) => {

                                if (ind === 0) {
                                    return (<option key={option} value={""} >{option}</option>)
                                }
                                else {

                                    return (<option key={option} value={option.toLowerCase().trim()} >{option}</option>)
                                }

                            })
                        }
                    </select>
                </div>
            )
        }

        default: {
            return;
        }
    }
}



/*                               Main Form Component             */
const Form = ({ formControls, buttonText, formData, setFormData, formSubmit }) => {


    return (

        <form onSubmit={formSubmit} className="mt-5 lg:mt-0" >
            <div className="flex justify-end " >
                <button
                    type="submit"
                    className="bg-[#008000] flex justify-center items-center gap-3 active:opacity-50 font-medium lg:font-semibold w-7/12  lg:w-1/6 h-8 text-[14px] lg:h-9 lg:text-base rounded-lg text-white"
                >
                    <span>
                        <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M360-600v-80h360v80H360Zm0 120v-80h360v80H360Zm120 320H200h280Zm0 80H240q-50 0-85-35t-35-85v-120h120v-560h600v361q-20-2-40.5 1.5T760-505v-295H320v480h240l-80 80H200v40q0 17 11.5 28.5T240-160h240v80Zm80 0v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" /></svg>
                    </span>
                    <span>
                        {buttonText}
                    </span>
                </button>
            </div>
            <div className=" flex flex-col lg:grid lg:grid-cols-2   mt-5 gap-5" >
                {
                    formControls.map((field) => {
                        return (
                            
                            /*This component returns input field Based on Tag Type and rest information */
                            <Tag
                                key={field.name}
                                tag={field.tag}
                                tagType={field.tagType}
                                name={field.name}
                                label={field.label}
                                placeholder={field.placeholder}
                                options={field?.options}
                                formData={formData}
                                setFormData={setFormData}

                            />
                        )
                    })
                }
            </div>

        </form>

    )
}


export default Form