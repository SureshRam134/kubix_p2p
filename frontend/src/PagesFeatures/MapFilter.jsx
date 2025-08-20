// import { useState, useEffect } from 'react';
// import { FiMapPin, FiNavigation, FiSearch, FiFilter, FiX, FiUser, FiDollarSign, FiStar, FiCompass } from 'react-icons/fi';

// export const MapFilter = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showFilters, setShowFilters] = useState(false);
//   const [filters, setFilters] = useState({
//     amount: '',
//     status: 'all',
//     rating: 'all'
//   });
//   const [userLocation, setUserLocation] = useState(null);
//   const [locationError, setLocationError] = useState('');
//   const [isLocating, setIsLocating] = useState(false);

//   // Sample user data
//   const nearbyUsers = [
//     {
//       id: 1,
//       name: "Sarah M.",
//       distance: "0.8 miles",
//       amount: "$200",
//       rating: 4.8,
//       status: "Available now",
//       profileImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
//       coords: { lat: 37.775, lng: -122.418 } // Example coordinates near user
//     },
//     {
//       id: 2,
//       name: "Michael T.",
//       distance: "1.2 miles",
//       amount: "$150",
//       rating: 4.5,
//       status: "Available now",
//       profileImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
//       coords: { lat: 37.772, lng: -122.422 }
//     },
//     {
//       id: 3,
//       name: "Jessica L.",
//       distance: "0.5 miles",
//       amount: "$300",
//       rating: 4.9,
//       status: "Available in 15 min",
//       profileImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
//       coords: { lat: 37.777, lng: -122.417 }
//     },
//     {
//       id: 4,
//       name: "David K.",
//       distance: "1.8 miles",
//       amount: "$250",
//       rating: 4.7,
//       status: "Available now",
//       profileImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
//       coords: { lat: 37.769, lng: -122.415 }
//     }
//   ];

//   // Get user's current location
//   const getUserLocation = () => {
//     setIsLocating(true);
//     setLocationError('');
    
//     if (!navigator.geolocation) {
//       setLocationError('Geolocation is not supported by your browser');
//       setIsLocating(false);
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setUserLocation({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//           accuracy: position.coords.accuracy
//         });
//         setIsLocating(false);
//       },
//       (error) => {
//         let errorMessage = 'Unable to retrieve your location';
//         switch(error.code) {
//           case error.PERMISSION_DENIED:
//             errorMessage = 'Location access was denied';
//             break;
//           case error.POSITION_UNAVAILABLE:
//             errorMessage = 'Location information is unavailable';
//             break;
//           case error.TIMEOUT:
//             errorMessage = 'Location request timed out';
//             break;
//           default:
//             errorMessage = 'An unknown error occurred';
//             break;
//         }
//         setLocationError(errorMessage);
//         setIsLocating(false);
        
//         // Set a default location (San Francisco) for demo purposes
//         setUserLocation({
//           lat: 37.7749,
//           lng: -122.4194,
//           accuracy: 1000
//         });
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 10000,
//         maximumAge: 60000
//       }
//     );
//   };

//   // Get location when component mounts
//   useEffect(() => {
//     getUserLocation();
//   }, []);

//   const filteredUsers = nearbyUsers.filter(user => 
//     user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     user.amount.includes(searchQuery) ||
//     user.distance.includes(searchQuery)
//   ).filter(user => {
//     if (filters.amount && parseInt(user.amount.replace('$', '')) > parseInt(filters.amount)) return false;
//     if (filters.status !== 'all' && !user.status.toLowerCase().includes(filters.status)) return false;
//     if (filters.rating !== 'all' && user.rating < parseInt(filters.rating)) return false;
//     return true;
//   });

//   const handleRefreshLocation = () => {
//     getUserLocation();
//   };

//   // Calculate distance between two coordinates (simplified)
//   const calculateDistance = (lat1, lng1, lat2, lng2) => {
//     // Simple approximation for demo purposes
//     const latDiff = Math.abs(lat1 - lat2);
//     const lngDiff = Math.abs(lng1 - lng2);
//     const distance = Math.sqrt(latDiff * latDiff + lngDiff * lngDiff) * 69; // Rough miles conversion
//     return distance.toFixed(1);
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
//       {/* Search and Filter Section */}
//       <div className="mb-6">
//         <div className="flex flex-col md:flex-row gap-4">
//           <div className="flex-1 relative">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <FiSearch className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type="text"
//               className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Search by name, amount, or location"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
          
//           <button 
//             className="inline-flex items-center px-4 py-3 border border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50"
//             onClick={() => setShowFilters(!showFilters)}
//           >
//             <FiFilter className="h-5 w-5 mr-2" />
//             Filters
//           </button>
//         </div>
        
//         {/* Filter Options */}
//         {showFilters && (
//           <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
//             <div className="flex justify-between items-center mb-3">
//               <h3 className="font-medium text-gray-900">Filter Options</h3>
//               <button onClick={() => setShowFilters(false)}>
//                 <FiX className="h-5 w-5 text-gray-500" />
//               </button>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Max Amount</label>
//                 <select
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   value={filters.amount}
//                   onChange={(e) => setFilters({...filters, amount: e.target.value})}
//                 >
//                   <option value="">Any amount</option>
//                   <option value="100">Up to $100</option>
//                   <option value="250">Up to $250</option>
//                   <option value="500">Up to $500</option>
//                   <option value="1000">Up to $1000</option>
//                 </select>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
//                 <select
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   value={filters.status}
//                   onChange={(e) => setFilters({...filters, status: e.target.value})}
//                 >
//                   <option value="all">Any status</option>
//                   <option value="now">Available now</option>
//                   <option value="later">Available later</option>
//                 </select>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Min Rating</label>
//                 <select
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   value={filters.rating}
//                   onChange={(e) => setFilters({...filters, rating: e.target.value})}
//                 >
//                   <option value="all">Any rating</option>
//                   <option value="3">3+ stars</option>
//                   <option value="4">4+ stars</option>
//                   <option value="5">5 stars only</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Location Status */}
//       <div className="mb-4 flex items-center justify-between">
//         <div className="flex items-center">
//           {isLocating ? (
//             <>
//               <div className="w-3 h-3 rounded-full bg-blue-500 animate-ping mr-2"></div>
//               <span className="text-sm text-blue-600">Locating...</span>
//             </>
//           ) : userLocation ? (
//             <>
//               <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
//               <span className="text-sm text-gray-600">
//                 Location found {userLocation.accuracy < 100 ? '(High accuracy)' : '(Approximate)'}
//               </span>
//             </>
//           ) : (
//             <>
//               <div className="w-3 h-3 rounded-full bg-gray-400 mr-2"></div>
//               <span className="text-sm text-gray-600">Location not available</span>
//             </>
//           )}
//         </div>
        
//         <button 
//           onClick={handleRefreshLocation}
//           disabled={isLocating}
//           className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 disabled:text-gray-400"
//         >
//           <FiCompass className="mr-1 h-4 w-4" />
//           Refresh Location
//         </button>
//       </div>

//       {locationError && (
//         <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
//           {locationError}
//         </div>
//       )}

//       {/* Map Container */}
//       <div className="relative h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl overflow-hidden mb-6 border border-gray-200">
//         {/* Map Background with Grid Overlay */}
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        
//         {/* Grid Overlay */}
//         <div className="absolute inset-0 bg-[radial-gradient(#3b82f620_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
//         {/* User Location Pins */}
//         <div className="absolute inset-0 p-4">
//           {/* Current User Location */}
//           {userLocation && (
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//               <div className="relative">
//                 <div className="absolute -inset-3 bg-blue-400 rounded-full animate-ping opacity-20"></div>
//                 <div className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg border-2 border-blue-500">
//                   <FiNavigation className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-blue-600 text-white text-xs font-medium py-1 px-2 rounded-full whitespace-nowrap">
//                   You
//                 </div>
//               </div>
//             </div>
//           )}
          
//           {/* Nearby Users */}
//           {userLocation && filteredUsers.map((user, index) => {
//             // Calculate position based on user's actual coordinates (simplified for demo)
//             const latDiff = user.coords.lat - userLocation.lat;
//             const lngDiff = user.coords.lng - userLocation.lng;
            
//             // Convert to percentage positions on the map
//             const top = 50 + (latDiff * 500); // Scale factor for visualization
//             const left = 50 + (lngDiff * 500);
            
//             // Ensure positions stay within map bounds
//             const boundedTop = Math.max(10, Math.min(90, top));
//             const boundedLeft = Math.max(10, Math.min(90, left));
            
//             return (
//               <div 
//                 key={user.id} 
//                 className={`absolute transform -translate-x-1/2 -translate-y-1/2`}
//                 style={{ top: `${boundedTop}%`, left: `${boundedLeft}%` }}
//               >
//                 <div className="relative group">
//                   <div className="absolute -inset-1 bg-green-400 rounded-full animate-pulse opacity-10"></div>
//                   <div className="relative flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md border-2 border-green-500 cursor-pointer transition-transform hover:scale-110">
//                     <FiUser className="h-4 w-4 text-green-600" />
//                   </div>
//                   <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-white p-2 rounded-lg shadow-lg border border-gray-200 w-40 z-10">
//                     <p className="font-medium text-gray-900 text-sm">{user.name}</p>
//                     <p className="text-xs text-gray-500">
//                       {calculateDistance(
//                         userLocation.lat, 
//                         userLocation.lng, 
//                         user.coords.lat, 
//                         user.coords.lng
//                       )} miles away
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
        
//         {/* Map Controls */}
//         <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
//           <button 
//             className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
//             onClick={handleRefreshLocation}
//             disabled={isLocating}
//           >
//             <FiCompass className="h-4 w-4 text-gray-700" />
//           </button>
//         </div>

//         {/* Map Legend */}
//         <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm py-1 px-2 rounded-lg text-xs">
//           <div className="flex items-center mb-1">
//             <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
//             <span>Your location</span>
//           </div>
//           <div className="flex items-center">
//             <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
//             <span>Other users</span>
//           </div>
//         </div>
//       </div>

//       {/* Nearby Users List */}
//       <div>
//         <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
//           <FiUser className="mr-2 h-5 w-5 text-indigo-600" />
//           Nearby Users ({filteredUsers.length})
//         </h3>
        
//         {filteredUsers.length === 0 ? (
//           <div className="text-center py-8 bg-gray-50 rounded-xl">
//             <FiUser className="mx-auto h-12 w-12 text-gray-400" />
//             <p className="mt-4 text-gray-600">No users found matching your criteria</p>
//             <button 
//               className="mt-4 text-indigo-600 hover:text-indigo-500 text-sm"
//               onClick={() => {
//                 setSearchQuery('');
//                 setFilters({amount: '', status: 'all', rating: 'all'});
//               }}
//             >
//               Clear filters
//             </button>
//           </div>
//         ) : (
//           <div className="space-y-3 max-h-72 overflow-y-auto">
//             {filteredUsers.map(user => (
//               <div key={user.id} className="flex items-center p-3 rounded-xl border border-gray-200 hover:border-indigo-300 transition-colors bg-white">
//                 <img 
//                   src={user.profileImg} 
//                   alt={user.name}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 <div className="ml-3 flex-1 min-w-0">
//                   <div className="flex items-center justify-between">
//                     <h4 className="font-medium text-gray-900 text-sm truncate">{user.name}</h4>
//                     <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 whitespace-nowrap">
//                       {user.status}
//                     </span>
//                   </div>
//                   <div className="flex items-center mt-1 text-xs text-gray-500">
//                     <FiMapPin className="h-3 w-3 mr-1" />
//                     {user.distance} away
//                   </div>
//                 </div>
//                 <div className="ml-2 text-right">
//                   <div className="font-medium text-indigo-600 text-sm">{user.amount}</div>
//                   <div className="flex items-center text-xs text-gray-500 mt-1">
//                     <FiStar className="h-3 w-3 text-yellow-400 fill-yellow-400 mr-1" />
//                     {user.rating}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };



import { FiMapPin, FiNavigation, FiSearch, FiFilter, FiUser, FiCompass } from 'react-icons/fi';

export const MapFilter = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      {/* Search and Filter Section */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Search by name, amount, or location"
            />
          </div>
          
          <button className="inline-flex items-center px-4 py-3 border border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50">
            <FiFilter className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>
      </div>

      {/* Location Status */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
          <span className="text-sm text-gray-600">Location found (High accuracy)</span>
        </div>
        
        <button className="flex items-center text-sm text-indigo-600 hover:text-indigo-800">
          <FiCompass className="mr-1 h-4 w-4" />
          Refresh Location
        </button>
      </div>

      {/* Map Container */}
      <div className="relative h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl overflow-hidden mb-6 border border-gray-200">
        {/* Map Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f620_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        {/* Streets Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] [background-size:40px_40px]"></div>
        
        {/* User Location Pins */}
        <div className="absolute inset-0 p-4">
          {/* Current User Location */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute -inset-3 bg-blue-400 rounded-full animate-ping opacity-20"></div>
              <div className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border-2 border-blue-500">
                <FiNavigation className="h-6 w-6 text-blue-600" />
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-blue-600 text-white text-xs font-medium py-1 px-2 rounded-full whitespace-nowrap">
                You are here
              </div>
            </div>
          </div>
          
          {/* Nearby Users - Positioned around the center */}
          <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-green-400 rounded-full animate-pulse opacity-10"></div>
              <div className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md border-2 border-green-500 cursor-pointer">
                <FiUser className="h-5 w-5 text-green-600" />
              </div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-white p-2 rounded-lg shadow-lg border border-gray-200 w-40 z-10">
                <p className="font-medium text-gray-900 text-sm">Sarah M.</p>
                <p className="text-xs text-gray-500">0.8 miles away</p>
              </div>
            </div>
          </div>
          
          <div className="absolute top-2/3 left-2/5 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-green-400 rounded-full animate-pulse opacity-10"></div>
              <div className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md border-2 border-green-500 cursor-pointer">
                <FiUser className="h-5 w-5 text-green-600" />
              </div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-white p-2 rounded-lg shadow-lg border border-gray-200 w-40 z-10">
                <p className="font-medium text-gray-900 text-sm">Michael T.</p>
                <p className="text-xs text-gray-500">1.2 miles away</p>
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-green-400 rounded-full animate-pulse opacity-10"></div>
              <div className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md border-2 border-green-500 cursor-pointer">
                <FiUser className="h-5 w-5 text-green-600" />
              </div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-white p-2 rounded-lg shadow-lg border border-gray-200 w-40 z-10">
                <p className="font-medium text-gray-900 text-sm">Jessica L.</p>
                <p className="text-xs text-gray-500">0.5 miles away</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Controls */}
        <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
          <button className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-colors">
            <FiCompass className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        {/* Map Legend */}
        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm py-2 px-3 rounded-lg text-xs">
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span>Your location</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span>Other users</span>
          </div>
        </div>
      </div>

      {/* Location Tracking Options */}
      <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
        <h3 className="font-medium text-blue-900 mb-3 flex items-center">
          <FiCompass className="mr-2 h-5 w-5" />
          Location Tracking Options
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <FiNavigation className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">High Accuracy</p>
              <p className="text-xs text-gray-500">Uses GPS for precise location</p>
            </div>
          </div>
          
          <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <FiMapPin className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Battery Saving</p>
              <p className="text-xs text-gray-500">Uses Wi-Fi and mobile networks</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex items-center text-sm text-blue-700">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
          <span>Your location is only shared when you're actively using the app</span>
        </div>
      </div>

      {/* Nearby Users List */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
          <FiUser className="mr-2 h-5 w-5 text-indigo-600" />
          Nearby Users (3)
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center p-3 rounded-xl border border-gray-200 hover:border-indigo-300 transition-colors bg-white">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <FiUser className="h-5 w-5 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-900 text-sm">Sarah M.</h4>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Available now
                </span>
              </div>
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <FiMapPin className="h-3 w-3 mr-1" />
                0.8 miles away • $200
              </div>
            </div>
          </div>
          
          <div className="flex items-center p-3 rounded-xl border border-gray-200 hover:border-indigo-300 transition-colors bg-white">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <FiUser className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-900 text-sm">Michael T.</h4>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Available now
                </span>
              </div>
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <FiMapPin className="h-3 w-3 mr-1" />
                1.2 miles away • $150
              </div>
            </div>
          </div>
          
          <div className="flex items-center p-3 rounded-xl border border-gray-200 hover:border-indigo-300 transition-colors bg-white">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <FiUser className="h-5 w-5 text-purple-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-900 text-sm">Jessica L.</h4>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Available in 15 min
                </span>
              </div>
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <FiMapPin className="h-3 w-3 mr-1" />
                0.5 miles away • $300
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};