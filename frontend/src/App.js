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
            {/* This component is to solve "SPA" another page auto scroll problem */}
            <ScrollToTop />
            {/* All the routes based on each path */}
            <Routes>
                {/* Empty path for homepage which redirects  to Page --> AgreementDashboardPage  */}
                <Route path="/" element={<AgreementDashboardPage />} />

                {/* /create-agreement to create which redirects  to Page --> CreateAgreementPage  */}
                <Route path="/gts/agreement/create-agreement" element={<CreateAgreementPage />} />

                {/* /update-agreement/{agreementId path params} to update 
                    which redirects  to Page --> UpdateAgreementPage
                */}
                <Route path="/gts/agreement/update-agreement/:id" element={<UpdateAgreementPage />} />

                {/* /view-agrement/{agreementId path params to view } 
                    which redirects  to Page --> ViewAgreementPage
                */}
                <Route path="/gts/agreement/view-agreement/:id" element={<ViewAgreementPage />} />

                {/* wildcard route for unknown routes */}
                <Route path="*" element={<h1>404: Page Not found 🚫</h1>} />
            </Routes>
            <Loader/>
        </div>
    )
}

export default App