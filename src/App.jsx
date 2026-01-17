import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import Info from './components/Info.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <NavBar />
      <Hero />
      <Info />
      <Footer />
    </div>
  );
}

export default App;