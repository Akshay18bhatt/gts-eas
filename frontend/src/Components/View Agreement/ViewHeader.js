import logo from "../../assets/Logo.svg"

const ViewHeader = () => {

    return (
        <div className="flex justify-between items-center border-b-2  lg:py-5" >
            <div className="flex flex-row gap-1" >
                <div className="w-10 h-10  lg:w-20 lg:h-20 overflow-hidden" >
                    <img src={logo} alt="gts-logo" className="w-full h-full object-cover " />
                </div>
                <div>
                    <h1 className="font-bold text-[11px] lg:text-[20px]" >Gorai  Technology Solutions</h1>
                    <p className="flex gap-2 font-semibold text-[8px] lg:text-sm text-gray-700" >
                        4Th main, 21, 6th Cross, Roopena,<br />
                        Agrahara, Bommanahalli, Bengaluru,<br />
                        Karnataka
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <div className="flex justify-between lg:gap-2 text-[10px] lg:text-base" >
                        <span className="lg:hidden" >
                            <svg  height="18px" viewBox="0 -960 960 960" width="18px" fill="black"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
                        </span>
                        <span className="hidden lg:block" >
                            <svg  height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
                        </span>
                        <span  >
                            9739403914
                        </span>
                    </div>
                    <div className="flex justify-between gap-3 text-[10px] lg:text-base" >
                        <span className="lg:hidden"  >
                            <svg height="18px" viewBox="0 -960 960 960" width="18px" fill="black"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                        </span>
                        <span className=" hidden lg:block"  >
                            <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                        </span>
                        <span>
                            hr.gts@ggtech.co.in
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewHeader