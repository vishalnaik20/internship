// import React from "react"
// import Header from "./components/Header";
// import Body from "./components/Body";
// import Footer from "./components/Footer";
// import Bootstrap from "./components/Bootstrap";
// import Home from "./Pages/Home";
// import Contact from "./Pages/Contact";
// import About from "./Pages/About";
// const App =() => {
//     return(
//         <>
//         <Bootstrap/>
//         <Home/>
//         <About/>
//         <Contact/>
        
//         <Header/>
//         <Body/>
//         <Footer/>
        
//         </>
//     )
// }
// export default App;
import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import { BrowserRouter,Routes,Route } from "react-router-dom";

function App(){
  return(
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<About />} path="/about" />
      <Route element={<Login />} path="/login" />
      <Route element={<Signup />} path="/signup" />
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;

