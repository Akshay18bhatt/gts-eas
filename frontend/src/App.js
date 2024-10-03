import { Route, Routes } from "react-router-dom"



/*                  File Imports             */
import AgreementDashboardPage from "./pages/agreementDashboardPage/AgreementDashboardPage"
import CreateAgreementPage from "./pages/CreateAgreementPage/CreateAgreementPage"
import UpdateAgreementPage from "./pages/UpdateAgreementPage/UpdateAgreementPage"



const App = ()=>{
    
    return(
        <div>
            <Routes>
                <Route path="/"  element={<AgreementDashboardPage />}/>
                <Route path="/gts/agreement/:purpose" element={<CreateAgreementPage />}  />
                <Route path="/gts/agreement/:purpose/:id" element={<UpdateAgreementPage />}  />
                <Route path="*" element={<h1>404: Page Not found 🚫</h1>} />
            </Routes>
        </div>
    )
}

export default App