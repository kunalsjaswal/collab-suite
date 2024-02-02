// import { Routes } from "react-router-dom";

// import Carousel from "./components/Landingpage/Carousel";
import Navbar from "./components/navbar/Navbar";
// import Login from "./components/Authentication/Login";
// import CarouselFile from "./components/landingpage/CarouselFile";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import CreateTeam from "./components/projectsetup/CreateTeam";
// import JoinTeam from "./components/projectsetup/JoinTeam"
import SetupFile from "./components/projectsetup/SetupFile";
AOS.init();

function App() {
  return (
    <div className="App">
      <Navbar />
      <SetupFile />
      {/* <CreateTeam /> */}
      {/* <JoinTeam /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Carousel/> */}
      {/* <CarouselFile /> */}


      {/* <Routes> */}
      {/* <Route index element = {}/> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
