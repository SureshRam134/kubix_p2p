import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const navigate = useNavigate()

// store to User Data 
    const[loginStore, setLoginStore] = useState([])

// inputuseState
    const [logItem, setLogItem] = useState({
        phone: '',
        password: ''
    })

// handle to target input feilds
    const handleLoginInputFeild = (e) => {
        const {name, value} = e.target
        setLogItem({...logItem, [name]:value})
    }

// prevent to auto submitting and check to user Login 
    const handleLoginFormSubmit = (e) => {
        e.preventDefault()
        const {phone, password} = logItem
           

         const adminLogin = 
            {
                phone:'9626250603',
                password:'test123@'
            }
            const findUser = loginStore.find((items) => items.phone === phone && items.password === password)
        const checkUser = () => {
            if(phone && password !== '') {
                if(findUser) { 
                    alert("SuccessFully Logined")
                    setTimeout(() => {navigate('/homehand')},750)
                    setLogItem({
                        phone: '',
                        password: ''
                    })
                    
                }else if(adminLogin.phone === phone && adminLogin.password === password) {
                    alert("SuccessFully Logined Go to admin page")
                    setLogItem({
                        phone: '',
                        password: ''
                    })

                }else{
                    alert('Invaild phone Number or Password')
                }
            }else{
                alert('Enter Phone Number and password')
            }
        }

        
        return checkUser()
    }

// get to the UserData
    const getUser = async () => {
        try {
            const res = await axios.get('http://localhost:5000/Api/users/register')
            setLoginStore(res.data.registerAllData);
            
        } catch (error) {
            console.log(error);
            
        }   
        
    }
    useEffect(() => {
        getUser()
    },[])
// pass to register page
    const handleRouteRegister = () => {
        setTimeout(() => {navigate('/register')},1000)
    }

    const handleRouteWithoutRegister = () => {}

    return(
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-6 shadow-lg rounded-lg sm:px-10">
                    <div className="text-center">
                        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Login to Kubix</h1>
                    </div>
                    
                    <form className="mb-0 space-y-6" onSubmit={handleLoginFormSubmit}>
                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                                Mobile Number
                            </label>
                            <input 
                                type="number" 
                                id="mobile" 
                                name="phone" 
                                value={logItem.phone} 
                                onChange={handleLoginInputFeild} 
                                placeholder="Enter Mobile Number"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                          
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                value={logItem.password} 
                                onChange={handleLoginInputFeild} 
                                placeholder="Enter Password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                           
                            />
                        </div>

                        <div>
                            <button 
                                type="submit" 
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    New to Kubix_p2p?
                                </span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button
                                onClick={handleRouteRegister}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Create your Kubix_p2p account
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <button 
                            onClick={handleRouteWithoutRegister}
                            className="text-sm font-medium text-gray-600 hover:text-gray-500"
                        >
                            Continue without registration
                        </button>
                    </div>
                </div>

                {/* <div className="mt-8 bg-white p-6 rounded-lg shadow">
                    <p className="text-sm text-gray-600 text-center">
                        Tap to the Kubix_p2p Register, then Enter the email like (kubix.@gmail.com) then 
                        Enter the Number like (xxx xxx xxxx) and Create to Own Password like (number or letters, its very secured).
                        You can must be register, can do any action but its doesn't register, your payment action cann't access...!
                    </p>
                    <h2 className="mt-4 text-center text-sm font-medium text-gray-700">
                        Kubix_p2p peer-to-peer <span onClick={handleRouteRegister} className="text-indigo-600 hover:text-indigo-500 cursor-pointer">Register</span>
                    </h2>
                </div> */}

                <p className="mt-8 text-center text-sm text-gray-500">
                    @kubix_p2p.com
                </p>
            </div>
        </div>
    )
}