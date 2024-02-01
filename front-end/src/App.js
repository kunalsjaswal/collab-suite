// import { Routes } from "react-router-dom";

// import Carousel from "./components/Landingpage/Carousel";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Authentication/Login";
import CarouselFile from "./components/Landingpage/CarouselFile";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      {/* <Signup /> */}
      {/* <Carousel/> */}
      <CarouselFile />


      {/* <Routes> */}
      {/* <Route index element = {}/> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
