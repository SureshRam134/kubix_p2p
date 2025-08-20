import { FiCheck, FiX, FiUser, FiDollarSign, FiClock, FiMapPin, FiMessageSquare, FiArrowLeft, FiShield, FiStar } from 'react-icons/fi';

export const RequestApproval = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button className="flex items-center text-indigo-600 hover:text-indigo-800 mr-4">
            <FiArrowLeft className="mr-2" /> Back
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Exchange Requests</h1>
          <div className="ml-auto flex items-center text-sm text-green-600">
            <FiShield className="mr-1" /> Secured
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">5</div>
            <div className="text-sm text-gray-600">Pending Requests</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-green-600">12</div>
            <div className="text-sm text-gray-600">Approved</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-red-600">3</div>
            <div className="text-sm text-gray-600">Declined</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-purple-600">$1,240</div>
            <div className="text-sm text-gray-600">Total Volume</div>
          </div>
        </div>

        {/* Request Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-8">
          {/* Request Header */}
          <div className="border-b border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Exchange Request</h2>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                Waiting for approval
              </span>
            </div>
            <p className="text-gray-600 mt-2">You have 24 hours to respond to this request</p>
          </div>

          {/* Request Details */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* User Info */}
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-medium text-gray-700 mb-3 flex items-center">
                  <FiUser className="mr-2 text-indigo-600" /> Request From
                </h3>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Michael T.</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <FiStar className="text-yellow-400 fill-yellow-400 mr-1" />
                      4.8 • 17 exchanges
                    </div>
                  </div>
                </div>
              </div>

              {/* Exchange Details */}
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-medium text-gray-700 mb-3 flex items-center">
                  <FiDollarSign className="mr-2 text-indigo-600" /> Exchange Details
                </h3>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-indigo-600">$150</p>
                    <p className="text-sm text-gray-500">Amount</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Cash in person</p>
                    <p className="text-sm text-gray-500">Method</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Meeting Proposal */}
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 mb-6">
              <h3 className="font-medium text-gray-700 mb-3 flex items-center">
                <FiClock className="mr-2 text-blue-600" /> Proposed Meeting
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Tomorrow, 11:00 AM</p>
                  <p className="text-sm text-gray-600">Time</p>
                </div>
                <div>
                  <p className="font-medium flex items-center">
                    <FiMapPin className="mr-2 text-blue-600" /> City Library
                  </p>
                  <p className="text-sm text-gray-600">Location</p>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="bg-gray-50 p-4 rounded-xl mb-6">
              <h3 className="font-medium text-gray-700 mb-2 flex items-center">
                <FiMessageSquare className="mr-2 text-indigo-600" /> Message from Michael
              </h3>
              <p className="text-gray-700">
                "Hi, I need to exchange $150 for an event tomorrow. The library is a safe, public location. Looking forward to hearing from you!"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
              <button className="flex-1 flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <FiCheck className="mr-2" /> Approve Request
              </button>
              <button className="flex-1 flex items-center justify-center px-6 py-3 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
                <FiX className="mr-2" /> Decline Request
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Message
              </button>
            </div>
          </div>
        </div>

        {/* Additional Requests */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900">Other Pending Requests</h2>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              {/* Request 1 */}
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" 
                    alt="User"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Sarah M.</p>
                    <p className="text-sm text-gray-500">$200 • Today, 3:00 PM</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  Waiting
                </span>
              </div>

              {/* Request 2 */}
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" 
                    alt="User"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Jessica L.</p>
                    <p className="text-sm text-gray-500">$300 • Tomorrow, 2:30 PM</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  Waiting
                </span>
              </div>

              {/* Request 3 */}
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" 
                    alt="User"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-medium text-gray-900">David K.</p>
                    <p className="text-sm text-gray-500">$250 • Friday, 1:00 PM</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  Waiting
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button className="text-indigo-600 hover:text-indigo-800">
                View all 5 pending requests
              </button>
            </div>
          </div>
        </div>

        {/* Safety Tips */}
        <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-200">
          <h3 className="font-medium text-blue-900 mb-3 flex items-center">
            <FiShield className="mr-2" /> Safety Tips
          </h3>
          <ul className="text-sm text-blue-800 list-disc list-inside space-y-1">
            <li>Always meet in a public, well-lit location</li>
            <li>Verify the amount before completing the exchange</li>
            <li>Bring a friend if exchanging a large amount</li>
            <li>Trust your instincts - if something feels wrong, cancel the exchange</li>
          </ul>
        </div>
      </div>
    </div>
  );
};