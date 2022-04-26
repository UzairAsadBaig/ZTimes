import Landing from "./components/Landing";
import MobileAPP from "./components/MobileAPP";
import Navbar from "./components/Navbar";
import CardComp from './cardComponent/cardComp';
import CounterComp from './counterComp/counterComp';
import DrawTable from './components/DrawTable';
import 'antd/dist/antd.css';
import Video from "./components/Video";
function App() {
  return (
    <>
      {/* <CardComp/> */}
      {/* <CounterComp/> */}
      <Navbar />
      <Landing />
      <MobileAPP />
      <CounterComp />
      <DrawTable />
      <CardComp />
      <Video />

    </>
  )
}

export default App;
