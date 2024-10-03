import navLogo from "../../../assets/Logo frame.svg"

const Navbar = ()=>{


    return(
        <nav className="flex justify-between items-center px-2 py-3  lg:px-14 lg:py-4 border shadow-lg bg-white " >
            <div>
                <img  src={navLogo} alt="gts-logo"  />
            </div>
            <div>
                <h1  className="  text-sm lg:text-2xl font-bold" >GTS Agreement System</h1>
            </div>
        </nav>
    )
}

export default Navbar