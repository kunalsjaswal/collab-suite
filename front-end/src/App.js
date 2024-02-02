import Navbar from "./components/Navbar/Navbar";
import RouterPage from "./components/Router/RouterPage";

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
        <RouterPage/>

    </div>
  );
}

export default App;
