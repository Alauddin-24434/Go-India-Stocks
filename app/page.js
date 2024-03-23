"use client"
import React, { useEffect } from 'react';
import { initAOS } from '@/utils/aos-init';
import Link from "next/link";
export default function Home() {
  useEffect(() => {
    initAOS();
}, []);
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-8 py-12 bg-gray-100">
      <div  data-aos="zoom-in" className="max-w-6xl mx-auto text-center">
        <img src="https://i.ibb.co/54KtY9S/logo.webp" className="w-24 md:w-32 lg:w-32 mx-auto md:h-20 h-16 lg:h-20" alt="" />
        <h1 className="text-4xl md:text-5xl lg:text-5xl  mb-8"><span className="text-slate-800">GO INDIA </span><span className="text-red-700">STOCKS</span></h1>
  
        <Link href="/dashboard/discussion">
          <span className="bg-gray-800 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Explore Dashboard
          </span>
        </Link>
      </div>
      <div  className="mt-12 max-w-6xl mx-auto">
        <div  className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade-right" className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-600">Go India Stocks is your one-stop destination for all things related to stocks, investing, and financial markets. Whether you are a seasoned investor or just starting out, we provide valuable insights, analysis, and resources to help you make informed decisions and achieve your financial goals.</p>
          </div>
          <div data-aos="fade-left" className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600">Email: contact@example.com</p>
            <p className="text-gray-600">Phone: +1234567890</p>
          </div>
        </div>
      </div>
      
    </main>
  );
}
