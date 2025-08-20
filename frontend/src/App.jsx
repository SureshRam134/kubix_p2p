import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from './PagesLog/Login'
import { Register } from './PagesLog/Register'
import { HomeHand } from './PagesHandCash/HomeHand'
import { Cash } from './PagesHandCash/Cash'
import { Map } from './PagesFeatures/Map'
import { MapFilter } from './PagesFeatures/MapFilter'
import { Exchange } from './PagesHandCash/Exchange'
import { RequestApproval } from './PagesFeatures/RequestApproval'
import { UserDisplay } from './PagesHandCash/UserDisplay'
import { MeetingFlow } from './PagesHandCash/MeetingFlow'
import { UserDetailsView } from './PagesFeatures/UserDetailsView'

function App() {


  
  return (
    <>
      <div>
        <BrowserRouter>
            <Routes>
              {/* login and register */}
                <Route path="/" element= {<Login/>}/>
                <Route path="/register" element= {<Register/>}/>

              {/* main pages  */}
                <Route path="/homehand" element= {<HomeHand/>}/>
                <Route path="/cash" element= {<Cash/>}/>
                <Route path="/exchange_page" element= {<Exchange/>}/>
                <Route path="/user_display" element= {<UserDisplay/>}/>
                <Route path="/meeting_flow" element= {<MeetingFlow/>}/>

              {/* page Features */}
                <Route path="/map" element= {<Map/>}/>
                <Route path="/user_Location" element= {<MapFilter/>}/>
                <Route path="/request_approval" element= {<RequestApproval/>}/>
                <Route path="/user_details_view" element= {<UserDetailsView/>}/>
                
            </Routes>
        </BrowserRouter>
      </div>
     
    </>
  )
}

export default App
