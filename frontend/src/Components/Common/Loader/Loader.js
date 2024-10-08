import { useSelector } from "react-redux";
import "./loader.css"

const Loader = ()=>{

    const isLoading = useSelector(state=>state.loading.isLoading);
    

    return(
        <div className={!isLoading ? "hiddenLoader":"loader_container"}>

            <div className="loader" >
                
            </div>
        </div>
    )
}

export default Loader;