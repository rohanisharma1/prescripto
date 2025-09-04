

/*import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Myprofile from './pages/Myprofile';
import MyAppointment from './pages/MyAppointment';
import Appiontment from './pages/Appiontment';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='mx-4 sm:mx-10%'>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docters" element={<Doctors/>}/>
        <Route path="/docters/:seciality" element={<Doctors/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/my-profile" element={<Myprofile/>}/>
        <Route path="/my-appiontment" element={<MyAppointment/>}/>
        <Route path="/appiontment/:docId" element={<Appiontment/>}/>
      </Routes>
    </div>
  );
};

export default App;
/*import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Myprofile from './pages/Myprofile';
import MyAppointment from './pages/MyAppointment';
import Appiontment from './pages/Appiontment';
import Navbar from './components/Navbar';
import AppContextProvider from './context/AppContext';
import Footer from './components/Footer';

const App = () => {
  return (
    <AppContextProvider>
      <div className='mx-4 sm:mx-10%'>
        <Naavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docters" element={<Doctors />} />
          <Route path="/docters/:speciality" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-profile" element={<Myprofile />} />
          <Route path="/my-appiontment" element={<MyAppointment />} />
          <Route path="/appiontment/:docId" element={<Appiontment />} />
        </Routes>
        <Footer/>
      </div>
    </AppContextProvider>
  );
};

export default App;*/
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Myprofile from './pages/Myprofile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment' // ✅ Renamed variable to match component name
import Navbar from './components/Navbar'
import AppContextProvider from './context/AppContext'
import Footer from './components/Footer'

const App = () => {
  return (
    <AppContextProvider>
      {/* ❌ Fixed incorrect class from sm:mx-10% to sm:mx-10 */}
      <div className="mx-4 sm:mx-10">
        <Navbar /> {/* ✅ Navbar import was fine */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} /> {/* ✅ matches Doctors.jsx */}
          <Route path="/doctors/:speciality" element={<Doctors />} /> {/* ✅ for filtered view */}
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-profile" element={<Myprofile />} />
          <Route path="/my-appointment" element={<MyAppointment />} /> {/* ✅ corrected spelling */}
          <Route path="/appointment/:docId" element={<Appointment />} /> {/* ✅ fixed variable name */}
        </Routes>

        <Footer />
      </div>
    </AppContextProvider>
  )
}

export default App
