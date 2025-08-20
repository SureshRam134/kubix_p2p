import React, { useState } from 'react';
import { 
  FiHome, // Added Home icon
  FiRefreshCw, 
  FiDollarSign, 
  FiCreditCard, 
  FiMapPin, 
  FiActivity,
  FiSearch,
  FiUser,
  FiChevronDown,
  FiMenu,
  FiX
} from 'react-icons/fi';

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home'); // Default to Home
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white/90 backdrop-blur-xl border-b border-gray-100/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center gap-4">
            
            {/* Mobile Menu Button - Left Side */}
            <div className="flex lg:hidden items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-500 hover:text-indigo-600"
              >
                {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
              </button>
            </div>

            {/* Premium Branding - Center on Mobile */}
            <div className="flex items-center justify-center lg:justify-start flex-1 lg:flex-none">
              <div className="flex items-center space-x-3">
                <div className="relative hidden sm:block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-indigo-600 to-purple-700 p-2 rounded-lg shadow-lg">
                    <FiRefreshCw className="h-5 w-5 text-white" />
                  </div>
                </div>
                <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                  kubix<span className="font-light">_p2p</span>
                </span>
              </div>
            </div>

            {/* Desktop Navigation - Hidden on Mobile */}
            <div className="hidden lg:flex items-center h-full flex-1 justify-center">
              <div className="flex items-center h-full space-x-1 max-w-2xl mx-auto">
                <NavItem 
                  icon={<FiHome />} 
                  label="Home" 
                  active={activeTab === 'Home'}
                  onClick={() => setActiveTab('Home')}
                />
                <NavItem 
                  icon={<FiRefreshCw />} 
                  label="Exchange" 
                  active={activeTab === 'Exchange'}
                  onClick={() => setActiveTab('Exchange')}
                />
                <NavItem 
                  icon={<FiDollarSign />} 
                  label="Cash" 
                  active={activeTab === 'Cash'}
                  onClick={() => setActiveTab('Cash')}
                />
                <NavItem 
                  icon={<FiCreditCard />} 
                  label="Wallet" 
                  active={activeTab === 'Wallet'}
                  onClick={() => setActiveTab('Wallet')}
                />
                <NavItem 
                  icon={<FiMapPin />} 
                  label="Locations" 
                  active={activeTab === 'Locations'}
                  onClick={() => setActiveTab('Locations')}
                />
                <NavItem 
                  icon={<FiActivity />} 
                  label="Activity" 
                  active={activeTab === 'Activity'}
                  onClick={() => setActiveTab('Activity')}
                />
              </div>
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center gap-4">
              {/* Mobile Search Button - Hidden on Desktop */}
              <button 
                className="lg:hidden p-2 text-gray-500 hover:text-indigo-600"
                onClick={() => setSearchExpanded(!searchExpanded)}
              >
                <FiSearch className="h-5 w-5" />
              </button>

              {/* Desktop Search - Hidden on Mobile */}
              <div className={`hidden lg:block relative transition-all duration-300 ${searchExpanded ? 'w-72' : 'w-12'}`}>
                <button 
                  className={`absolute inset-y-0 left-0 flex items-center justify-center w-12 ${searchExpanded ? 'text-indigo-600' : 'text-gray-500'}`}
                  onClick={() => setSearchExpanded(!searchExpanded)}
                >
                  <FiSearch className="h-5 w-5" />
                </button>
                <input
                  type="text"
                  className={`w-full h-10 pl-10 pr-4 bg-gray-50/70 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:bg-white transition-all ${searchExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  placeholder="Search..."
                />
              </div>
              
              <div className="flex items-center space-x-2 group cursor-pointer">
                <div className="relative">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center">
                    <FiUser className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-indigo-500 rounded-full border-2 border-white flex items-center justify-center">
                    <FiChevronDown className="h-2 w-2 sm:h-3 sm:w-3 text-white" />
                  </div>
                </div>
                <span className="hidden xl:inline text-sm font-medium text-gray-700 group-hover:text-indigo-600">
                  Account
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Search Expanded - Only on Mobile */}
          {searchExpanded && (
            <div className="lg:hidden py-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:bg-white"
                  placeholder="Search exchanges..."
                  autoFocus
                />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Content */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <MobileNavItem 
                icon={<FiHome />} 
                label="Home" 
                active={activeTab === 'Home'}
                onClick={() => {
                  setActiveTab('Home');
                  setMobileMenuOpen(false);
                }}
              />
              <MobileNavItem 
                icon={<FiRefreshCw />} 
                label="Exchange" 
                active={activeTab === 'Exchange'}
                onClick={() => {
                  setActiveTab('Exchange');
                  setMobileMenuOpen(false);
                }}
              />
              <MobileNavItem 
                icon={<FiDollarSign />} 
                label="Cash" 
                active={activeTab === 'Cash'}
                onClick={() => {
                  setActiveTab('Cash');
                  setMobileMenuOpen(false);
                }}
              />
              <MobileNavItem 
                icon={<FiCreditCard />} 
                label="Wallet" 
                active={activeTab === 'Wallet'}
                onClick={() => {
                  setActiveTab('Wallet');
                  setMobileMenuOpen(false);
                }}
              />
              <MobileNavItem 
                icon={<FiMapPin />} 
                label="Locations" 
                active={activeTab === 'Locations'}
                onClick={() => {
                  setActiveTab('Locations');
                  setMobileMenuOpen(false);
                }}
              />
              <MobileNavItem 
                icon={<FiActivity />} 
                label="Activity" 
                active={activeTab === 'Activity'}
                onClick={() => {
                  setActiveTab('Activity');
                  setMobileMenuOpen(false);
                }}
              />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

// Desktop NavItem Component
const NavItem = ({ icon, label, active, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`relative h-full px-4 sm:px-6 flex flex-col items-center justify-center group transition-all duration-200 ${active ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-800'}`}
    >
      <div className="flex flex-col items-center">
        <span className={`text-lg sm:text-xl transition-transform duration-200 ${active ? 'transform -translate-y-1' : ''}`}>
          {icon}
        </span>
        <span className="text-xs font-medium mt-1 sm:mt-1.5">{label}</span>
      </div>
      
      {active && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 sm:w-6 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-full"></div>
      )}
      {!active && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-full group-hover:w-4 sm:group-hover:w-6 transition-all duration-300"></div>
      )}
    </button>
  );
};

// Mobile NavItem Component
const MobileNavItem = ({ icon, label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center px-4 py-3 text-base font-medium rounded-lg ${active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'}`}
    >
      <span className="mr-3 text-lg">{icon}</span>
      {label}
      {active && (
        <span className="ml-auto h-2 w-2 bg-indigo-600 rounded-full"></span>
      )}
    </button>
  );
};