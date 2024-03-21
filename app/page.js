import Image from "next/image";
import Facebook from "../public/images/fa.png"
import twitter from "../public/images/tw.png"
import Instagram from "../public/images/ins.png"
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-8 py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to Go India Stocks</h1>
        <p className="text-lg mb-8">Hi, my name is Alauddin. This is a website where you can explore more about stocks and investing.</p>
        <Link href="/dashboard">
          <span className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Explore Dashboard
          </span>
        </Link>
      </div>
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-600">Go India Stocks is your one-stop destination for all things related to stocks, investing, and financial markets. Whether you are a seasoned investor or just starting out, we provide valuable insights, analysis, and resources to help you make informed decisions and achieve your financial goals.</p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600">Email: contact@example.com</p>
            <p className="text-gray-600">Phone: +1234567890</p>
          </div>
        </div>
      </div>
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-blue-500 hover:text-blue-600">
            <Image src={twitter} alt="Twitter" width={24} height={24} />
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-600">
            <Image src={Facebook} alt="Facebook" width={24} height={24} />
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-600">
            <Image src={Instagram} alt="Instagram" width={24} height={24} />
          </a>
        </div>
      </div>
    </main>
  );
}
