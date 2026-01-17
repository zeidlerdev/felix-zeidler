import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img
                src="/logofz.svg"
                alt="Felix Zeidler Development"
                className="w-8 h-8 sm:w-10 sm:h-10"
              ></img>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold">
              <span className="headlines">Felix </span>
              <span className="spans">Zeidler</span>
              <span>.</span>
            </span>
          </div>
          {/*Nav Links*/}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#Skills"
              className="links links:hover text-sm lg:text-base font-bold"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="links links:hover text-sm lg:text-base font-bold"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="links links:hover text-sm lg:text-base font-bold button-one"
            >
              Contact Me
            </a>
          </div>
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>
      {mobileMenuIsOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <a
              href="#skills"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Contact me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
