import {
  ArrowBigDown,
  ArrowDown,
  ArrowRightCircle,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Footer() {
  return (
    <div className="text-xs">
      <nav className="top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            <button className="p-2 text-gray-300 hover:text-white"></button>
          </div>
        </div>
        <div className="bg-slate-900/50 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="w-full block md:flex text-center bg-red-500/20 justify-center">
            <div>
              <button
                className="p-4 block gap-3 w-full h-full bg-red-500 hover:bg-yellow-500"
                onClick={() => (window.location.href = "../index.html")}
              >
                <span className="block">H</span>
                <span className="block">O</span>
                <span className="block">M</span>
                <span>E</span>
              </button>
            </div>
            <div className="h-auto bg-yellow-500/20 border-r border-l border-gray-300/20">
              <h1 className="p-5">Information about Web Development</h1>
              <div className="bg-pink-500/20">
                <button
                  className="p-4 flex gap-3 w-full hover:bg-yellow-500"
                  onClick={() => (window.location.href = "../Frontend.html")}
                >
                  <ArrowRightCircle />
                  Frontend Web Development
                </button>
                <button
                  className="flex p-4 gap-3 w-full hover:bg-yellow-500"
                  onClick={() => (window.location.href = "../Info.html")}
                >
                  <ArrowRightCircle />
                  Backend Web Development
                </button>
                <button
                  className="flex p-4 gap-3 w-full hover:bg-yellow-500"
                  onClick={() => (window.location.href = "../Info.html")}
                >
                  <ArrowRightCircle />
                  Database
                </button>
              </div>
            </div>
            <div className="w-auto text-center bg-gree-500/20 bg-green-500/20">
              <a className="block px-4 py-4">3</a>
              <a className="block px-4 py-4">4</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
