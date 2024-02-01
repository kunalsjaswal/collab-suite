// import { Routes } from "react-router-dom";

import CarouselFile from "./components/Landingpage/CarouselFile";
import Navbar from "./components/Navbar/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselFile/>


      {/* <Routes> */}
      {/* <Route index element = {}/> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
