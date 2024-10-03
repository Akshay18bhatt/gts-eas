

const SelectInput = ({ optionsArray,selected, setSelected }) => {



    return (
        <div>
            <select
                value={selected} onChange={(e) =>
                setSelected(e.target.value)}
                className=" w-full text-[13px] lg:w-52 lg:text-base h-8 lg:h-9 outline-none rounded-md border-2 "
            >
                {
                    optionsArray.map(depart => {
                        return (
                            <option key={depart} value={depart.toLowerCase().trim()} >{depart}</option>
                        )
                    })
                }


            </select>
        </div>
    )
}

export default SelectInput