import React from "react";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Text */}
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-4">We are Now online 24/7</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Consult with your doctors
            <br />
            with our App Anytime!
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor Laborum mag!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          <button className="bg-indigo-900 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-indigo-800 transition">
            Download Now
            <ArrowRight size={20} />
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-50 transition">
            <Play size={20} />
            Watch Demo
          </button>
        </div>

        {/* Reviews */}
        <div className="flex justify-center items-center gap-3">
          <div className="flex -space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1 text-yellow-400 text-sm">
              ★★★★★
              <span className="text-gray-600 text-xs ml-1">(18+ reviews)</span>
            </div>
            <p className="text-gray-500 text-xs">Our latest Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
