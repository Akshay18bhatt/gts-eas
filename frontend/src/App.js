import { Route, Routes } from "react-router-dom"
import Loader from "./Components/Common/Loader/Loader"



/*                  File Imports             */
import AgreementDashboardPage from "./pages/agreementDashboardPage/AgreementDashboardPage"
import CreateAgreementPage from "./pages/CreateAgreementPage/CreateAgreementPage"
import UpdateAgreementPage from "./pages/UpdateAgreementPage/UpdateAgreementPage"
import ScrollToTop from "./utils/ScrolltoTop"
import ViewAgreementPage from "./pages/ViewPage/ViewAgreementPage"



const App = () => {

    return (
        <div>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<AgreementDashboardPage />} />
                <Route path="/gts/agreement/:purpose" element={<CreateAgreementPage />} />
                <Route path="/gts/agreement/:purpose/:id" element={<UpdateAgreementPage />} />
                <Route path="/gts/agreement/view-agreement/:id" element={<ViewAgreementPage />} />
                <Route path="*" element={<h1>404: Page Not found 🚫</h1>} />
            </Routes>
            <Loader/>
        </div>
    )
}

export default App