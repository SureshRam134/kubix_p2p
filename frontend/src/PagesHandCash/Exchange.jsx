import { useState } from 'react';
import { FiArrowLeft, FiUser, FiDollarSign, FiClock, FiCheck, FiMessageSquare, FiShield, FiMapPin, FiStar } from 'react-icons/fi';

export const Exchange = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [selectedExchange, setSelectedExchange] = useState(null);

  // Sample data
  const exchanges = {
    active: [
      {
        id: 1,
        user: {
          name: "Sarah M.",
          rating: 4.8,
          completedExchanges: 24,
          profileImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
        },
        amount: "$200",
        status: "Meeting scheduled",
        meetingTime: "Today, 3:00 PM",
        meetingLocation: "Central Park Cafe",
        timeRemaining: "2 hours 15 min"
      },
      {
        id: 2,
        user: {
          name: "Michael T.",
          rating: 4.5,
          completedExchanges: 17,
          profileImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        amount: "$150",
        status: "Awaiting confirmation",
        meetingTime: "Tomorrow, 11:00 AM",
        meetingLocation: "City Library",
        timeRemaining: "23 hours"
      }
    ],
    pending: [
      {
        id: 3,
        user: {
          name: "Jessica L.",
          rating: 4.9,
          completedExchanges: 32,
          profileImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
        },
        amount: "$300",
        status: "Request sent",
        timeSent: "2 hours ago"
      }
    ],
    completed: [
      {
        id: 4,
        user: {
          name: "David K.",
          rating: 4.7,
          completedExchanges: 19,
          profileImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
        },
        amount: "$250",
        status: "Completed",
        completionDate: "Yesterday",
        rating: 5
      },
      {
        id: 5,
        user: {
          name: "Alex J.",
          rating: 4.6,
          completedExchanges: 12,
          profileImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        amount: "$180",
        status: "Completed",
        completionDate: "3 days ago",
        rating: 4
      }
    ]
  };

  const ExchangeDetail = ({ exchange, onBack }) => {
    if (!exchange) return null;
    
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <button 
          onClick={onBack}
          className="flex items-center text-indigo-600 hover:text-indigo-800 mb-4"
        >
          <FiArrowLeft className="mr-2" /> Back to exchanges
        </button>
        
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Exchange Details</h2>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            exchange.status === "Completed" ? "bg-green-100 text-green-800" :
            exchange.status === "Meeting scheduled" ? "bg-blue-100 text-blue-800" :
            "bg-yellow-100 text-yellow-800"
          }`}>
            {exchange.status}
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-medium text-gray-700 mb-2">Amount</h3>
            <p className="text-2xl font-bold text-indigo-600">{exchange.amount}</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-medium text-gray-700 mb-2">Exchange Partner</h3>
            <div className="flex items-center">
              <img 
                src={exchange.user.profileImg} 
                alt={exchange.user.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-medium">{exchange.user.name}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <FiStar className="text-yellow-400 fill-yellow-400 mr-1" />
                  {exchange.user.rating} • {exchange.user.completedExchanges} exchanges
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-medium text-gray-700 mb-2">Time</h3>
            <div className="flex items-center">
              <FiClock className="text-gray-500 mr-2" />
              <span>{exchange.meetingTime || exchange.completionDate || exchange.timeSent}</span>
            </div>
          </div>
        </div>
        
        {exchange.meetingLocation && (
          <div className="mb-6">
            <h3 className="font-medium text-gray-700 mb-3">Meeting Location</h3>
            <div className="flex items-center p-4 bg-blue-50 rounded-xl border border-blue-200">
              <FiMapPin className="text-blue-600 mr-3" />
              <span>{exchange.meetingLocation}</span>
            </div>
          </div>
        )}
        
        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-medium text-gray-700 mb-4">Actions</h3>
          <div className="flex flex-wrap gap-3">
            {exchange.status === "Awaiting confirmation" && (
              <>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center">
                  <FiCheck className="mr-2" /> Confirm Meeting
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  Reschedule
                </button>
              </>
            )}
            
            {exchange.status === "Meeting scheduled" && (
              <>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center">
                  <FiCheck className="mr-2" /> Mark as Complete
                </button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center">
                  <FiMessageSquare className="mr-2" /> Message
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  Cancel Exchange
                </button>
              </>
            )}
            
            {exchange.status === "Request sent" && (
              <div className="text-gray-600">
                <p>Waiting for {exchange.user.name} to accept your exchange request.</p>
              </div>
            )}
            
            {exchange.status === "Completed" && (
              <div className="w-full">
                <h4 className="font-medium mb-2">Your rating:</h4>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={`h-5 w-5 ${i < exchange.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({exchange.rating}.0)</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  if (selectedExchange) {
    return <ExchangeDetail exchange={selectedExchange} onBack={() => setSelectedExchange(null)} />;
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">My Exchanges</h1>
        <div className="flex items-center text-sm text-gray-500">
          <FiShield className="text-green-600 mr-1" />
          <span>All exchanges are secured</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {['active', 'pending', 'completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-1 text-sm font-medium border-b-2 whitespace-nowrap ${
                activeTab === tab
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab === 'active' && 'Active Exchanges'}
              {tab === 'pending' && 'Pending Requests'}
              {tab === 'completed' && 'Completed'}
              <span className="ml-2 bg-gray-200 text-gray-700 py-0.5 px-2 rounded-full text-xs">
                {exchanges[tab].length}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Exchange List */}
      <div className="space-y-4">
        {exchanges[activeTab].length === 0 ? (
          <div className="text-center py-12">
            <FiDollarSign className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">No {activeTab} exchanges</h3>
            <p className="mt-2 text-gray-500">
              {activeTab === 'active' && "You don't have any active exchanges right now."}
              {activeTab === 'pending' && "You don't have any pending requests."}
              {activeTab === 'completed' && "You haven't completed any exchanges yet."}
            </p>
          </div>
        ) : (
          exchanges[activeTab].map((exchange) => (
            <div 
              key={exchange.id} 
              className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-indigo-300 transition-colors cursor-pointer"
              onClick={() => setSelectedExchange(exchange)}
            >
              <div className="flex items-center mb-4 md:mb-0">
                <img 
                  src={exchange.user.profileImg} 
                  alt={exchange.user.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{exchange.user.name}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <FiStar className="text-yellow-400 fill-yellow-400 mr-1" />
                    {exchange.user.rating} • {exchange.user.completedExchanges} exchanges
                  </div>
                </div>
              </div>
              
              <div className="flex-1 md:mx-4 mb-4 md:mb-0">
                <div className="text-lg font-bold text-indigo-600">{exchange.amount}</div>
                <div className="flex items-center text-sm text-gray-500">
                  <FiClock className="mr-1" />
                  {exchange.meetingTime || exchange.completionDate || exchange.timeSent}
                </div>
              </div>
              
              <div className="flex items-center justify-between md:block">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  exchange.status === "Completed" ? "bg-green-100 text-green-800" :
                  exchange.status === "Meeting scheduled" ? "bg-blue-100 text-blue-800" :
                  "bg-yellow-100 text-yellow-800"
                }`}>
                  {exchange.status}
                </span>
                {exchange.timeRemaining && (
                  <div className="text-sm text-gray-500 md:mt-2">
                    {exchange.timeRemaining} left
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Stats Summary */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="font-medium text-gray-700 mb-4">Exchange Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-blue-800">{exchanges.active.length}</div>
            <div className="text-sm text-blue-600">Active</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-yellow-800">{exchanges.pending.length}</div>
            <div className="text-sm text-yellow-600">Pending</div>
          </div>
          <div className="bg-green-50 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-green-800">{exchanges.completed.length}</div>
            <div className="text-sm text-green-600">Completed</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-purple-800">${exchanges.completed.reduce((sum, ex) => sum + parseInt(ex.amount.replace('$', '')), 0)}</div>
            <div className="text-sm text-purple-600">Total Volume</div>
          </div>
        </div>
      </div>
    </div>
  );
};