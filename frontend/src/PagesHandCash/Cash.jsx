import { useState } from "react";
import { Navbar } from "../PageNavBar/NavBar";

export const Cash = ({ onClose }) => {


// handle add details Button control
    const[addToggle, setAddToggle] = useState(false)
    const handleDetailsButton =() => {
        setAddToggle(!addToggle)
    }

  const [senderDetails, setSenderDetails] = useState({
    date: '',
    name: '',
    email: '',
    phone: '',
    transaction_method: '',
    current_hand_in_cash: '',
    location: '',
  });

  const [receiverDetails, setReceiverDetails] = useState({
    date: '',
    name: '',
    email: '',
    phone: '',
    current_hand_in_cash: '',
    transaction_method: '',
    location: '',
  });

  const [toggleAction, setToggleAction] = useState(true);

  const handleSenderDetails = (e) => {
    const { name, value } = e.target;
    setSenderDetails({ ...senderDetails, [name]: value });
  };

  const handleReceiverDetails = (e) => {
    const { name, value } = e.target;
    setReceiverDetails({ ...receiverDetails, [name]: value });
  };

  const handleToggle = (e) => {
    const name = e.target.dataset.role;
    setToggleAction(name === 'sender');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 fixed inset-0 z-50 overflow-y-auto">
        {!addToggle?<Navbar />:null}
       {!addToggle?
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">      
      {/* New Minimalist Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-indigo-50 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Direct Cash Exchange Details
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          Send and receive cash peer-to-peer with complete control and transparency
        </p>
      </div>

      {/* Dual Action Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Send Money Card */}
        <div 
          className="border-2 border-dashed border-gray-200 rounded-2xl p-6 hover:border-indigo-300 transition-all cursor-pointer"
          onClick={() => { setToggleAction(true); handleDetailsButton(); }}
        >
          <div className="flex items-start mb-4">
            <div className="p-2.5 bg-indigo-100 rounded-lg mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Sender Details</h2>
              <p className="text-gray-500 mt-1">Initiate a secure transfer to another person</p>
            </div>
          </div>
          <div className="mt-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 -mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>

        {/* Receive Money Card */}
        <div 
          className="border-2 border-dashed border-gray-200 rounded-2xl p-6 hover:border-green-300 transition-all cursor-pointer"
          onClick={() => { setToggleAction(false); handleDetailsButton(); }}
        >
          <div className="flex items-start mb-4">
            <div className="p-2.5 bg-green-100 rounded-lg mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Receiver Details</h2>
              <p className="text-gray-500 mt-1">Set up details to accept incoming transfers</p>
            </div>
          </div>
          <div className="mt-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 -mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Value Propositions */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-12">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Why use direct exchange?</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: '💸', text: 'No processing fees' },
            { icon: '⚡', text: 'Instant settlements' },
            { icon: '🔐', text: 'End-to-end control' },
            { icon: '🌍', text: 'Any currency' },
            { icon: '📱', text: 'Digital or cash' },
            { icon: '🔄', text: 'Flexible terms' }
          ].map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="text-2xl mr-3">{item.icon}</span>
              <span className="text-gray-600">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features in Tabs */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            {['Security', 'Convenience', 'Global'].map((tab) => (
              <button
                key={tab}
                className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm"
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Cash Delivery</h4>
              <p className="text-gray-500 text-sm">
                Verified providers can deliver cash directly to your specified location with GPS tracking.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Multi-Currency</h4>
              <p className="text-gray-500 text-sm">
                Exchange between currencies at real market rates without hidden fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>:
     <div className="max-w-5xl mx-auto px-3 py-8 sm:px-3 lg:px-8 relative">
        {/* Header in single line */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Cash Exchange
            </span> Network
          </h1>
          
          <div className="flex items-center space-x-4">
            <div className="inline-flex bg-white p-1 rounded-xl shadow-sm border border-gray-200">
              <button
                data-role="sender"
                onClick={handleToggle}
                className={`px-4 py-2 md:px-6 md:py-2 rounded-lg font-medium text-xs md:text-sm transition-all duration-300 ${
                  toggleAction 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Sender
              </button>
              <button
                data-role="receiver"
                onClick={handleToggle}
                className={`px-4 py-2 md:px-6 md:py-2 rounded-lg font-medium text-xs md:text-sm transition-all duration-300 ${
                  !toggleAction 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Receiver
              </button>
            </div>

            <button 
              onClick={onClose}
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Keep the rest of your form content exactly as is */}
        {toggleAction ? (
          /* Sender Form */
          <div className="backdrop-blur-sm bg-white/80 rounded-2xl shadow-xl overflow-hidden border border-white/20">
            {/* ... existing sender form content ... */}
          </div>
        ) : (
          /* Receiver Form */
          <div className="backdrop-blur-sm bg-white/80 rounded-2xl shadow-xl overflow-hidden border border-white/20">
            {/* ... existing receiver form content ... */}
          </div>
        )}

        {toggleAction ? (
          /* Sender Form - Glass Morphism Design */
          <div className="backdrop-blur-sm bg-white/80 rounded-2xl shadow-xl overflow-hidden border border-white/20">
            <div className="p-6">
              <div className="mb-4">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-100 to-purple-100 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Sender Details</h2>
                    <p className="text-gray-500">Initiate cash transfer to receiver</p>
                  </div>
                </div>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Date</label>
                    <input
                      type="date"
                      name="date"
                      onChange={handleSenderDetails}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={senderDetails.name}
                      placeholder="John Doe"
                      onChange={handleSenderDetails}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={senderDetails.email}
                      placeholder="john@example.com"
                      onChange={handleSenderDetails}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={senderDetails.phone}
                      placeholder="+1 (555) 123-4567"
                      onChange={handleSenderDetails}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Amount</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        name="current_hand_in_cash"
                        value={senderDetails.current_hand_in_cash}
                        placeholder="500.00"
                        onChange={handleSenderDetails}
                        className="w-full pl-10 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                    <select
                      name="transaction_method"
                      value={senderDetails.transaction_method}
                      onChange={handleSenderDetails}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none transition-all"
                    >
                      <option value="">Select method</option>
                      <option value="gpay">Google Pay</option>
                      <option value="phonepay">PhonePe</option>
                      <option value="paytm">Paytm</option>
                      <option value="cash">Cash</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Meeting Location</label>
                  <input
                    type="text"
                    name="location"
                    value={senderDetails.location}
                    placeholder="Central Park, New York"
                    onChange={handleSenderDetails}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  />
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Initiate Cash Transfer
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          /* Receiver Form - Glass Morphism Design */
          <div className="backdrop-blur-sm bg-white/80 rounded-2xl shadow-xl overflow-hidden border border-white/20">
            <div className="p-6">
              <div className="mb-4">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-100 to-teal-100 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Receiver Details</h2>
                    <p className="text-gray-500">Receive cash from sender</p>
                  </div>
                </div>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Date</label>
                    <input
                      type="date"
                      name="date"
                      onChange={handleReceiverDetails}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={receiverDetails.name}
                      placeholder="Jane Smith"
                      onChange={handleReceiverDetails}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={receiverDetails.email}
                      placeholder="jane@example.com"
                      onChange={handleReceiverDetails}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={receiverDetails.phone}
                      placeholder="+1 (555) 987-6543"
                      onChange={handleReceiverDetails}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Expected Amount</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        name="current_hand_in_cash"
                        value={receiverDetails.current_hand_in_cash}
                        placeholder="500.00"
                        onChange={handleReceiverDetails}
                        className="w-full pl-10 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Preferred Payment</label>
                    <select
                      name="transaction_method"
                      value={receiverDetails.transaction_method}
                      onChange={handleReceiverDetails}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none transition-all"
                    >
                      <option value="">Select method</option>
                      <option value="gpay">Google Pay</option>
                      <option value="phonepay">PhonePe</option>
                      <option value="paytm">Paytm</option>
                      <option value="cash">Cash</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Meeting Location</label>
                  <input
                    type="text"
                    name="location"
                    value={receiverDetails.location}
                    placeholder="Coffee Shop, 5th Avenue"
                    onChange={handleReceiverDetails}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  />
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Confirm Receipt Details
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>}
    </div>
  );
};