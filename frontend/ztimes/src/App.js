import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import MobileAPP from "./components/MobileAPP";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CardComp from './cardComponent/cardComp';
import CounterComp from './counterComp/counterComp';
import DrawTable from './components/DrawTable';
import 'antd/dist/antd.css';
import Video from "./components/Video";
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Landing />
    <Routes>


<Route exact path="/" element={
      <>
      <CardComp />
      <MobileAPP />
      </>
      }/>

<Route exact path="/draw" element={
      <>
<CounterComp />
<DrawTable />

      </>
      }/>




<Route exact path="/live" element={
  <Video />
} />
  
{/* <Dashboard/> */}
    </Routes>
      <Footer/>

    </>
  )
}

export default App;
