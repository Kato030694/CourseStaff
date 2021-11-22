// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import ReactRouter from "./components/ReactRouter/ReactRouter";
import NavbarTable from "./components/Navbar/NavbarTable";
import Footer from "./components/Footers/Footer";
import TableKeToan from "./components/TablePhongBan/KeToan/TableKeToan";
import TableTongHop from "./components/TablePhongBan/TongHop/TableTongHop";


function App() {
  return (
    <div className="Container_root">
      <NavbarTable />
      <Footer/>
     
      </div>
  );
}

export default App;
