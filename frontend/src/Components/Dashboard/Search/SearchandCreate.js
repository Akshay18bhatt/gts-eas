import { useState } from "react"
import SelectInput from "./SelectInput";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";


const departments = ["Select Department", "HR", "Finance", "IT", "Marketing", "Sales", "Operations", "R&D", "Design", "QA", "Engineer", "Administration", "Customer Support"]
const positions = ["Select Position", "Frontend Engineer", "Backend Engineer", "UI/UX Designer", "Finance Manager", "Marketing Specialist"]
const SearchandCreate = () => {

    const [searchText, setSearchText] = useState("");
    const [departmentSearch, setDepartmentSearch] = useState("");
    const [positionSearch, setPositionSearch] = useState("");

    const navigate = useNavigate();



    return (
        <div className=" flex flex-col  gap-3  lg:grid lg:grid-cols-3 mt-5 lg:items-center  lg:gap-10  border-2 p-2 " >

            {/*             Search input tag based on email of employee Id       */}
            <SearchInput searchText={searchText} setSearchText={setSearchText} />


            {/*             Filter Buttons based on Departments or Positions */}
            <div>

                <span className="font-semibold text-[14px] lg:text-base " >Filter</span>
                <div className="flex flex-col lg:flex-row gap-2 lg:justify-between " >
                    <SelectInput optionsArray={departments} selected={departmentSearch} setSelected={setDepartmentSearch} />
                    <SelectInput optionsArray={positions} selected={positionSearch} setSelected={setPositionSearch} />
                </div>

            </div>

            {/*             Create Agreement Button          */}
            <div className="flex order-first justify-center mt-2 mb-2 lg:mt-0 lg:mb-0 lg:justify-start lg:order-none lg:flex-row-reverse" >

                <button
                    onClick={() => navigate("/gts/agreement/create-agreement")}
                    className="bg-[#008000] flex justify-center items-center gap-2 text-white text-[14px] lg:text-base h-8 lg:h-9 w-8/12 lg:w-1/2 font-medium lg:font-semibold rounded-xl  active:opacity-50"
                >
                    <span>
                        <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M360-600v-80h360v80H360Zm0 120v-80h360v80H360Zm120 320H200h280Zm0 80H240q-50 0-85-35t-35-85v-120h120v-560h600v361q-20-2-40.5 1.5T760-505v-295H320v480h240l-80 80H200v40q0 17 11.5 28.5T240-160h240v80Zm80 0v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" /></svg>
                    </span>
                    <span>
                        Create Agreement
                    </span>
                </button>

            </div>
        </div>
    )
}

export default SearchandCreate