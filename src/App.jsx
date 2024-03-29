import { useState,useEffect } from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import './App.css'
import Cms from "./containers/CmsPanel/Cms.jsx";
import Auth from "./containers/Auth/Auth.jsx";

import {supabase} from "./superbase.jsx";
import Home from './containers/Home/Home';





function App() {
 
    const [session, setSession] = useState(null)

    useEffect(()=>{
        supabase.auth.getSession().then(({data:{session}})=>{
            setSession(session)
           
        })
        supabase.auth.onAuthStateChange((_event,session)=>{
            setSession(session)
           
        })

        
    }, []);

   

    let login=!session?<Auth/>:<Cms key={session.user.id} session={session}/>


  return (
    <div className="App">
     
      <Router>
          <Routes>
          <Route path="/*" element={<Home session={session}/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/panel/*" element={login} />
         
          </Routes>
        </Router>
        <ToastContainer rtl={true} />
    </div>
  )
}

export default App
