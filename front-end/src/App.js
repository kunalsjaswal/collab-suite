import Navbar from "./components/navbar/Navbar";
import RouterPage from "./components/router/RouterPage";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterPage />

    </div>
  );
}

export default App;
