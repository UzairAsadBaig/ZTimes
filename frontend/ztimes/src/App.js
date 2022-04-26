import Landing from "./components/Landing";
import MobileAPP from "./components/MobileAPP";
import Navbar from "./components/Navbar";
import CardComp from './cardComponent/cardComp';
import CounterComp from './counterComp/counterComp';
import 'antd/dist/antd.css';
function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <MobileAPP />
      <CounterComp />
    </>
  );
}

export default App;
