// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import ReactRouter from "./components/ReactRouter/ReactRouter";
import NavbarTable from "./components/Navbar/NavbarTable";
import Footer from "./components/Footers/Footer";
import DemoSoft from "./components/DemoSoft/DemoSoft";
import TableKeToan from "./components/TablePhongBan/KeToan/TableKeToan";
import TableKinhDoanh from "./components/TablePhongBan/KinhDoanh/TableKinhDoanh";

function App() {
  return (
    <div className="Container_root">
      {/* <NavbarTable />
      <Footer/> */}
      <DemoSoft/>
      <TableKeToan/>
      <TableKinhDoanh/>
    </div>
  );
}

export default App;
