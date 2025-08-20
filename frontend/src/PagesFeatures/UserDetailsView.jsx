import { useState } from 'react';
import { FiX, FiUser, FiDollarSign, FiMapPin, FiClock, FiStar, FiCheckCircle, FiMessageSquare, FiSend } from 'react-icons/fi';

export const UserDetailsView = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showRequestOptions, setShowRequestOptions] = useState(false);

  // Sample user data
  const users = [
    {
      id: 1,
      name: "Michael T.",
      email: "michael@example.com",
      amount: "$150",
      rating: 4.5,
      completedExchanges: 17,
      status: "Active",
      joinDate: "2023-05-15",
      lastActive: "2 hours ago",
      verification: "Verified",
      profileImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      location: "City Library",
      meetingTime: "Tomorrow, 11:00 AM",
      distance: "1.2 miles",
      about: "I'm a frequent traveler who needs to exchange currency regularly. Prefer public places for meetings."
    },
    {
      id: 2,
      name: "David K.",
      email: "david@example.com",
      amount: "$250",
      rating: 4.7,
      completedExchanges: 19,
      status: "Active",
      joinDate: "2023-03-22",
      lastActive: "5 hours ago",
      verification: "Verified",
      profileImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      location: "Central Mall",
      meetingTime: "Friday, 1:00 PM",
      distance: "1.8 miles",
      about: "Business professional looking for reliable exchange partners. Available on weekends."
    }
  ];

  // If no user is selected, show the user list
  if (!selectedUser) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Sender Users</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {users.map(user => (
            <div 
              key={user.id} 
              className="bg-white p-4 rounded-xl border border-gray-200 hover:border-indigo-300 transition-colors cursor-pointer"
              onClick={() => setSelectedUser(user)}
            >
              <div className="flex items-center">
                <img 
                  src={user.profileImg} 
                  alt={user.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 truncate">{user.name}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1">{user.rating}</span>
                    <span className="mx-2">•</span>
                    <span>{user.completedExchanges} exchanges</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-indigo-600">{user.amount}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  user.status === "Active" ? "bg-green-100 text-green-800" :
                  user.status === "Away" ? "bg-yellow-100 text-yellow-800" :
                  "bg-red-100 text-red-800"
                }`}>
                  {user.status}
                </span>
              </div>
              
              <div className="mt-3 flex items-center text-sm text-gray-500">
                <FiMapPin className="mr-1" />
                <span>{user.distance} away</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // If a user is selected, show their details
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      {/* Header with back button */}
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-2xl font-bold text-gray-900">User Details</h1>
        <button 
          onClick={() => {
            setSelectedUser(null);
            setShowRequestOptions(false);
          }}
          className="text-gray-500 hover:text-gray-700"
        >
          <FiX className="h-5 w-5" />
        </button>
      </div>
      
      {/* User Profile Section */}
      <div className="flex flex-col md:flex-row items-start mb-8">
        <img 
          src={selectedUser.profileImg} 
          alt={selectedUser.name}
          className="w-24 h-24 rounded-full mb-4 md:mb-0 md:mr-6"
        />
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{selectedUser.name}</h2>
              <p className="text-gray-600">{selectedUser.email}</p>
            </div>
            <span className={`mt-2 md:mt-0 px-3 py-1 rounded-full text-sm font-medium ${
              selectedUser.verification === "Verified" 
                ? "bg-green-100 text-green-800" 
                : "bg-yellow-100 text-yellow-800"
            }`}>
              {selectedUser.verification}
            </span>
          </div>
          
          <div className="flex items-center mt-4">
            <div className="flex items-center mr-4">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 font-medium">{selectedUser.rating}</span>
              <span className="text-gray-500 ml-1">({selectedUser.completedExchanges} exchanges)</span>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              selectedUser.status === "Active" ? "bg-green-100 text-green-800" :
              selectedUser.status === "Away" ? "bg-yellow-100 text-yellow-800" :
              "bg-red-100 text-red-800"
            }`}>
              {selectedUser.status}
            </span>
          </div>
        </div>
      </div>
      
      {/* User Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-4 rounded-xl">
          <div className="flex items-center text-gray-700 mb-2">
            <FiDollarSign className="mr-2 text-indigo-600" />
            <span className="font-medium">Exchange Amount</span>
          </div>
          <p className="text-2xl font-bold text-indigo-600">{selectedUser.amount}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-xl">
          <div className="flex items-center text-gray-700 mb-2">
            <FiMapPin className="mr-2 text-indigo-600" />
            <span className="font-medium">Distance</span>
          </div>
          <p className="text-lg font-medium text-gray-900">{selectedUser.distance}</p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
          <div className="flex items-center text-gray-700 mb-2">
            <FiClock className="mr-2 text-blue-600" />
            <span className="font-medium">Preferred Meeting</span>
          </div>
          <p className="text-gray-900">{selectedUser.meetingTime}</p>
          <p className="text-gray-600">{selectedUser.location}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-xl">
          <div className="flex items-center text-gray-700 mb-2">
            <FiUser className="mr-2 text-indigo-600" />
            <span className="font-medium">Member Since</span>
          </div>
          <p className="text-gray-900">{selectedUser.joinDate}</p>
          <p className="text-sm text-gray-500">Last active: {selectedUser.lastActive}</p>
        </div>
      </div>
      
      {/* About Section */}
      <div className="mb-8">
        <h3 className="font-medium text-gray-700 mb-3">About</h3>
        <p className="text-gray-700 bg-gray-50 p-4 rounded-xl">
          {selectedUser.about}
        </p>
      </div>
      
      {/* Request Action Section */}
      <div className="border-t border-gray-200 pt-6">
        <div className="flex flex-col sm:flex-row gap-3">
          {!showRequestOptions ? (
            <button 
              onClick={() => setShowRequestOptions(true)}
              className="flex-1 flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <FiSend className="mr-2" /> Send Request
            </button>
          ) : (
            <div className="flex-1 flex flex-col sm:flex-row gap-3">
              <button className="flex-1 flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                <FiCheckCircle className="mr-2" /> Confirm Request
              </button>
              <button 
                onClick={() => setShowRequestOptions(false)}
                className="flex-1 flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                <FiX className="mr-2" /> Cancel
              </button>
            </div>
          )}
          
          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center justify-center">
            <FiMessageSquare className="mr-2" /> Message
          </button>
        </div>
        
        {/* Request Options (shown when request button is clicked) */}
        {showRequestOptions && (
          <div className="mt-4 bg-blue-50 p-4 rounded-xl border border-blue-200">
            <h4 className="font-medium text-blue-900 mb-2">Request Options</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meeting Time</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Tomorrow, 11:00 AM</option>
                  <option>Tomorrow, 2:00 PM</option>
                  <option>Tomorrow, 4:30 PM</option>
                  <option>Custom time...</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={selectedUser.amount}
                  readOnly
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
              <textarea 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                rows="2"
                placeholder="Add a message to your request..."
              ></textarea>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};