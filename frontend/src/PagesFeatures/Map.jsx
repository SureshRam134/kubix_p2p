import { useNavigate } from "react-router-dom";
import { Navbar } from "../PageNavBar/NavBar";
import { FiArrowRight, FiShield, FiZap, FiUsers, FiDollarSign, FiMapPin, FiNavigation } from 'react-icons/fi';

export const Map = () => {

  //navigate to map filter page
  const navigate = useNavigate()


  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Dark Glass Morphism */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        {/* ... existing hero section code ... */}
      </section>

      {/* Map Section - Real-time User Tracking */}
      <section className="py-24 sm:py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
              Live Tracking
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Find exchangers near you
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our interactive map shows verified users in your area ready to exchange
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Map Container */}
            <div className="relative h-96 bg-gradient-to-br from-blue-50 to-indigo-50">
              {/* Map Background with Grid Overlay */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
              
              {/* Grid Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#3b82f620_1px,transparent_1px)] [background-size:20px_20px]"></div>
              
              {/* User Location Pins */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full p-8">
                {/* Current User Location */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-blue-400 rounded-full animate-ping opacity-20"></div>
                    <div className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border-2 border-blue-500">
                      <FiNavigation className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </div>
                
                {/* Nearby Users */}
                <div className="absolute top-1/4 left-1/3">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-green-400 rounded-full animate-pulse opacity-10"></div>
                    <div className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md border-2 border-green-500 cursor-pointer">
                      <FiMapPin className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-white p-3 rounded-lg shadow-lg border border-gray-200 w-48 z-10">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <p className="font-medium text-gray-900">Sarah M.</p>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">0.8 miles away</p>
                      <p className="text-sm text-gray-700 mt-2">Looking to exchange $200</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-2/3 left-2/5">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-green-400 rounded-full animate-pulse opacity-10"></div>
                    <div className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md border-2 border-green-500 cursor-pointer">
                      <FiMapPin className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-white p-3 rounded-lg shadow-lg border border-gray-200 w-48 z-10">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <p className="font-medium text-gray-900">Michael T.</p>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">1.2 miles away</p>
                      <p className="text-sm text-gray-700 mt-2">Looking to exchange $150</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/3 right-1/4">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-green-400 rounded-full animate-pulse opacity-10"></div>
                    <div className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md border-2 border-green-500 cursor-pointer">
                      <FiMapPin className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-white p-3 rounded-lg shadow-lg border border-gray-200 w-48 z-10">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <p className="font-medium text-gray-900">Jessica L.</p>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">0.5 miles away</p>
                      <p className="text-sm text-gray-700 mt-2">Looking to exchange $300</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Controls */}
              <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
                <button className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-colors">
                  <FiNavigation className="h-5 w-5 text-gray-700" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-colors">
                  <FiZap className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </div>
            
            {/* Map Legend and Stats */}
            <div className="p-6 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Your location</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Available exchangers</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">12</p>
                    <p className="text-sm text-gray-500">Nearby users</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">5</p>
                    <p className="text-sm text-gray-500">Active today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center"
          onClick={() => {setTimeout(() => {navigate('/user_Location')},800)}} >
            <p className="text-gray-600">
              Your location is only shared when you actively looking for an exchange
            </p>
            <button className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <FiNavigation className="mr-2 h-5 w-5" />
              Find exchangers near me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
