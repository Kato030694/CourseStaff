// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import ReactRouter from "./components/ReactRouter/ReactRouter";
import NavbarTable from "./components/Navbar/NavbarTable";
import Footer from "./components/Footers/Footer";
// import TimeLine from "./components/Another/TimeLine/TimeLine";




function App() {
  return (
    <div className="Container_root">
      <NavbarTable />
      <Footer/>
      {/* <Demo/> */}
     {/* <TimeLine/> */}
     {/* <HorizalTimeLine/> */}
      </div>
  );
}

export default App;
