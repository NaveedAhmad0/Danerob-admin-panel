/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import { useEffect, useState } from "react";
import axios from "axios";

export default function dataa() {
  // const [data, setData] = useState([]);

  useEffect(() => {
    axios("")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const Date = ({ title }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
    </MDBox>
  );
  const Percent = ({ title }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Sale Period", accessor: "Sale", align: "center" },
      { Header: "Cliff Open Date", accessor: "function", align: "center" },
      { Header: "Percent", accessor: "status", align: "left" },
    ],

    rows: [
      {
        Sale: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Public" color="secondary" variant="gradient" size="sm" />
          </MDBox>
        ),
        function: <Date title="23/04/18" />,
        status: <Percent title="20%" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        Sale: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Seed" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        function: <Date title="23/04/18" />,
        status: <Percent title="20%" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        Sale: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Private" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        function: <Date title="23/04/18" />,
        status: <Percent title="20%" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        Sale: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Public" color="secondary" variant="gradient" size="sm" />
          </MDBox>
        ),
        function: <Date title="23/04/18" />,
        status: <Percent title="20%" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        Sale: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Seed" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        function: <Date title="23/04/18" />,
        status: <Percent title="20%" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        Sale: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Public" color="secondary" variant="gradient" size="sm" />
          </MDBox>
        ),
        function: <Date title="23/04/18" />,
        status: <Percent title="20%" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
