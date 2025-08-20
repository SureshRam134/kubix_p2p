import { useState } from 'react';
import { FiArrowLeft, FiCheckCircle, FiXCircle, FiClock, FiUser, FiShield, FiDollarSign } from 'react-icons/fi';

export const MeetingFlow = () => {
  const [currentScreen, setCurrentScreen] = useState('sender');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-md">
        
        {/* Header with Progress Indicator */}
        <div className="bg-indigo-700 text-white p-5">
          <div className="flex items-center justify-between mb-4">
            {currentScreen !== 'sender' && (
              <button 
                onClick={() => setCurrentScreen('sender')}
                className="p-2 rounded-full hover:bg-indigo-600 transition-colors"
              >
                <FiArrowLeft className="h-5 w-5" />
              </button>
            )}
            <h1 className="text-xl font-bold text-center flex-1">
              Secure Meeting Process
            </h1>
            {currentScreen !== 'sender' && <div className="w-9" />}
          </div>
          
          <div className="flex items-center justify-center space-x-4 mb-2">
            <div className={`flex flex-col items-center ${currentScreen === 'sender' ? 'text-white' : 'text-indigo-200'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentScreen === 'sender' ? 'bg-white text-indigo-700' : 'bg-indigo-500'}`}>
                1
              </div>
              <span className="text-xs mt-1">Sender</span>
            </div>
            
            <div className="h-1 w-12 bg-indigo-400 rounded"></div>
            
            <div className={`flex flex-col items-center ${currentScreen === 'receiver' ? 'text-white' : 'text-indigo-200'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentScreen === 'receiver' ? 'bg-white text-indigo-700' : 'bg-indigo-500'}`}>
                2
              </div>
              <span className="text-xs mt-1">Receiver</span>
            </div>
            
            <div className="h-1 w-12 bg-indigo-400 rounded"></div>
            
            <div className={`flex flex-col items-center ${currentScreen === 'complete' ? 'text-white' : 'text-indigo-200'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentScreen === 'complete' ? 'bg-white text-indigo-700' : 'bg-indigo-500'}`}>
                3
              </div>
              <span className="text-xs mt-1">Complete</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {currentScreen === 'sender' && (
            <SenderScreen onNext={() => setCurrentScreen('receiver')} />
          )}
          
          {currentScreen === 'receiver' && (
            <ReceiverScreen onNext={() => setCurrentScreen('complete')} />
          )}
          
          {currentScreen === 'complete' && (
            <CompletionScreen />
          )}
        </div>
      </div>
    </div>
  );
};

// Sender Screen Component
const SenderScreen = ({ onNext }) => (
  <div className="space-y-6">
    <div className="text-center mb-2">
      <h2 className="text-2xl font-bold text-gray-800">Sender Verification</h2>
      <p className="text-gray-600 mt-1">Enter your OTP to confirm the meeting</p>
    </div>

    {/* Meeting Details Card */}
    <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl">
      <div className="flex items-center text-blue-700 mb-2">
        <FiUser className="mr-2" />
        <span className="font-medium">Receiver Information</span>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-gray-600">Name</p>
          <p className="font-medium">John Doe</p>
        </div>
        <div>
          <p className="text-gray-600">Meeting ID</p>
          <p className="font-medium">#MTG-789456</p>
        </div>
        <div>
          <p className="text-gray-600">Amount</p>
          <p className="font-medium text-green-600">$250.00</p>
        </div>
        <div>
          <p className="text-gray-600">Location</p>
          <p className="font-medium">Central Cafe</p>
        </div>
      </div>
    </div>

    {/* OTP Input */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Enter Your OTP Code
      </label>
      <div className="flex space-x-3 justify-center">
        {[1, 2, 3, 4].map((item) => (
          <input
            key={item}
            type="text"
            maxLength="1"
            className="w-16 h-16 text-center text-2xl font-bold border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
          />
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-3 text-center">
        Enter the 4-digit code sent to your mobile device
      </p>
    </div>

    {/* Timer */}
    <div className="flex items-center justify-center text-orange-600 bg-orange-50 p-3 rounded-lg">
      <FiClock className="mr-2" />
      <span className="font-medium">04:32 remaining</span>
    </div>

    {/* Action Buttons */}
    <div className="flex space-x-3 pt-2">
      <button className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center">
        <FiCheckCircle className="mr-2" />
        Verify & Continue
      </button>

      {/* <button className="px-4 bg-red-100 text-red-700 rounded-xl hover:bg-red-200 transition-colors flex items-center justify-center">
        <FiXCircle className="mr-2" />
        Report Issue
      </button> */}
      <button 
        onClick={onNext}
        className="px-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
      >
        Skip
      </button>
    </div>

    {/* Safety Notice */}
    <div className="bg-gray-100 p-3 rounded-lg flex items-start">
      <FiShield className="text-indigo-600 mt-0.5 mr-2 flex-shrink-0" />
      <p className="text-xs text-gray-600">
        For your security, never share your OTP with anyone. Our team will never ask for this code.
      </p>
    </div>
  </div>
);

// Receiver Screen Component
const ReceiverScreen = ({ onNext }) => (
  <div className="space-y-6">
    <div className="text-center mb-2">
      <h2 className="text-2xl font-bold text-gray-800">Receiver Verification</h2>
      <p className="text-gray-600 mt-1">Confirm the meeting details and enter your OTP</p>
    </div>

    {/* Meeting Details Card */}
    <div className="bg-green-50 border border-green-100 p-4 rounded-xl">
      <div className="flex items-center text-green-700 mb-2">
        <FiUser className="mr-2" />
        <span className="font-medium">Sender Information</span>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-gray-600">Name</p>
          <p className="font-medium">Alice Smith</p>
        </div>
        <div>
          <p className="text-gray-600">Meeting ID</p>
          <p className="font-medium">#MTG-789456</p>
        </div>
        <div>
          <p className="text-gray-600">Amount</p>
          <p className="font-medium text-green-600">$250.00</p>
        </div>
        <div>
          <p className="text-gray-600">Location</p>
          <p className="font-medium">Central Cafe</p>
        </div>
      </div>
    </div>

    {/* OTP Input */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Enter Your OTP Code
      </label>
      <div className="flex space-x-3 justify-center">
        {[1, 2, 3, 4].map((item) => (
          <input
            key={item}
            type="text"
            maxLength="1"
            className="w-16 h-16 text-center text-2xl font-bold border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
          />
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-3 text-center">
        Enter the 4-digit code sent to your mobile device
      </p>
    </div>

    {/* Action Buttons */}
    <div className="flex space-x-3 pt-2">
      <button className="flex-1 bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition-colors flex items-center justify-center">
        <FiCheckCircle className="mr-2" />
         Verify & Continue
      </button>
      {/* <button className="px-4 bg-red-100 text-red-700 rounded-xl hover:bg-red-200 transition-colors flex items-center justify-center">
        <FiXCircle className="mr-2" />
        Report Issue
      </button> */}
      <button 
        onClick={onNext}
        className="px-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
      >
        Skip
      </button>
    </div>

    {/* Additional Options */}
    <div className="bg-gray-100 p-4 rounded-xl">
      <h3 className="font-medium text-gray-700 mb-2">Meeting Options</h3>
      <div className="space-y-2">
        <label className="flex items-center">
          <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
          <span className="ml-2 text-sm text-gray-700">Extend meeting time by 15 minutes</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
          <span className="ml-2 text-sm text-gray-700">Request additional verification</span>
        </label>
      </div>
    </div>
  </div>
);

// Completion Screen Component
const CompletionScreen = () => (
  <div className="text-center py-4">
    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
      <FiCheckCircle className="h-10 w-10 text-green-600" />
    </div>
    
    <h2 className="text-2xl font-bold text-gray-800 mb-2">Meeting Completed Successfully!</h2>
    <p className="text-gray-600 mb-6">
      Both participants have successfully verified the meeting using OTP authentication.
    </p>
    
    <div className="bg-gray-100 p-4 rounded-xl mb-6">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="text-left">
          <p className="text-gray-500">Meeting ID</p>
          <p className="font-medium">#MTG-789456</p>
        </div>
        <div className="text-left">
          <p className="text-gray-500">Amount</p>
          <p className="font-medium text-green-600">$250.00</p>
        </div>
        <div className="text-left">
          <p className="text-gray-500">Date & Time</p>
          <p className="font-medium">Aug 28, 2023 at 3:00 PM</p>
        </div>
        <div className="text-left">
          <p className="text-gray-500">Duration</p>
          <p className="font-medium">18 minutes</p>
        </div>
      </div>
    </div>
    
    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-6">
      <div className="flex items-center text-blue-700 mb-2">
        <FiDollarSign className="mr-2" />
        <span className="font-medium">Transaction Summary</span>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Amount exchanged</span>
          <span className="font-medium">$250.00</span>
        </div>
        <div className="flex justify-between">
          <span>Service fee</span>
          <span className="font-medium">$2.50</span>
        </div>
        <div className="flex justify-between border-t border-blue-100 pt-2 mt-2">
          <span className="font-medium">Total</span>
          <span className="font-medium text-green-600">$247.50</span>
        </div>
      </div>
    </div>
    
    <div className='flex gap-6'>
        <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors">
        Send To Mail
        </button>
        <button className="w-full bg-red-600 text-white py-3 rounded-xl font-medium hover:bg-red-700 transition-colors">
        Cancel
        </button>
    </div>
    
    <p className="text-xs text-gray-500 mt-4">
      Thank you for using our secure meeting system!
    </p>
  </div>
);