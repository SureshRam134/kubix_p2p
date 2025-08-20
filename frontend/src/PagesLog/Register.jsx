import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Register = () => {
    const navigate = useNavigate()
    const [registerItem, setRegisterItem] = useState({
        email: '',
        phone: '',
        password: ''
    })


    const handleRegisterInputFeild = (e) => {
        const {name, value} = e.target
        setRegisterItem({...registerItem, [name]:value})
    }
    
   
    const handleRegisterFormSubmit = async (e) => {
        e.preventDefault()

        const{email,phone,password} = registerItem

        if(email && phone && password !=="") {
            const res = await axios.post('http://localhost:5000/Api/users/register', registerItem)
            alert(res.data.message)
            setRegisterItem(
                {
                    email: '',
                    phone: '',
                    password: ''
                })
        }else{
            alert('Fill the All Feilds')
        }
    }

    const handleRouteLogin = () => {
        setTimeout(() => {navigate('/')}, 1000)
    }

    return(
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-6 shadow-lg rounded-lg sm:px-10">
                    <div className="text-center">
                        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Register to Kubix</h1>
                    </div>
                    
                    <form className="mb-0 space-y-6" onSubmit={handleRegisterFormSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={registerItem.email} 
                                onChange={handleRegisterInputFeild} 
                                placeholder="Enter Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                
                            />
                        </div>

                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                                Mobile Number
                            </label>
                            <input 
                                type="number" 
                                id="mobile" 
                                name="phone" 
                                value={registerItem.phone} 
                                onChange={handleRegisterInputFeild} 
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
                                value={registerItem.password} 
                                onChange={handleRegisterInputFeild} 
                                placeholder="Enter Password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                
                            />
                        </div>

                        <div>
                            <button 
                                type="submit" 
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign Up
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
                                    Already have an account?
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <button
                                onClick={handleRouteLogin}
                                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Back to Login
                            </button>
                        </div>
                    </div>
                </div>

                <p className="mt-8 text-center text-sm text-gray-500">
                    @kubix_p2p.com
                </p>
            </div>
        </div>
    )
}