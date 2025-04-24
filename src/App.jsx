import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './componen/Home/Navbar/NavBar'
import Footer from './componen/Home/Footr/Fottor'
import Banner from './componen/Home/bannar/Banner'
import { GiDoctorFace } from 'react-icons/gi'
import DoctorsSection from './componen/Home/OurBestDoctors/DataFace'
import SuccessSection from './componen/Home/Medical Services/Success'
import MyBookingsPage from './componen/MyBokingPage/MyBoking'
import DoctorDetailsPage from './componen/Home/DoctorDetails/DoctorDetailsPage'
import BlogsPage from './componen/BlogePag/BlogePage'
import ErrorPage from './componen/ErrorPage/ErrorPage'


const Home = () => {
  return (
    <div>
      <Banner />
      <DoctorsSection/>
      <SuccessSection/>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors/:id" element={<DoctorDetailsPage />} />
            <Route path="/my-bookings" element={<MyBookingsPage/>} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/about" element={<ErrorPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
