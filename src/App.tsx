
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Profile } from "./pages/Profile";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Help from "./pages/Help";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CompanyRegistration from "./pages/services/CompanyRegistration";
import CompanyRegistrationForm from "./pages/services/CompanyRegistrationForm";
import FactoryRegistration from "./pages/services/FactoryRegistration";
import FactoryRegistrationForm from "./pages/services/FactoryRegistrationForm";
import CommercialLeaseContract from "./pages/services/CommercialLeaseContract";
import CommercialLeaseContractForm from "./pages/services/CommercialLeaseContractForm";
import FinancialDeclaration from "./pages/services/FinancialDeclaration";
import FinancialDeclarationForm from "./pages/services/FinancialDeclarationForm";
import TaxDeclaration from "./pages/services/TaxDeclaration";
import TaxDeclarationForm from "./pages/services/TaxDeclarationForm";
import Opportunities from "./pages/Opportunities";
import InvestmentRequestForm from "./pages/opportunities/InvestmentRequestForm";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { DashboardHome } from "./pages/dashboard/DashboardHome";
import { Companies } from "./pages/dashboard/Companies";
import { Requests } from "./pages/dashboard/Requests";
import { Notifications } from "./pages/dashboard/Notifications";
import { Certificates } from "./pages/dashboard/Certificates";
import Licenses from "./pages/services/licenses";
import Laws from "./pages/Laws";
import Tourism from "./pages/Tourism";
import News from "./pages/News";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50" dir="rtl">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/opportunities/investment-request" element={<InvestmentRequestForm />} />
            <Route path="/services" element={<Services />} />
            <Route path="/help" element={<Help />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/laws" element={<Laws />} />
            <Route path="/tourism" element={<Tourism />} />
            <Route path="/news" element={<News />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            
            <Route path="/services/commercial-records" element={<CompanyRegistration />} />
            <Route path="/services/company-registration/form" element={<CompanyRegistrationForm />} />
            <Route path="/services/commercial-records/form" element={<CompanyRegistrationForm />} />
            <Route path="/services/factory" element={<FactoryRegistration />} />
            <Route path="/services/factory/form" element={<FactoryRegistrationForm />} />
            <Route path="/services/contracts" element={<CommercialLeaseContract />} />
            <Route path="/services/contracts/form" element={<CommercialLeaseContractForm />} />
            <Route path="/services/financial" element={<FinancialDeclaration />} />
            <Route path="/services/financial/form" element={<FinancialDeclarationForm />} />
            <Route path="/services/tax" element={<TaxDeclaration />} />
            <Route path="/services/tax/form" element={<TaxDeclarationForm />} />
            <Route path="/services/licenses" element={<Licenses />} />
            
            <Route path="/profile" element={<Profile />} />
            
            <Route path="/dashboard/*" element={<Dashboard />}>
              <Route index element={<DashboardHome />} />
              <Route path="companies" element={<Companies />} />
              <Route path="requests" element={<Requests />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="certificates" element={<Certificates />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
