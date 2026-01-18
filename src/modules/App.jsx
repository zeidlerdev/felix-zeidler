import NavBar from "../components/NavBar.jsx";
import Hero from "../components/landing/Hero.jsx";
import Footer from "../components/landing/Footer.jsx";
import Tools from "../components/landing/Tools.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <NavBar />
      <Hero />
      <Tools />
      <Footer />
    </div>
  );
}

export default App;
