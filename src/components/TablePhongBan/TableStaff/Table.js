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

// IMG khóa học
import * as Unicons from "@iconscout/react-unicons";
// Improt CSS
import "./BasicTable.css";

function createData(
  stt,
  avatar,
  hovaten,
  vitri,
  khoahoc_1,
  khoahoc_2,
  khoahoc_3,
  khoahoc_4,
  khoahoc_5,
  khoahoc_6,
  chitiet
) {
  return {
    stt,
    avatar,
    hovaten,
    vitri,
    khoahoc_1,
    khoahoc_2,
    khoahoc_3,
    khoahoc_4,
    khoahoc_5,
    khoahoc_6,
    chitiet,
  };
}
// Color: Active: #f7941d, Disabled: #696969
const rows = [
  createData(
    1,
    <img
      className="edit__image"
      src="https://res.cloudinary.com/smarttax/image/upload/v1637055120/StaffeSmart/z2574681939751_091b3e274e1e61fa44fe6fe2711d9abd_fenapp.jpg"
    />,
    "Lý Mạnh Luông",
    "Pháp Lý",
    <span
      href="http://esmart.vn"
      target="_blank"
      rel="noreferrer"
      title="Luyện Lý Trí"
    >
      <Unicons.Uil0Plus size="40" color="#696969" />
    </span>,
    <a
      href="http://esmart.vn"
      target="_blank"
      rel="noreferrer"
      title="Luyện Lý Trí"
    >
      <Unicons.UilBrain size="40" color="#f7941d" />
    </a>,
    <a
      href="http://esmart.vn"
      target="_blank"
      rel="noreferrer"
      title="Luyện Lý Trí"
    >
      <Unicons.Uil6Plus size="40" color="#f7941d" />
    </a>,
    <a
      href="http://esmart.vn"
      target="_blank"
      rel="noreferrer"
      title="Luyện Lý Trí"
    >
      <Unicons.Uil10Plus size="40" color="#f7941d" />
    </a>,
    <a
      href="http://esmart.vn"
      target="_blank"
      rel="noreferrer"
      title="Luyện Lý Trí"
    >
      <Unicons.Uil12Plus size="40" color="#f7941d" />
    </a>,
    <a
      href="http://esmart.vn"
      target="_blank"
      rel="noreferrer"
      title="Luyện Lý Trí"
    >
      <Unicons.Uil3Plus size="40" color="#f7941d" />
    </a>,
    <a href="https://company.esmart.vn/profile/" target="_blank">
      <Unicons.UilUser size="40" color="#f7941d" />
    </a>
  ),
  createData(
    2,
    <img
      className="edit__image"
      src="https://res.cloudinary.com/smarttax/image/upload/v1620802936/V%C4%83n_ph%C3%B2ng_ti%E1%BB%87n_nghi_th%C3%AAm_view_c%E1%BB%B1c_ch%E1%BA%A5t_zqjht6.png"
    />,
    "Thùy Trang",
    "Kế Toán",
    <a
      href="http://esmart.vn"
      target="_blank"
      rel="noreferrer"
      title="Luyện Lý Trí"
    >
      <Unicons.Uil10Plus size="40" color="#f7941d" />
    </a>,
    <a
      href="http://esmart.vn"
      target="_blank"
      rel="noreferrer"
      title="Luyện Lý Trí"
    >
      <Unicons.Uil12Plus size="40" color="#f7941d" />
    </a>,
    <a></a>,
    <a></a>,
    <a></a>,
    <a></a>,
    <a href="https://company.esmart.vn/profile/" target="_blank">
      <Unicons.UilUser size="40" color="#f7941d" />
    </a>
  ),
  createData(
    3,
    <img
      className="edit__image"
      src="https://res.cloudinary.com/smarttax/image/upload/v1620802936/V%C4%83n_ph%C3%B2ng_ti%E1%BB%87n_nghi_th%C3%AAm_view_c%E1%BB%B1c_ch%E1%BA%A5t_zqjht6.png"
    />,

    "Đô My",
    "Sales",
    <a
      href="http://esmart.vn"
      target="_blank"
      rel="noreferrer"
      title="Luyện Lý Trí"
    >
      <Unicons.Uil12Plus size="40" color="#f7941d" />
    </a>,
    <a
      href="http://esmart.vn"
      target="_blank"
      rel="noreferrer"
      title="Luyện Lý Trí"
    >
      <Unicons.Uil3Plus size="40" color="#f7941d" />
    </a>,
    <a
      href="http://esmart.vn"
      target="_blank"
      rel="noreferrer"
      title="Luyện Lý Trí"
    >
      <Unicons.UilBrain size="40" color="#f7941d" />
    </a>,
    <a></a>,
    <a></a>,
    <a></a>,
    <a href="https://company.esmart.vn/profile/" target="_blank">
      <Unicons.UilUser size="40" color="#f7941d" />
    </a>
  ),
  createData(
    4,
    <img
      className="edit__image"
      src="https://res.cloudinary.com/smarttax/image/upload/v1637055120/StaffeSmart/z2574681939751_091b3e274e1e61fa44fe6fe2711d9abd_fenapp.jpg"
    />,

    "Diệu Thúy",
    "Kế Toán",
    <a
      href="http://esmart.vn"
      target="_blank"
      rel="noreferrer"
      title="Luyện Lý Trí"
    >
      <Unicons.Uil12Plus size="40" color="#f7941d" />
    </a>,
    <a
      href="http://esmart.vn"
      target="_blank"
      rel="noreferrer"
      title="Luyện Lý Trí"
    >
      <Unicons.Uil3Plus size="40" color="#f7941d" />
    </a>,
    <a
      href="http://esmart.vn"
      target="_blank"
      rel="noreferrer"
      title="Luyện Lý Trí"
    >
      <Unicons.UilBrain size="40" color="#f7941d" />
    </a>,<a></a>,<a></a>,<a></a>,<a href="https://company.esmart.vn/profile/" target="_blank">
      <Unicons.UilUser size="40" color="#f7941d" />
    </a>
  ),
  createData(
    5,
    <img
      className="edit__image"
      src="https://res.cloudinary.com/smarttax/image/upload/v1632707806/AlbumeSmart/hr_myb3zv.jpg"
    />,
    "Hà Trang",
    "Sales",
    <a
      href="http://esmart.vn"
      target="_blank"
      rel="noreferrer"
      title="Luyện Lý Trí"
    >
      <Unicons.Uil12Plus size="40" color="#f7941d" />
    </a>,
    <a
      href="http://esmart.vn"
      target="_blank"
      rel="noreferrer"
      title="Luyện Lý Trí"
    >
      <Unicons.Uil3Plus size="40" color="#f7941d" />
    </a>,
    <a
      href="http://esmart.vn"
      target="_blank"
      rel="noreferrer"
      title="Luyện Lý Trí"
    >
      <Unicons.UilBrain size="40" color="#f7941d" />
    </a>
    ,<a></a>,
    <a></a>,<a></a>,
    <a href="https://company.esmart.vn/profile/" target="_blank">
      <Unicons.UilUser size="40" color="#f7941d" />
    </a>
  ),
];

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

export default function BasicTable() {
  return (
    <div className="container__table">
      <h3>DANH SÁCH NHÂN VIÊN</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
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
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.stt}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.stt}</TableCell>
                <TableCell align="left">{row.avatar}</TableCell>
                <TableCell align="left">{row.hovaten}</TableCell>
                <TableCell align="left">{row.vitri}</TableCell>
                <TableCell align="left" className="edit__course">
                  {row.khoahoc_1}
                  {row.khoahoc_2}
                  {row.khoahoc_3}
                  {row.khoahoc_4}
                  {row.khoahoc_5}
                  {row.khoahoc_6}
                </TableCell>
                <TableCell align="center">{row.chitiet}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
