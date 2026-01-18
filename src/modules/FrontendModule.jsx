import NavBar from "../components/NavBar.jsx";
import FrontendInfo from "../components/Frontend/FrontendInfo.jsx";
import Footer from "../components/landing/Footer.jsx";

function FrontendModule() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <NavBar />
      <FrontendInfo />
      <Footer />
    </div>
  );
}
export default FrontendModule;
