import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import TablePagination from "@mui/material/TablePagination";
import Box from "@mui/material/Box";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import TableFooter from "@mui/material/TableFooter";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useTheme } from "@mui/material/styles";

// Carousel Icon Course
// import { Carousel } from "react-bootstrap";
// IMG khóa học
import * as Unicons from "@iconscout/react-unicons";
// Improt CSS
import "./BasicTable.css";
// Staff

import ToMInh from "../../Another/CompleteCourse/Marketing/ToMinh/ToMinh";


// Course
// Active
import OKRs from "../../Content_Course/Active/1.OKRs/OKRs";
import Customerservice from "../../Content_Course/Active/2.Customer_Service/Customerservice";
import Productivework from "../../Content_Course/Active/3.ProductiveWork/Productivework";
import Report from "../../Content_Course/Active/4.Report/Report";
import Fivescoures from "../../Content_Course/Active/5.5S/Fivescoures";
// import Logichoc from "../../Content_Course/Active/11.Logic_Hoc/Logichoc";
import Teamwork from "../../Content_Course/Active/17.TeamWork/Teamwork";
// import Customerserviced from "../../Content_Course/Deactive/2.Customer_Service_D/Customerserviced";
// import Flowchartd from "../../Content_Course/Deactive/6.FlowChart_D/Flowchartd";
import Sixhatsd from "../../Content_Course/Deactive/7.6Hats_D/Sixhatsd";
import Pointdemingd from "../../Content_Course/Deactive/8.14Point_Deming_D/Pointdemingd";
import Brainstormd from "../../Content_Course/Deactive/9.BrainStorm_D/Brainstormd";
// import Logicd from "../../Content_Course/Deactive/11.Logic_Hoc_D/Logicd";
import Fivewhysd from "../../Content_Course/Deactive/10.5Whys_D/Fivewhysd";
import Kanband from "../../Content_Course/Deactive/12.KanBan_D/Kanband";
// import Chotsalesd from "../../Content_Course/Deactive/13.ChotSales_D/Chotsalesd";
// import Tamlyhocd from "../../Content_Course/Deactive/14.TamLyHocThuyetPhuc_D/Tamlyhocd";
import Flowchart from "../../Content_Course/Active/6.FlowChart/Flowchart";
// import Pointdeming from "../../Content_Course/Active/8.14Point_Deming/Pointdeming";
// import Tamly from "../../Content_Course/Active/14.TamLyHocThuyetPhuc/Tamly";
// import Dongluclamviec from "../../Content_Course/Active/15.TaoDongLucLamViec/Dongluclamviec";
// import Chiakhoalanhdaod from "../../Content_Course/Deactive/16.ChiaKhoaLanhDao_D/Chiakhoalanhdaod";
// import Chiakhoalanhdao from "../../Content_Course/Active/16.ChiaKhoaLanhDao/Chiakhoalanhdao";
// import Productiveworkd from "../../Content_Course/Deactive/3.ProductiveWork_D/Productiveworkd";
// import Reportd from "../../Content_Course/Deactive/4.Report_D/Reportd";
// import OKRsd from "../../Content_Course/Deactive/1.OKRs_D/Okrsd";

// Deactive
function createData(
  stt,
  hovaten,
  vitri,
  khoahoc_1,
  khoahoc_2,
  khoahoc_3,
  khoahoc_4,
  khoahoc_5,
  khoahoc_6,
  khoahoc_7,
  khoahoc_8,
  khoahoc_9,
  khoahoc_10,
  khoahoc_11,
  khoahoc_12,
  khoahoc_13,
  khoahoc_14,
  khoahoc_15,
  khoahoc_16,
  khoahoc_17,
  khoahoc_18,
  khoahoc_19,
  khoahoc_20,
  khoahoc_21,
  khoahoc_22,
  khoahoc_23,
  khoahoc_24,
  tiendo,
  chitiet
) {
  return {
    stt,
    hovaten,
    vitri,
    khoahoc_1,
    khoahoc_2,
    khoahoc_3,
    khoahoc_4,
    khoahoc_5,
    khoahoc_6,
    khoahoc_7,
    khoahoc_8,
    khoahoc_9,
    khoahoc_10,
    khoahoc_11,
    khoahoc_12,
    khoahoc_13,
    khoahoc_14,
    khoahoc_15,
    khoahoc_16,
    khoahoc_17,
    khoahoc_18,
    khoahoc_19,
    khoahoc_20,
    khoahoc_21,
    khoahoc_22,
    khoahoc_23,
    khoahoc_24,
    tiendo,
    chitiet,
  };
}
// Color: Active: #f7941d, Disabled: #696969
const rows = [
  // ========================================= NHƯ Ý =========================================
  
  createData(
    1,
    "Thong Tố Minh",
    "Marketing",
    // Course
    // Active
    <div className="editcontent">
      <OKRs/>
    </div>,
    <div className="editcontent">
      <Customerservice/>
    </div>,
    <div className="editcontent">
      <Productivework/>
    </div>,
    <div className="editcontent">
      <Report/>
    </div>,
    <div className="editcontent">
      <Fivescoures/>
    </div>,
    <div className="editcontent">
     
      <Teamwork/>
    </div>,
    <div className="editcontent">
      <Flowchart/>
    </div>,
    <div className="editcontent">
      <Sixhatsd/>
    </div>,
    <div className="editcontent">
      <Pointdemingd/>
    </div>,
    <div className="editcontent">
      
      <Brainstormd />
    
    </div>,
    <div className="editcontent">
      <Fivewhysd />
    </div>,
    <div className="editcontent">
      <Kanband/>
    </div>,
    <div className="editcontent">
      <img
        src="https://res.cloudinary.com/smarttax/image/upload/v1639990999/Icon_Course/Icon_NotLearn/icon_kh%C3%B3a_h%E1%BB%8Dc-09_tq8nu3.png"
        alt=""
      />
      <span className="tooltiptext">
        <span>Course: Tâm lý học thuyết phục</span>
        <br />
        {/* <span>Finish day: 06/10/2020</span> */}
        <br />
        {/* <span>Point: 10/15</span> */}
        {/* <br /> */}
        <span>Status: Chưa Học</span>
        <br />
      </span>
    </div>,
    <div className="editcontent">
      {" "}
      <img
        src="https://res.cloudinary.com/smarttax/image/upload/v1639990999/Icon_Course/Icon_NotLearn/icon_kh%C3%B3a_h%E1%BB%8Dc-13_od75pa.png"
        alt=""
      />
      <span className="tooltiptext">
        <span>Course: Logic Học</span>
        <br />

        {/* <span>Point: 7/10</span> */}
        <br />
        <span>Status: Chưa Học</span>
        <br />
      </span>
    </div>,
    // Deactive
    <div></div>,
    <div></div>,
    <div></div>,
    <div></div>,
    <div></div>,
    <div></div>,
    <div></div>,
    <div></div>,
    <div></div>,
    <div></div>,
    // EndCourse
    <p>
      <ToMInh />
    </p>,
    <a
      href="https://company.esmart.vn/profile/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Unicons.UilUser size="40" color="#f7941d" />
    </a>
  ),
  // ========================================= QUỲNH THU =========================================
];
// =============================================  Table Sort =============================================

function descendingComparator(a, b, odrderBy) {
  if (b[odrderBy] < a[odrderBy]) {
    return -1;
  }
  if (b[odrderBy] > a[odrderBy]) {
    return 1;
  }
  return 0;
}
function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// Const Head
const headCells = [
  {
    id: "stt",
    numeric: false,
    disablePadding: false,
    label: "STT",
  },
];
// const avatar = [
//   {
//     id: "avatar",
//     numeric: false,
//     disablePadding: false,
//     label: "Avatar",
//   },
// ];
const infor_staff = [
  {
    id: "hovaten",
    numeric: false,
    disablePadding: false,
    label: "Họ Và Tên",
    withfix: true,
  },
  {
    id: "vitri",
    numeric: false,
    disablePadding: false,
    label: "Vị Trí",
    withfix: false,
  },
];
const headCells_course = [
  {
    id: "thongtinkhoahoc",
    numeric: true,
    disablePadding: false,
    label: "Thông Tin Khóc Học",
  },
];
const percent__course = [
  {
    id: "thongtinnhanvien",
    numeric: true,
    disablePadding: false,
    label: "Thông Tin Nhân Viên",
  },
];
const tiendo = [
  {
    id: "tiendohoanthanh",
    numeric: true,
    disablePadding: false,
    label: "Tiến Độ Hoàn Thành",
  },
];

// End HeadCells

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        {/* STT */}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "left"}
            sx={{ width: "4%" }}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
        {/* Another */}
        {percent__course.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
        {/* Infor Staff */}
        {infor_staff.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "left"}
            sx={{ width: "10%" }}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}

        {/* Infor Course */}
        {headCells_course.map((headCell) => (
          <TableCell
            key={headCell.id}
            sx={{ width: "55%" }}
            align={headCell.numeric ? "center" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
        {/* Tiến Độ */}
        {tiendo.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};
// ============================================= End Table Sort =============================================

// ========================================== Paginations  ==========================================
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
// ========================================== End Pagination ==========================================

export default function BasicTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  // const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  // const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <div className="container__table">
        <h3>DANH SÁCH NHÂN VIÊN</h3>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table custom pagination"
          >
            {/* <TableHead>
            <TableRow>
              <TableCell sx={{ width: "5%" }}>STT</TableCell>
              <TableCell sx={{ width: "10%" }}>Avatar</TableCell>
              <TableCell align="left" sx={{ width: "20%" }}>
                Họ và Tên
              </TableCell>
              <TableCell align="left" sx={{ width: "15%" }}>
                Vị Trí
              </TableCell>
              <TableCell align="left" sx={{ width: "35%" }}>
                Thông Tin Khóa Học
              </TableCell>
              <TableCell align="center" sx={{ width: "15%" }}>
                Thông Tin Nhân Viên
              </TableCell>
            </TableRow>
          </TableHead> */}
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    key={row.stt}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{row.stt}</TableCell>
                    <TableCell align="center">{row.chitiet}</TableCell>
                    {/* <TableCell align="left">{row.avatar}</TableCell> */}
                    <TableCell align="left">{row.hovaten}</TableCell>
                    <TableCell align="left">{row.vitri}</TableCell>

                    <TableCell>
                      {/* className="change__border change__border__right" */}

                      {row.khoahoc_1}
                      {row.khoahoc_2}
                      {row.khoahoc_3}
                      {row.khoahoc_4}
                      {row.khoahoc_5}
                      {row.khoahoc_6}
                      {row.khoahoc_7}
                      {row.khoahoc_8}
                      {row.khoahoc_9}
                      {row.khoahoc_10}
                      {row.khoahoc_11}
                      {row.khoahoc_12}
                      {row.khoahoc_13}
                      {row.khoahoc_14}
                      {row.khoahoc_15}
                      {row.khoahoc_16}
                      {row.khoahoc_17}
                      {/* <TableCell className="change__border change__border__left">
                        
                        
                        {row.khoahoc_18}
                        {row.khoahoc_19}
                        {row.khoahoc_20}
                        {row.khoahoc_21}
                        {row.khoahoc_22}
                        {row.khoahoc_23}
                        {row.khoahoc_24}
                      </TableCell> */}
                    </TableCell>
                    <TableCell align="center">{row.tiendo}</TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  className="edit__pagination"
                  rowsPerPageOptions={[10, 15, 20, { label: "All", value: -1 }]}
                  colSpan={8}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
}
