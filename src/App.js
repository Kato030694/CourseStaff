// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import ReactRouter from "./components/ReactRouter/ReactRouter";
import NavbarTable from "./components/Navbar/NavbarTable";
import Footer from "./components/Footers/Footer";
// import Timeline from "./components/Another/TimeLine/Timeline";
// import Demo from "./components/Another/InforCourse/Demo/Demo";


function App() {
  return (
    <div className="Container_root">
      <NavbarTable />
      <Footer/>
      {/* <Demo/> */}
      {/* <Timeline/> */}
      </div>
  );
}

export default App;
