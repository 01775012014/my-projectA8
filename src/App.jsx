// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
// import Navbar from './componen/Home/Navbar/NavBar'
// import Footer from './componen/Home/Footr/Fottor'
// import Banner from './componen/Home/bannar/Banner'


// const Home = () => {
//   return (
//     <>
//       <Banner />
//     </>
//   )
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Footer />
      
      
//     </BrowserRouter>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './componen/Home/Navbar/NavBar'
import Footer from './componen/Home/Footr/Fottor'
import Banner from './componen/Home/bannar/Banner'

const Home = () => {
  return (
    <div>
      <Banner />
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
            <Route path="/my-bookings" element={<h1>My Bookings</h1>} />
            <Route path="/blogs" element={<h1>Blogs</h1>} />
            <Route path="/about" element={<h1>About</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
