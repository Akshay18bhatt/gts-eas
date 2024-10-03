


const SearchInput = ({ searchText, setSearchText }) => {

    return (
        <div className="flex flex-col  " >
            <label htmlFor="searchBy_email_or_eid" className="mb-1 font-semibold text-[14px] lg:text-base  " >Search Agreement</label>
            <div className="flex h-8 lg:h-9" >
                <input type="text"
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                    id="searchBy_email_or_eid"
                    placeholder="search by email or employee Id"
                    className=" text-[14px] rounded-l-lg px-3 py-1 w-full lg:text-base outline-none  border-2 border-r-0 "
                />
                <span className="  flex justify-center items-center w-14  rounded-r-lg   bg-[#0000ff] " >
                    <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                </span>
            </div>

        </div>
    )
}

export default SearchInput