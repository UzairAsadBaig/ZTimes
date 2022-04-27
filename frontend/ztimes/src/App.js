import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import MobileAPP from "./components/MobileAPP";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CardComp from './components/cardComponent/cardComp';
import CounterComp from './components/counterComp/counterComp';
import DrawTable from './components/DrawTable';
import 'antd/dist/antd.css';
import Video from "./components/Video";
import Footer from './components/Footer'
import Login from "./components/Login";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Landing /> */}
    <Routes>


<Route exact path="/" element={
          <>
           <Navbar />
      <Landing />
      <MobileAPP />
            <CardComp />
            <Footer/>
      </>
      }/>

<Route exact path="/draw" element={
      <>
       <Navbar />
      <Landing />
<CounterComp />
<DrawTable />
<Footer/>

      </>
      }/>




<Route exact path="/live" element={
  <>
   <Navbar />
      <Landing />
  <Video />
  <Footer/>
  </>
} />

<Route exact path="/dashboard" element={
<Dashboard/>
} />
  
  <Route exact path="/admin/login" element={<Login/>}/>

        <Route exact path="/admin/dashboard" element={
          <Dashboard />
        } />

    </Routes>

    </>
  )
}

export default App;
