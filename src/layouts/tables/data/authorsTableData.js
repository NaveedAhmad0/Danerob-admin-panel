/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import { useEffect, useState } from "react";
import axios from "axios";
// Images

export default function dataa() {
  // const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/user/get-all")
      .then((res) => {
        // setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const Author = ({ address }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      {/* <MDAvatar src={image} name={address} size="sm" /> */}
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {address}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "User address", accessor: "useraddress", width: "40%", align: "left" },
      { Header: "amount", accessor: "function", align: "left" },
      { Header: "sale period", accessor: "status", align: "center" },
      { Header: "last claim date", accessor: "lastDate", align: "center" },
      { Header: "remaining claim", accessor: "remaining", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        useraddress: <Author address="0xAddressBhsduY4sdF5kasd" />,
        function: <Job title="20%" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Seed" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        lastDate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        remaining: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2%
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        useraddress: <Author address="0xAddressBhsduY4sdF5kasd" />,
        function: <Job title="10%" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Public" color="secondary" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        remaining: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2%
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        useraddress: <Author address="0xAddressBhsduY4sdF5kasd" />,
        function: <Job title="10%" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Private" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MDTypography>
        ),
        remaining: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2%
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        useraddress: <Author address="0xAddressBhsduY4sdF5kasd" />,
        function: <Job title="15%" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Seed" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08
          </MDTypography>
        ),
        remaining: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2%
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        useraddress: <Author address="0xAddressBhsduY4sdF5kasd" />,
        function: <Job title="10%" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Private" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </MDTypography>
        ),
        remaining: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2%
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        useraddress: <Author address="0xAddressBhsduY4sdF5kasd" />,
        function: <Job title="5%" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Public" color="secondary" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        remaining: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2%
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
