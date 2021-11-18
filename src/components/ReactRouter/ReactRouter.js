import React, { Component } from "react";
import NavbarTable from "./../Navbar/NavbarTable";
import CarouselTable from "./../Carousel/CarouselTable";
import Table from "./../TablePhongBan/TableStaff/Table";
import TableKeToan from "./../TablePhongBan/KeToan/TableKeToan";
import TableKinhDoanh from "./../TablePhongBan/KinhDoanh/TableKinhDoanh";
import TableTongHop from "./../TablePhongBan/TongHop/TableTongHop";

import {
  BrowserRouter ,
  Route,
  Link,
  NavLink,
  Switch,
  Routes
} from "react-router-dom";
class ReactRouter extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavbarTable />
          <CarouselTable />
          <Routes>
            <Route exact path="/" component={Table} />
            <Route path="/tableketoan" component={TableKeToan} />
            <Route path="/tablekinhdoanh" component={TableKinhDoanh} />
            <Route path="/tabletonghop" component={TableTongHop} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default ReactRouter;
